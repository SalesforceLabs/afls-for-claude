import {
  LLMProvider,
  Message,
  ToolDefinition,
  LLMProviderConfig,
  StreamChunk,
  ContentBlock,
} from "./provider.js";

const DEFAULT_MODEL = "claude-sonnet-4-5-20250929";
const DEFAULT_MAX_TOKENS = 8192;

export class ApiKeyProvider implements LLMProvider {
  id = "api-key";
  name = "Anthropic API Key";
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async validateCredentials(): Promise<boolean> {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": this.apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: DEFAULT_MODEL,
          max_tokens: 16,
          messages: [{ role: "user", content: "hi" }],
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async chat(
    systemPrompt: string,
    messages: Message[],
    tools: ToolDefinition[],
    config?: LLMProviderConfig,
    onChunk?: (chunk: StreamChunk) => void
  ): Promise<Message> {
    const model = config?.model ?? DEFAULT_MODEL;
    const maxTokens = config?.maxTokens ?? DEFAULT_MAX_TOKENS;

    const body: Record<string, unknown> = {
      model,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role === "system" ? "user" : m.role,
        content: m.content,
      })),
      stream: true,
    };

    if (tools.length > 0) {
      body.tools = tools.map((t) => ({
        name: t.name,
        description: t.description,
        input_schema: t.input_schema,
      }));
    }

    if (config?.temperature !== undefined) {
      body.temperature = config.temperature;
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Anthropic API error ${res.status}: ${errText}`);
    }

    return this.processStream(res, onChunk);
  }

  private async processStream(
    res: Response,
    onChunk?: (chunk: StreamChunk) => void
  ): Promise<Message> {
    const contentBlocks: ContentBlock[] = [];
    let currentToolId = "";
    let currentToolName = "";
    let currentToolInput = "";
    let currentText = "";

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;

        let event: Record<string, unknown>;
        try {
          event = JSON.parse(data);
        } catch {
          continue;
        }

        const eventType = event.type as string;

        if (eventType === "content_block_start") {
          const block = event.content_block as Record<string, unknown>;
          if (block.type === "tool_use") {
            currentToolId = block.id as string;
            currentToolName = block.name as string;
            currentToolInput = "";
            onChunk?.({
              type: "tool_use_start",
              id: currentToolId,
              name: currentToolName,
            });
          } else if (block.type === "text") {
            currentText = (block.text as string) || "";
          }
        } else if (eventType === "content_block_delta") {
          const delta = event.delta as Record<string, unknown>;
          if (delta.type === "text_delta") {
            const text = delta.text as string;
            currentText += text;
            onChunk?.({ type: "text_delta", text });
          } else if (delta.type === "input_json_delta") {
            const json = delta.partial_json as string;
            currentToolInput += json;
            onChunk?.({ type: "tool_use_delta", input_json: json });
          }
        } else if (eventType === "content_block_stop") {
          if (currentToolId) {
            let input: Record<string, unknown> = {};
            try {
              input = JSON.parse(currentToolInput);
            } catch {
              // empty input
            }
            contentBlocks.push({
              type: "tool_use",
              id: currentToolId,
              name: currentToolName,
              input,
            });
            onChunk?.({ type: "tool_use_end", id: currentToolId });
            currentToolId = "";
            currentToolName = "";
            currentToolInput = "";
          } else if (currentText) {
            contentBlocks.push({ type: "text", text: currentText });
            currentText = "";
          }
        } else if (eventType === "message_stop") {
          onChunk?.({ type: "message_stop" });
        } else if (eventType === "error") {
          const errMsg =
            (event.error as Record<string, string>)?.message || "Unknown error";
          onChunk?.({ type: "error", error: errMsg });
          throw new Error(errMsg);
        }
      }
    }

    // If there's remaining text that wasn't closed
    if (currentText && !contentBlocks.some((b) => b.type === "text")) {
      contentBlocks.push({ type: "text", text: currentText });
    }

    return {
      role: "assistant",
      content: contentBlocks,
    };
  }
}
