import { ipcMain, BrowserWindow, shell } from "electron";
import { execFile, spawn } from "child_process";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { ConversationEngine } from "../engine/conversation.js";
import { McpClient } from "../mcp/client.js";
import { PromptBuilder } from "../engine/prompt-builder.js";
import { LLMProvider } from "../llm/provider.js";
import { ApiKeyProvider } from "../llm/api-key.js";
import { SFGatewayProvider } from "../llm/sf-gateway.js";
import { BedrockGatewayProvider, detectGatewayFromEnv } from "../llm/bedrock-gateway.js";
import { loadSettings, saveSettings, Settings } from "../settings.js";
import {
  listConversations,
  createConversation,
  deleteConversation,
  getMessages,
  addMessage,
  updateConversationTitle,
  togglePinConversation,
} from "../engine/history.js";
import {
  listLibraryItems,
  createLibraryItem,
  deleteLibraryItem,
  searchLibraryItems,
} from "../engine/library.js";

// Shared resources (created once at engine:start)
let llm: LLMProvider | null = null;
let mcpClient: McpClient | null = null;
let promptBuilder: PromptBuilder | null = null;
let engineStarting: Promise<unknown> | null = null;

// Per-session engines
const engines = new Map<string, ConversationEngine>();

// Track which session is actively streaming (for abort)
let activeConvId: string | null = null;

function createProvider(
  providerType: string,
  credentials: { apiKey?: string; accessToken?: string; gatewayUrl?: string; authToken?: string; baseUrl?: string }
): LLMProvider {
  switch (providerType) {
    case "api-key":
      return new ApiKeyProvider(credentials.apiKey!);
    case "sf-gateway":
      return new SFGatewayProvider(credentials.accessToken!, credentials.gatewayUrl);
    case "bedrock-gateway":
      return new BedrockGatewayProvider(credentials.authToken!, credentials.baseUrl!);
    default:
      throw new Error(`Unknown provider: ${providerType}`);
  }
}

/** Get or create an engine for a conversation. Restores messages from DB on first access. */
function getOrCreateEngine(convId: string): ConversationEngine {
  const existing = engines.get(convId);
  if (existing) return existing;

  if (!llm || !mcpClient || !promptBuilder) {
    throw new Error("Engine not started");
  }

  const engine = new ConversationEngine(llm, mcpClient, promptBuilder);
  engine.initialize();

  // Restore message history from DB so the LLM has full conversation context
  const stored = getMessages(convId);
  if (stored.length > 0) {
    engine.restoreMessages(stored);
  }

  engines.set(convId, engine);
  return engine;
}

