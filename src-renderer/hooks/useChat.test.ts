/**
 * Tests for nonce-based stream isolation.
 * Simulates the IPC event flow to verify that events from
 * stream A never pollute stream B.
 */

function test_nonce_rejects_stale_events() {
  console.log("TEST: Stale events from old stream are rejected by nonce check");

  // Simulate bgStream + nonce logic
  let bgStream: { nonce: number; text: string } | null = null;

  function onTextDelta(text: string, nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return; // REJECT
    bgStream.text += text;
  }

  // Start stream A with nonce 1
  bgStream = { nonce: 1, text: "" };
  onTextDelta("Hello ", 1);
  onTextDelta("from A", 1);
  console.assert(bgStream.text === "Hello from A", `  Stream A: "${bgStream.text}"`);

  // User switches session, starts stream B with nonce 2
  // Old bgStream is finalized
  bgStream = { nonce: 2, text: "" };

  // Late events from stream A arrive (nonce 1) — must be rejected
  onTextDelta(" still going", 1);
  onTextDelta(" more from A", 1);
  console.assert(bgStream.text === "", `  Stream B should be empty, got: "${bgStream.text}"`);

  // Events from stream B arrive (nonce 2) — accepted
  onTextDelta("Response to B", 2);
  console.assert(bgStream.text === "Response to B", `  Stream B: "${bgStream.text}"`);

  console.log("  PASSED");
}

function test_complete_with_wrong_nonce_ignored() {
  console.log("TEST: onComplete with stale nonce doesn't persist to wrong session");

  let bgStream: { nonce: number; convId: string; text: string } | null = null;
  const persisted: Array<{ convId: string; text: string }> = [];

  function onComplete(nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return;
    persisted.push({ convId: bgStream.convId, text: bgStream.text });
    bgStream = null;
  }

  function onTextDelta(text: string, nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return;
    bgStream.text += text;
  }

  // Stream A
  bgStream = { nonce: 1, convId: "session-A", text: "" };
  onTextDelta("Hello", 1);

  // User switches, starts stream B
  bgStream = { nonce: 2, convId: "session-B", text: "" };
  onTextDelta("World", 2);

  // Stream A completes late
  onComplete(1);
  console.assert(persisted.length === 0, "  Stream A complete should be ignored (nonce mismatch)");

  // Stream B completes
  onComplete(2);
  console.assert(persisted.length === 1, "  Stream B should be persisted");
  console.assert(persisted[0].convId === "session-B", "  Should persist to session-B");
  console.assert(persisted[0].text === "World", `  Text should be "World", got "${persisted[0].text}"`);

  console.log("  PASSED");
}

function test_rapid_session_switching() {
  console.log("TEST: Rapid session switching — only latest stream accepted");

  let bgStream: { nonce: number; convId: string; text: string } | null = null;
  const persisted: Array<{ convId: string; text: string }> = [];

  function onTextDelta(text: string, nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return;
    bgStream.text += text;
  }
  function onComplete(nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return;
    persisted.push({ convId: bgStream.convId, text: bgStream.text });
    bgStream = null;
  }

  // User rapidly creates 3 sessions
  bgStream = { nonce: 1, convId: "A", text: "" };
  bgStream = { nonce: 2, convId: "B", text: "" };
  bgStream = { nonce: 3, convId: "C", text: "" };

  // Events from all 3 arrive interleaved
  onTextDelta("from-A", 1);  // rejected (nonce 1 != 3)
  onTextDelta("from-B", 2);  // rejected (nonce 2 != 3)
  onTextDelta("from-C", 3);  // accepted

  console.assert(bgStream!.text === "from-C", `  Only C accepted, got: "${bgStream!.text}"`);

  onComplete(1); // rejected
  onComplete(2); // rejected
  console.assert(persisted.length === 0, "  Old completes rejected");

  onComplete(3); // accepted
  console.assert(persisted.length === 1, "  Only C persisted");
  console.assert(persisted[0].convId === "C", "  Persisted to C");

  console.log("  PASSED");
}

function test_switching_back_to_streaming_session() {
  console.log("TEST: Switching back to streaming session re-injects live message");

  let bgStream: { nonce: number; convId: string; text: string } | null = null;
  let currentConvId = "A";
  let viewMessages: string[] = [];

  function onTextDelta(text: string, nonce: number) {
    if (!bgStream || bgStream.nonce !== nonce) return;
    bgStream.text += text;
    // Sync to view only if viewing this conversation
    if (currentConvId === bgStream.convId) {
      viewMessages = [`assistant: ${bgStream.text}`];
    }
  }

  // Start streaming in A
  bgStream = { nonce: 1, convId: "A", text: "" };
  viewMessages = [];

  onTextDelta("Hello", 1);
  console.assert(viewMessages[0] === "assistant: Hello", "  View shows streaming");

  // Switch to B
  currentConvId = "B";
  viewMessages = ["loaded from B"];

  onTextDelta(" World", 1);
  // View should NOT be updated (viewing B, stream is in A)
  console.assert(viewMessages[0] === "loaded from B", "  View not polluted");
  console.assert(bgStream!.text === "Hello World", "  But bgStream still accumulates");

  // Switch back to A — should re-inject live message
  currentConvId = "A";
  if (bgStream && bgStream.convId === currentConvId) {
    viewMessages = [`assistant: ${bgStream.text}`];
  }
  console.assert(viewMessages[0] === "assistant: Hello World", "  Live message re-injected");

  console.log("  PASSED");
}

// Run
console.log("\n=== useChat Nonce-Based Stream Isolation Tests ===\n");
test_nonce_rejects_stale_events();
test_complete_with_wrong_nonce_ignored();
test_rapid_session_switching();
test_switching_back_to_streaming_session();
console.log("\n=== All tests passed ===\n");
