import { getDb, generateId } from "./history.js";

export interface LibraryItem {
  id: string;
  title: string;
  content: string;
  contentType: "response" | "code" | "diagram" | "table";
  svg?: string;
  sourceConversationId?: string;
  sourceConversationTitle?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface LibraryRow {
  id: string;
  title: string;
  content: string;
  content_type: string;
  svg: string | null;
  source_conversation_id: string | null;
  conv_title: string | null;
  tags: string | null;
  created_at: string;
  updated_at: string;
}

function rowToItem(row: LibraryRow): LibraryItem {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    contentType: row.content_type as LibraryItem["contentType"],
    svg: row.svg ?? undefined,
    sourceConversationId: row.source_conversation_id ?? undefined,
    sourceConversationTitle: row.conv_title ?? undefined,
    tags: row.tags ? JSON.parse(row.tags) : [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export function listLibraryItems(limit = 100): LibraryItem[] {
  const rows = getDb()
    .prepare(
      `SELECT l.*, c.title as conv_title
       FROM library_items l
       LEFT JOIN conversations c ON l.source_conversation_id = c.id
       ORDER BY l.created_at DESC LIMIT ?`
    )
    .all(limit) as LibraryRow[];
  return rows.map(rowToItem);
}

export function createLibraryItem(input: {
  title: string;
  content: string;
  contentType: LibraryItem["contentType"];
  svg?: string;
  sourceConversationId?: string;
  tags?: string[];
}): LibraryItem {
  const id = generateId();
  const now = new Date().toISOString();
  const tagsJson = input.tags ? JSON.stringify(input.tags) : null;

  getDb()
    .prepare(
      "INSERT INTO library_items (id, title, content, content_type, svg, source_conversation_id, tags, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
    )
    .run(id, input.title, input.content, input.contentType, input.svg ?? null, input.sourceConversationId ?? null, tagsJson, now, now);

  return {
    id,
    title: input.title,
    content: input.content,
    contentType: input.contentType,
    svg: input.svg,
    sourceConversationId: input.sourceConversationId,
    tags: input.tags ?? [],
    createdAt: now,
    updatedAt: now,
  };
}

export function deleteLibraryItem(id: string): void {
  getDb().prepare("DELETE FROM library_items WHERE id = ?").run(id);
}

export function updateLibraryItem(
  id: string,
  updates: { title?: string; tags?: string[] }
): void {
  const sets: string[] = [];
  const values: unknown[] = [];

  if (updates.title !== undefined) {
    sets.push("title = ?");
    values.push(updates.title);
  }
  if (updates.tags !== undefined) {
    sets.push("tags = ?");
    values.push(JSON.stringify(updates.tags));
  }

  if (sets.length === 0) return;

  sets.push("updated_at = datetime('now')");
  values.push(id);

  getDb()
    .prepare(`UPDATE library_items SET ${sets.join(", ")} WHERE id = ?`)
    .run(...values);
}

export function searchLibraryItems(query: string): LibraryItem[] {
  const pattern = `%${query}%`;
  const rows = getDb()
    .prepare(
      `SELECT l.*, c.title as conv_title
       FROM library_items l
       LEFT JOIN conversations c ON l.source_conversation_id = c.id
       WHERE l.title LIKE ? OR l.content LIKE ? OR l.tags LIKE ?
       ORDER BY l.created_at DESC LIMIT 100`
    )
    .all(pattern, pattern, pattern) as LibraryRow[];
  return rows.map(rowToItem);
}
