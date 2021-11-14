import {mkdirSync, existsSync} from 'node:fs';
import config from './config';
// Set IPC's
import './ipc/app';
import './ipc/window';
import './ipc/contextmenu';
import './ipc/account';
import './ipc/settings';
import './ipc/games';
import './ipc/game';
import './ipc/steamdb';

const emulatorPath = config.paths.emulator.path;

if (!existsSync(emulatorPath)) {
  mkdirSync(emulatorPath);
}
