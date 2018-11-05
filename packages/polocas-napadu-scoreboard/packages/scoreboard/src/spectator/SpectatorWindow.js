import qsm from 'query-string-manipulator';

const WINDOW_FEATURES = {
  fullscreen: true,
  location: false,
  menubar: false,
  personalbar: false,
  resizable: true,
  scrollbars: false,
  status: false,
  toolbar: false,
};

class SpectatorWindow {
  constructor() {
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.releaseWindow = this.releaseWindow.bind(this);
    this.window = null;
    this.needsSync = false;
    this.loaded = false;
    this.messageListener = null;
  }

  getWindowFeatures() {
    return Object.keys(WINDOW_FEATURES)
      .map((key, index, src) => `${key}:${Number(src[key])}`);
  }

  getWindowUrl() {
    return qsm(document.location.href, {
      set: {
        spectator: true,
      },
    });
  }

  open() {
    if (!this.window || this.window.closed) {
      this.window = global.window.open(this.getWindowUrl(), 'spectator', this.getWindowFeatures());
      this.bindWindowHandlers();
    }
  }

  close() {
    if (this.window) {
      this.window.close();
      this.releaseWindow();
    }
  }

  bindWindowHandlers() {
    if (this.window) {
      this.window.addEventListener('unload', () => {
        this.needsSync = true;
        this.loaded = false;
      });
      this.window.addEventListener('abort', this.close);
      this.window.addEventListener('close', this.releaseWindow);
      this.window.addEventListener('load', () => {
        this.loaded = true;
      });
    }
  }

  releaseWindow() {
    this.window = null;
  }

  onMessage(fn) {
    this.messageListener = fn;
  }

  sendMessage(data) {
    if (this.window) {
      this.window.postMessage(data, document.location.origin);
    }
  }
}

export default new SpectatorWindow();
