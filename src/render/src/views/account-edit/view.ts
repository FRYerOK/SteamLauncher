import type Navigo from 'navigo';
import mustache from 'mustache';
import serializeObject from '../../functions/serialize-object';
import config from '../../config';

class AccountEditView {
  private $dom: JQuery | undefined;
  private accountData: Record<string, unknown> | undefined;
  private readonly router;

  public constructor(router: Navigo) {
    this.router = router;
  }

  public async show() {
    await this.setData();
    await this.setDom();
    await this.appendDom();
    await this.setEvents();
  }

  private async setData() {
    this.accountData = (await window.api.invoke('account-data')) as Record<string, string>;
  }

  private async appendDom() {
    this.$dom?.appendTo(document.body);
  }

  private async setEvents() {
    window.api.on('account-view-close-modal', async () => {
      await this.closeModal();
    });

    this.$dom?.on('click', 'button[data-sk="modal"][data-sk-attr="close"]', async (event) => {
      event.preventDefault();
      await this.closeModal();
    });

    this.$dom?.find('form').on('submit', (event) => {
      event.preventDefault();
      const $dom = $(event.currentTarget);
      const serialize = serializeObject($dom);
      window.api.send('account-edit', serialize);
    });
  }

  private async setDom() {
    const html = (await import('./main.html?raw')).default;
    const getLanguageOptions = await this.getLanguageOptions();
    const dom = mustache.render(html, {
      accountData: this.accountData,
      inputLanguageOptions: getLanguageOptions,
    });
    this.$dom = $(dom);
  }

  private async getLanguageOptions() {
    let options = '';
    const accountLanguages: Record<string, string> = config.accountLanguages;
    for (const language of Object.keys(accountLanguages)) {
      const active = this.accountData!.language === language ? ' selected' : '';
      options += `<option value="${language}"${active}>${accountLanguages[language]}</option>`;
    }

    return options;
  }

  private async closeModal() {
    this.$dom?.remove();
    this.router.navigate('/');
  }
}

export default AccountEditView;
