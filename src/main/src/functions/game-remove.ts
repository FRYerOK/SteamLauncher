import gamesGetData from './games-get-data';

const gameRemove = (appId: string) => {
  const gamesData = gamesGetData();
  if (gamesData !== null) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete gamesData[appId];

    return gamesData;
  }

  return null;
};

export default gameRemove;
