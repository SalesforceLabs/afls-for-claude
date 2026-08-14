const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("aflsApi", {
  // Settings
  getSettings: () => ipcRenderer.invoke("settings:get"),
  saveSettings: (settings) => ipcRenderer.invoke("settings:save", settings),

  // Provider
  detectEnvProvider: () => ipcRenderer.invoke("provider:detect-env"),
  validateProvider: (type, credentials) =>
    ipcRenderer.invoke("provider:validate", type, credentials),

  // Engine
  startEngine: (providerType, credentials) =>
    ipcRenderer.invoke("engine:start", providerType, credentials),
  stopEngine: () => ipcRenderer.invoke("engine:stop"),

  // Chat — nonce is passed to tag stream events, convId for server-side persistence
  sendMessage: (message, nonce, convId, model) => ipcRenderer.invoke("chat:send", message, nonce, convId, model),
  abortChat: () => ipcRenderer.invoke("chat:abort"),
  clearChat: () => ipcRenderer.invoke("chat:clear"),

  // Chat events — all events include nonce + convId
  onTextDelta: (callback) => {
    const handler = (_event, data) => callback(data.text, data.nonce, data.convId);
    ipcRenderer.on("chat:text-delta", handler);
    return () => ipcRenderer.removeListener("chat:text-delta", handler);
  },
  onToolStart: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on("chat:tool-start", handler);
    return () => ipcRenderer.removeListener("chat:tool-start", handler);
  },
  onToolResult: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on("chat:tool-result", handler);
    return () => ipcRenderer.removeListener("chat:tool-result", handler);
  },
  onToolEnd: (callback) => {
    const handler = (_event, data) => callback(data);
    ipcRenderer.on("chat:tool-end", handler);
    return () => ipcRenderer.removeListener("chat:tool-end", handler);
  },
  onComplete: (callback) => {
    const handler = (_event, data) => callback(data.nonce, data.convId);
    ipcRenderer.on("chat:complete", handler);
    return () => ipcRenderer.removeListener("chat:complete", handler);
  },
  onError: (callback) => {
    const handler = (_event, data) => callback(data.error, data.nonce, data.convId);
    ipcRenderer.on("chat:error", handler);
    return () => ipcRenderer.removeListener("chat:error", handler);
  },

  // Commands & Skills
  listCommands: () => ipcRenderer.invoke("commands:list"),
  listSkills: () => ipcRenderer.invoke("skills:list"),

  // Salesforce Org
  listSfOrgs: () => ipcRenderer.invoke("sfOrg:list"),
  setSfOrg: (org) => ipcRenderer.invoke("sfOrg:set", org),
  loginSfOrg: (alias, instanceUrl) => ipcRenderer.invoke("sfOrg:login", alias, instanceUrl),

  // Library
  listLibraryItems: () => ipcRenderer.invoke("library:list"),
  saveLibraryItem: (input) => ipcRenderer.invoke("library:save", input),
  deleteLibraryItem: (id) => ipcRenderer.invoke("library:delete", id),
  searchLibraryItems: (query) => ipcRenderer.invoke("library:search", query),

  // Conversation History
  listConversations: () => ipcRenderer.invoke("history:list"),
  createConversation: (firstMessage) =>
    ipcRenderer.invoke("history:create", firstMessage),
  deleteConversation: (id) => ipcRenderer.invoke("history:delete", id),
  renameConversation: (id, title) =>
    ipcRenderer.invoke("history:rename", id, title),
  togglePinConversation: (id) =>
    ipcRenderer.invoke("history:toggle-pin", id),
  getConversationMessages: (conversationId) =>
    ipcRenderer.invoke("history:messages", conversationId),
  addConversationMessage: (conversationId, role, text, toolCalls) =>
    ipcRenderer.invoke("history:add-message", conversationId, role, text, toolCalls),

  // File reading
  readFile: (filePath) => ipcRenderer.invoke("file:read", filePath),
  openExternal: (url) => ipcRenderer.invoke("file:open-external", url),

  // Guide section reading
  readGuideSection: (guideSlug, sectionSlug) =>
    ipcRenderer.invoke("file:read-guide-section", guideSlug, sectionSlug),
  openPdfAtPage: (pdfFileName, page) =>
    ipcRenderer.invoke("file:open-pdf-at-page", pdfFileName, page),
  openPdfWindow: (pdfFileName, page) =>
    ipcRenderer.invoke("file:open-pdf-window", pdfFileName, page),
});
