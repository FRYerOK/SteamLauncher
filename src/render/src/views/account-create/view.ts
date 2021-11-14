import type Navigo from 'navigo';
import mustache from 'mustache';
import serializeObject from '../../functions/serialize-object';
import config from '../../config';

class AccountCreateView {
  private $dom: JQuery | undefined;
  private readonly router;

  public constructor(router: Navigo) {
    this.router = router;
  }

  public async show() {
    await this.setDom();
    await this.appendDom();
    await this.setEvents();
  }

  private async appendDom() {
    this.$dom?.appendTo(document.body);
  }

  private async setEvents() {
    window.api.on('account-view-close-modal', async () => {
      await this.closeModal();
    });

    this.$dom?.find('form').on('submit', (event) => {
      event.preventDefault();
      const $dom = $(event.currentTarget);
      const serialize = serializeObject($dom);
      window.api.send('account-create', serialize);
    });
  }

  private async setDom() {
    const html = (await import('./main.html?raw')).default;
    const inputSteamId = (await window.api.invoke('account-get-random-steamid')) as string;
    const getLanguageOptions = await this.getLanguageOptions();
    const dom = mustache.render(html, {
      inputLanguageOptions: getLanguageOptions,
      inputSteamId,
    });
    this.$dom = $(dom);
  }

  private async getLanguageOptions() {
    let options = '';
    const accountLanguages: Record<string, string> = config.accountLanguages;
    for (const language of Object.keys(accountLanguages)) {
      options += `<option value="${language}">${accountLanguages[language]}</option>`;
    }

    return options;
  }

  private async closeModal() {
    this.$dom?.remove();
    this.router.navigate('/');
  }
}

export default AccountCreateView;
