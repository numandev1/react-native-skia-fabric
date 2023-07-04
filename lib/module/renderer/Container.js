function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { JsiSkDOM } from "../dom/nodes";
export class Container {
  constructor(Skia, depMgr, redraw) {
    this.depMgr = depMgr;
    this.redraw = redraw;

    _defineProperty(this, "_root", void 0);

    _defineProperty(this, "Sk", void 0);

    this.Sk = new JsiSkDOM({
      Skia,
      depMgr
    });
    this._root = this.Sk.Group();
  }

  draw(ctx) {
    this._root.render(ctx);
  }

  get root() {
    return this._root;
  }

}
//# sourceMappingURL=Container.js.map