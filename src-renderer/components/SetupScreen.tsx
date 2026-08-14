import React, { useState } from "react";

interface SetupScreenProps {
  onConnect: (
    providerType: string,
    credentials: Record<string, unknown>
  ) => Promise<{ ok: boolean; error?: string }>;
  error: string | null;
}

export default function SetupScreen({ onConnect, error }: SetupScreenProps) {
  const [providerType, setProviderType] = useState<"api-key" | "sf-gateway">(
    "api-key"
  );
  const [apiKey, setApiKey] = useState("");
  const [gatewayUrl, setGatewayUrl] = useState("");
  const [gatewayToken, setGatewayToken] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleConnect = async () => {
    setConnecting(true);
    setLocalError(null);

    const credentials =
      providerType === "api-key"
        ? { apiKey }
        : { accessToken: gatewayToken, gatewayUrl: gatewayUrl || undefined };

    const result = await onConnect(providerType, credentials);
    if (!result.ok) {
      setLocalError(result.error || "Connection failed");
    }
    setConnecting(false);
  };

  const displayError = localError || error;

  return (
    <div className="setup-screen no-drag">
      <div className="setup-container">
        <div className="setup-header">
          <h1>AFLS Assistant</h1>
          <p>AI-powered assistant for AFLS implementations</p>
        </div>

        <div className="settings-panel">
          <div className="form-group">
            <label>LLM Provider</label>
            <select
              value={providerType}
              onChange={(e) =>
                setProviderType(e.target.value as "api-key" | "sf-gateway")
              }
            >
              <option value="api-key">Anthropic API Key</option>
              <option value="sf-gateway">Salesforce LLM Gateway</option>
            </select>
          </div>

          {providerType === "api-key" && (
            <div className="form-group">
              <label>API Key</label>
              <input
                type="password"
                placeholder="sk-ant-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleConnect()}
              />
              <p className="setup-hint">
                Get your API key from{" "}
                <a
                  href="https://console.anthropic.com/settings/keys"
                  target="_blank"
                  rel="noreferrer"
                >
                  console.anthropic.com
                </a>
              </p>
            </div>
          )}

          {providerType === "sf-gateway" && (
            <>
              <div className="form-group">
                <label>Gateway URL (optional)</label>
                <input
                  type="text"
                  placeholder="https://your-llm-gateway.example.com"
                  value={gatewayUrl}
                  onChange={(e) => setGatewayUrl(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Access Token</label>
                <input
                  type="password"
                  placeholder="Bearer token from SSO"
                  value={gatewayToken}
                  onChange={(e) => setGatewayToken(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleConnect()}
                />
              </div>
            </>
          )}

          {displayError && (
            <div className="setup-error">{displayError}</div>
          )}

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 4 }}
            onClick={handleConnect}
            disabled={
              connecting ||
              (providerType === "api-key" && !apiKey) ||
              (providerType === "sf-gateway" && !gatewayToken)
            }
          >
            {connecting ? "Connecting..." : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}
