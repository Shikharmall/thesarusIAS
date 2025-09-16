import { app, shell, BrowserWindow, ipcMain, globalShortcut } from "electron";
import path, { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: true, // start in fullscreen
    kiosk: true, // secure kiosk mode
    resizable: false,
    frame: false, // hide OS window frame
    autoHideMenuBar: true,
    icon: path.join(__dirname, "../../resources/logo.ico"),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow?.show();
  });

  // Prevent new windows (open in system browser instead)
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // Block navigation away from the exam page
  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("app://") && !is.dev) {
      event.preventDefault();
    }
  });

  // Load dev server or built app
  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.exam.secure");

  // Watch shortcuts (devtools only in dev)
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // Disable dangerous shortcuts
  globalShortcut.register("CommandOrControl+R", () => {});
  globalShortcut.register("CommandOrControl+Shift+R", () => {});
  globalShortcut.register("F5", () => {});
  globalShortcut.register("F12", () => {});
  globalShortcut.register("CommandOrControl+W", () => {});
  globalShortcut.register("Alt+F4", () => {}); // optional

  ipcMain.on("ping", () => console.log("pong"));

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Extra: Prevent multiple instances
const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}
