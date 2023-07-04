"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkRRect = void 0;

var _Host = require("./Host");

var _JsiSkRect = require("./JsiSkRect");

class JsiSkRRect extends _Host.BaseHostObject {
  static fromValue(CanvasKit, rect) {
    if (rect instanceof _JsiSkRect.JsiSkRect) {
      return rect.ref;
    }

    return CanvasKit.RRectXY(_JsiSkRect.JsiSkRect.fromValue(CanvasKit, rect.rect), rect.rx, rect.ry);
  }

  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "RRect");
  }

  get rx() {
    return this.ref[4];
  }

  get ry() {
    return this.ref[5];
  }

  get rect() {
    return new _JsiSkRect.JsiSkRect(this.CanvasKit, Float32Array.of(this.ref[0], this.ref[1], this.ref[2], this.ref[3]));
  }

}

exports.JsiSkRRect = JsiSkRRect;
//# sourceMappingURL=JsiSkRRect.js.map