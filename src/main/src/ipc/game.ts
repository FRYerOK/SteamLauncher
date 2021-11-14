import {ipcMain} from 'electron';
import storage from '../functions/storage';
import gameDownloadHeaderImage from '../functions/game-download-header-image';
import gameGetData from '../functions/game-get-data';
import gamesMerge from '../functions/games-merge';
import showToast from '../functions/show-toast';
import gameRemoveHandle from '../functions/game-remove-handle';

const closeModalEvent = 'game-view-close-modal';

ipcMain.on('game-add', async (event, inputs) => {
  inputs.headerImage = await gameDownloadHeaderImage(event, inputs.headerImageUrl);
  storage.set('games', gamesMerge(inputs));
  showToast(event, 'Game added successfully!', 'success');
  event.sender.send(closeModalEvent);
});

ipcMain.on('game-edit', async (event, inputs, oldAppId: string) => {
  const getAppId = (oldAppId === inputs.appId ? oldAppId : inputs.appId) as string;
  delete inputs.appId;
  inputs.headerImage = await gameDownloadHeaderImage(event, inputs.headerImageUrl);
  if (oldAppId !== inputs.appId) {
    gameRemoveHandle(event, oldAppId, false);
  }

  storage.set(`games.${getAppId}`, inputs);
  showToast(event, 'Game edited successfully!', 'success');
  event.sender.send(closeModalEvent);
});

ipcMain.handle('game-remove', (event, appId: string) => {
  gameRemoveHandle(event, appId);
});

ipcMain.handle('game-data', (_event, appId: string) => {
  return gameGetData(appId);
});
