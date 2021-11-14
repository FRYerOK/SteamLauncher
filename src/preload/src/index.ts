import {contextBridge, ipcRenderer} from 'electron';
import type {IpcRendererEvent} from 'electron';

contextBridge.exposeInMainWorld('api', {
  invoke: async (channel: string, ...args: any[]) => {
    return ipcRenderer.invoke(channel, ...args);
  },
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },
  on: (channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) => {
    return ipcRenderer.on(channel, listener);
  },
});
