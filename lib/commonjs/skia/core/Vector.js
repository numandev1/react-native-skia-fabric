"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec = exports.translate = exports.sub = exports.point = exports.neg = exports.dist = exports.add = void 0;

var _Skia = require("../Skia");

const vec = function () {
  let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let y = arguments.length > 1 ? arguments[1] : undefined;
  return _Skia.Skia.Point(x, y !== null && y !== void 0 ? y : x);
};

exports.vec = vec;
const point = vec;
exports.point = point;

const neg = a => vec(-a.x, -a.y);

exports.neg = neg;

const add = (a, b) => vec(a.x + b.x, a.y + b.y);

exports.add = add;

const sub = (a, b) => vec(a.x - b.x, a.y - b.y);

exports.sub = sub;

const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

exports.dist = dist;

const translate = _ref => {
  let {
    x,
    y
  } = _ref;
  return [{
    translateX: x
  }, {
    translateY: y
  }];
};

exports.translate = translate;
//# sourceMappingURL=Vector.js.map