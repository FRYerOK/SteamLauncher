import type Navigo from 'navigo';
import type {Match} from 'navigo';
import mustache from 'mustache';
import {decodeUriObject} from '../../functions/encoded-decode-uri-object';
import gamePostData from '../../functions/game-post-data';

class GameAddView {
  public match: Match | undefined;
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

  public async setMatch(match: Match | undefined) {
    this.match = match;
  }

  private async appendDom() {
    this.$dom?.appendTo(document.body);
  }

  private async setEvents() {
    window.api.on('game-view-close-modal', async () => {
      await this.closeModal();
    });

    this.$dom?.on('click', 'button[data-sk="modal"][data-sk-attr="close"]', async (event) => {
      event.preventDefault();
      await this.closeModal();
    });

    this.$dom?.find('form').on('submit', async (event) => {
      event.preventDefault();
      const $dom = $(event.currentTarget);
      await gamePostData($dom, 'game-add');
    });
  }

  private async closeModal() {
    this.$dom?.remove();
    this.router.navigate('/');
  }

  private async setDom() {
    const html = (await import('./main.html?raw')).default;
    const dom = mustache.render(html, {params: decodeUriObject(this.match!.params)});
    this.$dom = $(dom);
  }
}

export default GameAddView;
