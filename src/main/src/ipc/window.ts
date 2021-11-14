import {BrowserWindow, ipcMain} from 'electron';

ipcMain.handle('window-close', (event) => {
  const currentWindow = BrowserWindow.fromId(event.frameId);
  currentWindow?.close();
});

ipcMain.handle('window-minimize', (event) => {
  const currentWindow = BrowserWindow.fromId(event.frameId);
  currentWindow?.minimize();
});

ipcMain.handle('window-maximize', (event) => {
  const currentWindow = BrowserWindow.fromId(event.frameId);
  currentWindow?.maximize();
});

ipcMain.handle('window-restore', (event) => {
  const currentWindow = BrowserWindow.fromId(event.frameId);
  currentWindow?.restore();
});
