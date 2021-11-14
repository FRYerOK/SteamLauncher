import Navigo from 'navigo';
import IndexView from './views/index/view';
import AboutView from './views/about/view';
import AccountEditView from './views/account-edit/view';
import AccountCreateView from './views/account-create/view';
import SettingsView from './views/settings/view';
import GameAddView from './views/game-add/view';
import GameEditView from './views/game-edit/view';

const router = new Navigo('/', {hash: true});

const indexController = new IndexView(router);
const aboutController = new AboutView(router);
const accountEditController = new AccountEditView(router);
const accountCreateController = new AccountCreateView(router);
const settingsController = new SettingsView(router);
const gameAddController = new GameAddView(router);
const gameEditController = new GameEditView(router);

router.hooks({
  after: (match) => {
    const matchedPath = `/${match.url}`;
    const aSelector = 'a[data-navigo]';
    $(aSelector).removeClass('border-b');
    $(`${aSelector}[href='${matchedPath}']`).addClass('border-b');
  },
});

router.on(
  async () => {
    await indexController.show();
  },
  {
    before: async (done) => {
      const accountExist = (await window.api.invoke('account-exist')) as boolean;
      if (!accountExist) {
        router.navigate('/account/create');
      }

      done();
    },
  },
);

router.on('/about', async () => {
  await aboutController.show();
});

router.on('/account/create', async () => {
  await accountCreateController.show();
});

router.on('/account/edit', async () => {
  await accountEditController.show();
});

router.on('/settings', async () => {
  await settingsController.show();
});

router.on('/game/add', async (match) => {
  await gameAddController.setMatch(match);
  await gameAddController.show();
});

router.on('/game/edit/:appId', async (match) => {
  await gameEditController.setMatch(match);
  await gameEditController.show();
});

router.resolve();
