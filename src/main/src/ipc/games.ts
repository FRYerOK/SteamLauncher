import {ipcMain} from 'electron';
import gamesGetData from '../functions/games-get-data';

ipcMain.handle('games-data', () => {
  return gamesGetData();
});
