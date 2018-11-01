import qsm from 'query-string-manipulator';

class SpectatorWindow {
  constructor() {
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.window = null;
    this.needsSync = false;
    this.loaded = false;
  }

  open() {
    if (!this.window || this.window.closed) {
      this.window = global.window.open(qsm(document.location.href, {
        set: {
          spectator: true,
        },
      }));
      this.window.addEventListener('beforeunload', () => {
         this.needsSync = true;
         this.loaded = false;
      }, false);
      this.window.addEventListener('load', () => {
        this.loaded = true;
        console.log('Window loaded');
      });
    }
  }

  close() {
    if (this.window) {
      this.window.close();
      this.window = null;
    }
  }

  sendMessage(data) {
    if (this.window) {
      this.window.postMessage(data, document.location.origin);
    }
  }
}

export default new SpectatorWindow();
