import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { app } from "electron";

export interface Conversation {
  id: string;
  title: string;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StoredMessage {
  id: string;
  conversationId: string;
  role: "user" | "assistant";
  text: string;
  toolCalls?: string; // JSON-serialized
  createdAt: string;
}

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (db) return db;

  const dbDir = path.join(app.getPath("userData"), "data");
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  db = new Database(path.join(dbDir, "conversations.db"));
  db.pragma("journal_mode = WAL");

  db.exec(`
    CREATE TABLE IF NOT EXISTS conversations (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      conversation_id TEXT NOT NULL,
      role TEXT NOT NULL,
      text TEXT NOT NULL,
      tool_calls TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_messages_conv ON messages(conversation_id);

    -- Migration: add pinned column if missing
    CREATE TABLE IF NOT EXISTS _migration_check (id INTEGER);
    DROP TABLE _migration_check;
  `);

  // Add pinned column to existing tables (safe to run repeatedly)
  try {
    db.exec(`ALTER TABLE conversations ADD COLUMN pinned INTEGER NOT NULL DEFAULT 0`);
  } catch {
    // Column already exists — ignore
  }

  db.exec(`
    CREATE TABLE IF NOT EXISTS library_items (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      content_type TEXT NOT NULL,
      svg TEXT,
      source_conversation_id TEXT,
      tags TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  return db;
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Derive a short title from the first user message */
function deriveTitle(text: string): string {
  const clean = text.replace(/^\/afls:\S+\s*/, "").trim();
  if (!clean) return text.slice(0, 60);
  return clean.length > 60 ? clean.slice(0, 57) + "..." : clean;
}

// --- Conversations ---

export function listConversations(limit = 50): Conversation[] {
  const rows = getDb()
    .prepare(
      "SELECT id, title, pinned, created_at as createdAt, updated_at as updatedAt FROM conversations ORDER BY pinned DESC, updated_at DESC LIMIT ?"
    )
    .all(limit) as Array<{ id: string; title: string; pinned: number; createdAt: string; updatedAt: string }>;
  return rows.map((r) => ({ ...r, pinned: r.pinned === 1 }));
}

export function createConversation(firstMessage: string): Conversation {
  const id = generateId();
  const title = deriveTitle(firstMessage);
  const now = new Date().toISOString();

  getDb()
    .prepare("INSERT INTO conversations (id, title, created_at, updated_at) VALUES (?, ?, ?, ?)")
    .run(id, title, now, now);

  return { id, title, pinned: false, createdAt: now, updatedAt: now };
}

export function updateConversationTitle(id: string, title: string): void {
  getDb()
    .prepare("UPDATE conversations SET title = ?, updated_at = datetime('now') WHERE id = ?")
    .run(title, id);
}

export function deleteConversation(id: string): void {
  const d = getDb();
  d.prepare("DELETE FROM messages WHERE conversation_id = ?").run(id);
  d.prepare("DELETE FROM conversations WHERE id = ?").run(id);
}

export function touchConversation(id: string): void {
  getDb()
    .prepare("UPDATE conversations SET updated_at = datetime('now') WHERE id = ?")
    .run(id);
}

export function togglePinConversation(id: string): void {
  getDb()
    .prepare("UPDATE conversations SET pinned = CASE WHEN pinned = 1 THEN 0 ELSE 1 END WHERE id = ?")
    .run(id);
}

// --- Messages ---

export function getMessages(conversationId: string): StoredMessage[] {
  return getDb()
    .prepare(
      "SELECT id, conversation_id as conversationId, role, text, tool_calls as toolCalls, created_at as createdAt FROM messages WHERE conversation_id = ? ORDER BY created_at ASC"
    )
    .all(conversationId) as StoredMessage[];
}

export function addMessage(
  conversationId: string,
  role: "user" | "assistant",
  text: string,
  toolCalls?: unknown[]
): StoredMessage {
  const id = generateId();
  const now = new Date().toISOString();
  const toolCallsJson = toolCalls ? JSON.stringify(toolCalls) : null;

  getDb()
    .prepare(
      "INSERT INTO messages (id, conversation_id, role, text, tool_calls, created_at) VALUES (?, ?, ?, ?, ?, ?)"
    )
    .run(id, conversationId, role, text, toolCallsJson, now);

  touchConversation(conversationId);

  return {
    id,
    conversationId,
    role,
    text,
    toolCalls: toolCallsJson ?? undefined,
    createdAt: now,
  };
}

export function closeDb(): void {
  if (db) {
    db.close();
    db = null;
  }
}
