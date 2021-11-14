import {ipcMain} from 'electron';
import steamDbGetData from '../functions/steamdb-get-data';

ipcMain.handle('steamdb-get-data', async (_event, appId: string) => {
  return steamDbGetData(appId);
});
