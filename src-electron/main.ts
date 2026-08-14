import { app, BrowserWindow, shell, protocol, net } from "electron";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { registerIpcHandlers } from "./ipc/handlers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = !app.isPackaged;

// Register a custom protocol to serve local files (PDFs, etc.) to the renderer.
// This avoids file:// security restrictions in iframes.
protocol.registerSchemesAsPrivileged([
  {
    scheme: "afls-local",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
    },
  },
]);

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 750,
    minWidth: 600,
    minHeight: 400,
    title: "AFLS Assistant",
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 16, y: 16 },
    webPreferences: {
      preload: path.join(__dirname, "..", "src-electron", "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      webviewTag: true,
    },
  });

  // Log renderer console messages to stdout for debugging
  mainWindow.webContents.on("console-message", (_event, level, message, line, sourceId) => {
    const levels = ["DEBUG", "INFO", "WARN", "ERROR"];
    console.log(`[Renderer ${levels[level] || level}] ${message} (${sourceId}:${line})`);
  });

  // Register IPC handlers
  registerIpcHandlers(mainWindow);

  if (isDev) {
    // Try Vite dev server first, fall back to production build
    mainWindow.loadURL("http://localhost:5173").catch(() => {
      mainWindow!.loadFile(
        path.join(__dirname, "..", "dist-renderer", "index.html")
      );
    });
  } else {
    mainWindow.loadFile(
      path.join(__dirname, "..", "dist-renderer", "index.html")
    );
  }

  // Open external links in the default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // Handle afls-local:// protocol — serves files from the project directory.
  // URL format: afls-local://file/documentation/some-file.pdf
  const projectRoot = path.resolve(__dirname, "..");
  protocol.handle("afls-local", (request) => {
    const url = new URL(request.url);
    // pathname is like /documentation/some-file.pdf
    const filePath = path.join(projectRoot, decodeURIComponent(url.pathname));
    return net.fetch(pathToFileURL(filePath).toString());
  });

  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
