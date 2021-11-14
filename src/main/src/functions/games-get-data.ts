import storage from './storage';

const gamesGetData = (): Record<string, Record<string, string>> | null => {
  return storage.get('games', null);
};

export default gamesGetData;
