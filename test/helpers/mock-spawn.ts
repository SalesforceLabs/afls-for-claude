/**
 * Reusable spawn mock factory for testing Salesforce CLI interactions.
 */
import { EventEmitter } from "events";
import type { ChildProcess } from "child_process";

/**
 * Creates a mock ChildProcess-like object with stdout/stderr EventEmitters.
 */
export function createMockChildProcess(): ChildProcess {
  const proc = new EventEmitter() as ChildProcess;
  (proc as any).stdout = new EventEmitter();
  (proc as any).stderr = new EventEmitter();
  (proc as any).stdin = null;
  (proc as any).pid = 12345;
  (proc as any).killed = false;
  (proc as any).kill = vi.fn();
  (proc as any).ref = vi.fn();
  (proc as any).unref = vi.fn();
  (proc as any).disconnect = vi.fn();
  (proc as any).connected = false;
  (proc as any).stdio = [null, (proc as any).stdout, (proc as any).stderr];
  return proc;
}

/**
 * Simulate a successful SF CLI JSON response.
 * Emits the JSON on stdout then fires close(0).
 */
export function simulateSfSuccess(
  mockProc: ChildProcess,
  jsonResult: unknown
): void {
  const payload = JSON.stringify({ status: 0, result: jsonResult });
  process.nextTick(() => {
    mockProc.stdout!.emit("data", Buffer.from(payload));
    mockProc.emit("close", 0);
  });
}

/**
 * Simulate a failed SF CLI response.
 * Emits an error message on stderr then fires close(1).
 */
export function simulateSfError(
  mockProc: ChildProcess,
  errorMsg: string
): void {
  process.nextTick(() => {
    mockProc.stderr!.emit("data", Buffer.from(errorMsg));
    mockProc.emit("close", 1);
  });
}

/**
 * Simulate a JSON error response on stdout (SF CLI returns errors as JSON sometimes).
 */
export function simulateSfJsonError(
  mockProc: ChildProcess,
  errorMessage: string
): void {
  const payload = JSON.stringify({ status: 1, message: errorMessage });
  process.nextTick(() => {
    mockProc.stdout!.emit("data", Buffer.from(payload));
    mockProc.emit("close", 0);
  });
}

/**
 * Simulate a spawn error event (e.g., command not found).
 */
export function simulateSpawnError(
  mockProc: ChildProcess,
  errorMsg: string
): void {
  process.nextTick(() => {
    mockProc.emit("error", new Error(errorMsg));
  });
}
