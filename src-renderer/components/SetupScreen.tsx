import React, { useState } from "react";

interface SetupScreenProps {
  onConnect: (
    providerType: string,
    credentials: Record<string, unknown>
  ) => Promise<{ ok: boolean; error?: string }>;
  error: string | null;
}

type ProviderType = "api-key" | "bedrock-gateway";

export default function SetupScreen({ onConnect, error }: SetupScreenProps) {
  const [providerType, setProviderType] = useState<ProviderType>("api-key");
  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleConnect = async () => {
    setConnecting(true);
    setLocalError(null);

    const credentials =
      providerType === "api-key"
        ? { apiKey }
        : { authToken, baseUrl };

    const result = await onConnect(providerType, credentials);
    if (!result.ok) {
      setLocalError(result.error || "Connection failed");
    }
    setConnecting(false);
  };

  const displayError = localError || error;

  const canConnect =
    providerType === "api-key"
      ? !!apiKey
      : !!authToken && !!baseUrl;

  return (
    <div className="setup-screen no-drag">
      <div className="setup-container">
        <div className="setup-header">
          <h1>AFLS Assistant</h1>
          <p>AI-powered assistant for AFLS implementations</p>
        </div>

        <div className="settings-panel">
          <div className="form-group">
            <label>How do you want to connect to Claude?</label>
            <select
              value={providerType}
              onChange={(e) => {
                setProviderType(e.target.value as ProviderType);
                setLocalError(null);
              }}
            >
              <option value="api-key">Anthropic API key</option>
              <option value="bedrock-gateway">Bedrock / custom gateway</option>
            </select>
          </div>

          {providerType === "api-key" && (
            <div className="form-group">
              <label>API key</label>
              <input
                type="password"
                placeholder="sk-ant-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && canConnect && handleConnect()}
              />
              <p className="setup-hint">
                Get a key from{" "}
                <a
                  href="https://console.anthropic.com/settings/keys"
                  target="_blank"
                  rel="noreferrer"
                >
                  console.anthropic.com
                </a>
                . Your key is stored locally and only sent to Anthropic.
              </p>
            </div>
          )}

          {providerType === "bedrock-gateway" && (
            <>
              <div className="form-group">
                <label>Gateway base URL</label>
                <input
                  type="text"
                  placeholder="https://your-gateway.example.com"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                />
                <p className="setup-hint">
                  An Anthropic-compatible endpoint (e.g. an Amazon Bedrock proxy or
                  internal LLM gateway). Requests go to <code>/v1/messages</code>.
                </p>
              </div>
              <div className="form-group">
                <label>API key / token</label>
                <input
                  type="password"
                  placeholder="Sent as the x-api-key header"
                  value={authToken}
                  onChange={(e) => setAuthToken(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && canConnect && handleConnect()}
                />
              </div>
            </>
          )}

          {displayError && <div className="setup-error">{displayError}</div>}

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 4 }}
            onClick={handleConnect}
            disabled={connecting || !canConnect}
          >
            {connecting ? "Connecting..." : "Connect"}
          </button>

          <p className="setup-hint" style={{ marginTop: 12, textAlign: "center" }}>
            Tip: set <code>ANTHROPIC_API_KEY</code>, or{" "}
            <code>ANTHROPIC_AUTH_TOKEN</code> +{" "}
            <code>ANTHROPIC_BEDROCK_BASE_URL</code>, and the app connects
            automatically next time.
          </p>
        </div>
      </div>
    </div>
  );
}