export function registerIpcHandlers(mainWindow: BrowserWindow): void {
  // --- Settings ---

  ipcMain.handle("settings:get", async () => {
    return loadSettings();
  });

  ipcMain.handle("settings:save", async (_event, settings: Settings) => {
    saveSettings(settings);
    return { ok: true };
  });

  // --- Auto-detect env-based credentials ---

  ipcMain.handle("provider:detect-env", async () => {
    const gateway = detectGatewayFromEnv();
    if (gateway) {
      return {
        detected: true,
        providerType: "bedrock-gateway",
        credentials: gateway,
        label: "SF AI Model Gateway (Bedrock)",
      };
    }

    // Check for plain Anthropic API key in env
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (apiKey) {
      return {
        detected: true,
        providerType: "api-key",
        credentials: { apiKey },
        label: "Anthropic API Key (from env)",
      };
    }

    return { detected: false };
  });

  // --- Provider Management ---

  ipcMain.handle(
    "provider:validate",
    async (
      _event,
      type: string,
      credentials: { apiKey?: string; accessToken?: string; gatewayUrl?: string }
    ) => {
      try {
        const provider = createProvider(type, credentials);
        const valid = await provider.validateCredentials();
        return { valid };
      } catch (error) {
        return {
          valid: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }
  );

  // --- Engine Lifecycle ---

  ipcMain.handle(
    "engine:start",
    async (
      _event,
      providerType: string,
      credentials: Record<string, string | undefined>
    ) => {
      // If already running, return existing state
      if (llm && mcpClient && promptBuilder) {
        const tools = mcpClient.getTools();
        return {
          ok: true,
          providerType,
          toolCount: tools.length,
          tools: tools.map((t) => ({ name: t.name, description: t.description })),
        };
      }

      // If a start is already in progress, wait for it
      if (engineStarting) {
        await engineStarting;
        if (llm && mcpClient && promptBuilder) {
          const tools = mcpClient.getTools();
          return {
            ok: true,
            providerType,
            toolCount: tools.length,
            tools: tools.map((t) => ({ name: t.name, description: t.description })),
          };
        }
      }

      const doStart = async () => {
        llm = createProvider(providerType, credentials);
        mcpClient = new McpClient();
        await mcpClient.start();
        promptBuilder = new PromptBuilder();
      };

      try {
        engineStarting = doStart();
        await engineStarting;
        engineStarting = null;

        const tools = mcpClient!.getTools();
        return {
          ok: true,
          providerType,
          toolCount: tools.length,
          tools: tools.map((t) => ({ name: t.name, description: t.description })),
        };
      } catch (error) {
        engineStarting = null;
        return {
          ok: false,
          error: error instanceof Error ? error.message : String(error),
        };
      }
    }
  );

  ipcMain.handle("engine:stop", async () => {
    // Abort all active engines
    for (const engine of engines.values()) {
      engine.abort();
    }
    engines.clear();
    activeConvId = null;

    await mcpClient?.stop();
    llm = null;
    mcpClient = null;
    promptBuilder = null;
    return { ok: true };
  });

  // --- Chat ---

  ipcMain.handle("chat:send", async (_event, message: string | unknown[], nonce: number, convId: string, model?: string) => {
    if (!llm || !mcpClient || !promptBuilder) {
      return { ok: false, error: "Engine not started" };
    }

    let engine: ConversationEngine;
    try {
      engine = getOrCreateEngine(convId);
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : String(error) };
    }

    activeConvId = convId;

    // Extract text for history persistence (images are not stored in history DB)
    let textForHistory: string;
    if (Array.isArray(message)) {
      textForHistory = (message as Array<{ type: string; text?: string }>)
        .filter((b) => b.type === "text" && b.text)
        .map((b) => b.text!)
        .join("\n");
    } else {
      textForHistory = message;
    }

    // Accumulate assistant content for server-side persistence.
    let accumulatedText = "";
    const accumulatedTools: Array<{ id: string; name: string; result?: string; isError?: boolean; status: string }> = [];

    // ALL events are always sent — tagged with convId so the renderer decides what to display.
    // No nonce filtering on the main process side.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const runPromise = engine.sendMessage(message as any, {
      onTextDelta: (text) => {
        accumulatedText += text;
        mainWindow.webContents.send("chat:text-delta", { text, nonce, convId });
      },
      onToolStart: (id, name) => {
        accumulatedTools.push({ id, name, status: "running" });
        mainWindow.webContents.send("chat:tool-start", { id, name, nonce, convId });
      },
      onToolResult: (id, result, isError) => {
        const tool = accumulatedTools.find((t) => t.id === id);
        if (tool) {
          tool.result = result;
          tool.isError = isError;
          tool.status = isError ? "error" : "success";
        }
        mainWindow.webContents.send("chat:tool-result", { id, result, isError, nonce, convId });
      },
      onToolEnd: (id) => {
        mainWindow.webContents.send("chat:tool-end", { id, nonce, convId });
      },
      onComplete: () => {
        mainWindow.webContents.send("chat:complete", { nonce, convId });
      },
      onError: (error) => {
        mainWindow.webContents.send("chat:error", { error, nonce, convId });
      },
    }, model);

    // Persist when the run finishes — whether it completed, errored, or was aborted.
    runPromise.finally(() => {
      if (activeConvId === convId) {
        activeConvId = null;
      }
      if (convId && (accumulatedText || accumulatedTools.length > 0)) {
        addMessage(
          convId,
          "assistant",
          accumulatedText,
          accumulatedTools.length > 0
            ? accumulatedTools.map((tc) => ({ id: tc.id, name: tc.name, result: tc.result, isError: tc.isError, status: tc.status }))
            : undefined
        );
      }
    });

    return { ok: true };
  });

  ipcMain.handle("chat:abort", async () => {
    if (activeConvId) {
      engines.get(activeConvId)?.abort();
    }
    return { ok: true };
  });

  ipcMain.handle("chat:clear", async () => {
    // No-op — per-session engines don't need clearing.
    // Each session has its own engine with its own message history.
    return { ok: true };
  });

  // --- Commands ---

  ipcMain.handle("commands:list", async () => {
    const pb = new PromptBuilder();
    return pb.getCommandList();
  });

  ipcMain.handle("skills:list", async () => {
    const pb = new PromptBuilder();
    return pb.getSkillIndex();
  });

  // --- Conversation History ---

  ipcMain.handle("history:list", async () => {
    return listConversations();
  });

  ipcMain.handle("history:create", async (_event, firstMessage: string) => {
    return createConversation(firstMessage);
  });

  ipcMain.handle("history:delete", async (_event, id: string) => {
    // Also remove the per-session engine
    const engine = engines.get(id);
    if (engine) {
      engine.abort();
      engines.delete(id);
    }
    deleteConversation(id);
    return { ok: true };
  });

  ipcMain.handle("history:rename", async (_event, id: string, title: string) => {
    updateConversationTitle(id, title);
    return { ok: true };
  });

  ipcMain.handle("history:toggle-pin", async (_event, id: string) => {
    togglePinConversation(id);
    return { ok: true };
  });

  ipcMain.handle("history:messages", async (_event, conversationId: string) => {
    return getMessages(conversationId);
  });

  ipcMain.handle(
    "history:add-message",
    async (
      _event,
      conversationId: string,
      role: "user" | "assistant",
      text: string,
      toolCalls?: unknown[]
    ) => {
      return addMessage(conversationId, role, text, toolCalls);
    }
  );

  // --- Library ---

  ipcMain.handle("library:list", async () => {
    return listLibraryItems();
  });

  ipcMain.handle("library:save", async (_event, input) => {
    return createLibraryItem(input);
  });

  ipcMain.handle("library:delete", async (_event, id: string) => {
    deleteLibraryItem(id);
    return { ok: true };
  });

  ipcMain.handle("library:search", async (_event, query: string) => {
    return searchLibraryItems(query);
  });

  // --- Salesforce Org Management ---

  ipcMain.handle("sfOrg:list", async () => {
    return new Promise((resolve) => {
      execFile("sf", ["org", "list", "--json"], { timeout: 15000 }, (error, stdout) => {
        if (error) {
          resolve({ orgs: [], error: error.message });
          return;
        }
        try {
          const data = JSON.parse(stdout);
          const orgs: Array<{ alias?: string; username: string; orgId: string; instanceUrl: string; isDefault?: boolean }> = [];
          const seen = new Set<string>();
          for (const category of ["nonScratchOrgs", "scratchOrgs", "sandboxes", "devHubs", "other"]) {
            const list = data?.result?.[category];
            if (!Array.isArray(list)) continue;
            for (const o of list) {
              const username = o.username || o.userName;
              if (!username || seen.has(username)) continue;
              seen.add(username);
              orgs.push({
                alias: o.alias || undefined,
                username,
                orgId: o.orgId || "",
                instanceUrl: o.instanceUrl || "",
                isDefault: o.isDefaultUsername || o.isDefaultDevHub || false,
              });
            }
          }
          resolve({ orgs });
        } catch {
          resolve({ orgs: [], error: "Failed to parse sf org list output" });
        }
      });
    });
  });

  ipcMain.handle("sfOrg:set", async (_event, org: string) => {
    const settings = loadSettings();
    saveSettings({ ...settings, sfTargetOrg: org });
    return { ok: true };
  });

  ipcMain.handle("sfOrg:login", async (_event, alias?: string, instanceUrl?: string) => {
    return new Promise((resolve) => {
      const args = ["org", "login", "web", "--json"];
      if (alias) args.push("--alias", alias);
      if (instanceUrl) args.push("--instance-url", instanceUrl);
      const child = spawn("sf", args, { stdio: "ignore", detached: true });
      child.unref();
      // Login happens asynchronously in the browser — resolve immediately
      resolve({ ok: true });
    });
  });

  // --- File Reading ---

  ipcMain.handle("file:read", async (_event, filePath: string) => {
    try {
      const content = await readFile(filePath, "utf-8");
      return { ok: true, content, path: filePath };
    } catch (error) {
      return { ok: false, error: error instanceof Error ? error.message : String(error) };
    }
  });

  ipcMain.handle("file:open-external", async (_event, url: string) => {
    shell.openExternal(url);
    return { ok: true };
  });

  // --- Guide Section Reading ---

  ipcMain.handle(
    "file:read-guide-section",
    async (_event, guideSlug: string, sectionSlug: string) => {
      try {
        const { readFileSync, existsSync } = await import("fs");

        // Resolve paths relative to the project root (two levels up from dist-electron/ipc/)
        const guidesDir = path.join(__dirname, "..", "..", "knowledge", "guides", guideSlug);
        const manifestPath = path.join(guidesDir, "_manifest.json");

        if (!existsSync(manifestPath)) {
          return { ok: false, error: `Guide '${guideSlug}' not found` };
        }

        const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
        const section = manifest.sections?.find(
          (s: { slug: string }) => s.slug === sectionSlug
        );
        if (!section) {
          return { ok: false, error: `Section '${sectionSlug}' not found in guide '${guideSlug}'` };
        }

        const sectionPath = path.join(guidesDir, section.file);
        if (!existsSync(sectionPath)) {
          return { ok: false, error: `Section file not found: ${section.file}` };
        }

        const content = readFileSync(sectionPath, "utf-8");

        // Build both a afls-local:// URL and the absolute file path for the PDF
        const pdfUrl = `afls-local://file/documentation/${encodeURIComponent(manifest.pdfFileName)}`;
        const pdfPath = path.join(__dirname, "..", "..", "documentation", manifest.pdfFileName);

        return {
          ok: true,
          content,
          guideTitle: manifest.guideTitle,
          guideSlug: manifest.guideSlug,
          pdfFileName: manifest.pdfFileName,
          pdfUrl,
          pdfPath,
          sectionTitle: section.title,
          sectionSlug: section.slug,
          startPage: section.startPage,
          endPage: section.endPage,
        };
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    }
  );

  ipcMain.handle(
    "file:open-pdf-at-page",
    async (_event, pdfFileName: string, pageNum: number) => {
      try {
        const { existsSync } = await import("fs");

        const pdfPath = path.join(__dirname, "..", "..", "documentation", pdfFileName);
        if (!existsSync(pdfPath)) {
          return { ok: false, error: `PDF not found: ${pdfFileName}` };
        }

        // Open in default PDF viewer — page navigation is manual for now
        shell.openPath(pdfPath);
        return { ok: true };
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    }
  );

  // Open a PDF in a dedicated Electron window with Chromium's native viewer at a specific page
  ipcMain.handle(
    "file:open-pdf-window",
    async (_event, pdfFileName: string, pageNum: number) => {
      try {
        const { existsSync } = await import("fs");
        const { pathToFileURL } = await import("url");

        const pdfPath = path.join(__dirname, "..", "..", "documentation", pdfFileName);
        if (!existsSync(pdfPath)) {
          return { ok: false, error: `PDF not found: ${pdfFileName}` };
        }

        const fileUrl = pathToFileURL(pdfPath).toString() + `#page=${pageNum}`;

        const pdfWindow = new BrowserWindow({
          width: 900,
          height: 800,
          title: `${pdfFileName} — Page ${pageNum}`,
          webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            plugins: true,
          },
        });

        pdfWindow.loadURL(fileUrl);
        return { ok: true };
      } catch (error) {
        return { ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    }
  );
}
