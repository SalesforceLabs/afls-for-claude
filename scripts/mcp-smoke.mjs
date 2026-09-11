#!/usr/bin/env node
// Smoke-test the committed MCP bundle the way Claude Code's plugin loader runs
// it: spawn `node ${CLAUDE_PLUGIN_ROOT}/mcp-server/index.mjs` with the plugin
// root as both CLAUDE_PLUGIN_ROOT and cwd (mirroring .mcp.json), then drive a
// real newline-delimited JSON-RPC session over stdio.
//
// This catches the failure class the bundle-drift check cannot: a bundle that
// is perfectly in sync yet still refuses to connect — it crashes on startup,
// pollutes stdout (corrupting the JSON-RPC stream -> "-32000 Connection
// closed"), or returns no tools. Fast, deterministic, no Salesforce org.
//
// Exits 0 on success, 1 on any failure (with a GitHub-Actions ::error:: line).

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bundle = resolve(root, 'mcp-server/index.mjs');

// Match the CI bundle-drift step: no committed bundle on this branch -> skip.
if (!existsSync(bundle)) {
  console.log('No committed bundle at mcp-server/index.mjs; skipping MCP smoke test.');
  process.exit(0);
}

const fail = (msg) => {
  console.error(`::error::MCP smoke test failed: ${msg}`);
  process.exit(1);
};

const child = spawn('node', [bundle], {
  cwd: root,
  env: { ...process.env, CLAUDE_PLUGIN_ROOT: root },
  stdio: ['pipe', 'pipe', 'pipe'],
});

let out = '';
let err = '';
let earlyExit = null;
child.stdout.on('data', (d) => (out += d));
child.stderr.on('data', (d) => (err += d));
child.on('exit', (code, sig) => (earlyExit = { code, sig }));
child.on('error', (e) => fail(`could not spawn server: ${e.message}`));

const send = (obj) => child.stdin.write(JSON.stringify(obj) + '\n');

// 1) initialize
send({
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'ci-smoke', version: '1.0' },
  },
});

// 2) after a beat, complete the handshake and list tools
setTimeout(() => {
  send({ jsonrpc: '2.0', method: 'notifications/initialized' });
  send({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
}, 800);

// 3) evaluate
setTimeout(() => {
  child.kill('SIGKILL');

  // A server must stay alive; a premature exit is the "-32000" symptom.
  if (earlyExit && earlyExit.code !== null && earlyExit.code !== 0) {
    fail(`server exited early (code=${earlyExit.code}). stderr:\n${err.slice(0, 1500)}`);
  }

  // Every stdout line must be valid JSON-RPC. Any stray print (a stray
  // console.log, a banner, a warning) corrupts the stream and breaks clients.
  const lines = out.split('\n').filter((l) => l.trim().length > 0);
  let initOk = false;
  let toolCount = null;
  for (const line of lines) {
    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      fail(`non-JSON text on stdout (would corrupt JSON-RPC): ${JSON.stringify(line.slice(0, 200))}`);
    }
    if (msg.id === 1 && msg.result?.serverInfo) initOk = true;
    if (msg.id === 2 && Array.isArray(msg.result?.tools)) toolCount = msg.result.tools.length;
  }

  if (!initOk) fail(`no valid initialize response. stdout:\n${out.slice(0, 1500)}\nstderr:\n${err.slice(0, 800)}`);
  if (toolCount === null) fail(`tools/list returned no valid result. stdout:\n${out.slice(0, 1500)}`);
  if (toolCount === 0) fail('tools/list returned 0 tools.');

  console.log(`MCP smoke test passed: initialize OK, tools/list returned ${toolCount} tools.`);
  process.exit(0);
}, 2500);
