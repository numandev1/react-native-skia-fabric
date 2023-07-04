"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rgbaColor = exports.processColor = exports.RED = exports.GREEN = exports.BLUE = exports.ALPHA = void 0;
const RED = 0;
exports.RED = RED;
const GREEN = 1;
exports.GREEN = GREEN;
const BLUE = 2;
exports.BLUE = BLUE;
const ALPHA = 3;
exports.ALPHA = ALPHA;

const rgbaColor = (r, g, b, a) => new Float32Array([r, g, b, a]);

exports.rgbaColor = rgbaColor;

const processColor = (Skia, cl, currentOpacity) => {
  const color = Skia.Color(cl);
  color[ALPHA] *= currentOpacity;
  return color;
};

exports.processColor = processColor;
//# sourceMappingURL=Color.js.map