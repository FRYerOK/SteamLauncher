import gamesGetData from './games-get-data';

const gameGetData = (appId: string): Record<string, unknown> | null => {
  const data = gamesGetData();
  return data === null ? null : data[appId];
};

export default gameGetData;
