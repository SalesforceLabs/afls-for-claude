import { useState, useCallback } from "react";

interface EngineState {
  connected: boolean;
  toolCount: number;
  tools: Array<{ name: string; description: string }>;
  providerType: string;
  error: string | null;
}

export function useEngine() {
  const [state, setState] = useState<EngineState>({
    connected: false,
    toolCount: 0,
    tools: [],
    providerType: "",
    error: null,
  });

  const start = useCallback(
    async (
      providerType: string,
      credentials: Record<string, unknown>
    ) => {
      setState((prev) => ({ ...prev, error: null }));
      const result = await window.aflsApi.startEngine(providerType, credentials);

      if (result.ok) {
        setState({
          connected: true,
          toolCount: result.toolCount || 0,
          tools: result.tools || [],
          providerType,
          error: null,
        });
      } else {
        setState((prev) => ({
          ...prev,
          connected: false,
          error: result.error || "Failed to start engine",
        }));
      }

      return result;
    },
    []
  );

  const stop = useCallback(async () => {
    await window.aflsApi.stopEngine();
    setState({
      connected: false,
      toolCount: 0,
      tools: [],
      providerType: "",
      error: null,
    });
  }, []);

  return { ...state, start, stop };
}
