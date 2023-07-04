"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec = exports.Skia = exports.Mock = void 0;

var Values = _interopRequireWildcard(require("../values/web"));

var ValuesHooks = _interopRequireWildcard(require("../values/hooks"));

var _selector = require("../values/selector");

var BaseSkia = _interopRequireWildcard(require("../skia/types"));

var _useSharedValueEffect = require("../external/reanimated/useSharedValueEffect");

var timingFunctions = _interopRequireWildcard(require("../animation/timing"));

var springFunctions = _interopRequireWildcard(require("../animation/spring"));

var decayFunctions = _interopRequireWildcard(require("../animation/decay"));

var interpolateFn = _interopRequireWildcard(require("../animation/functions/interpolate"));

var interpolatePathFn = _interopRequireWildcard(require("../animation/functions/interpolatePaths"));

var interpolateVectorFn = _interopRequireWildcard(require("../animation/functions/interpolateVector"));

var _ShaderLib = require("../renderer/components/shaders/ShaderLib");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable @typescript-eslint/no-explicit-any */
class Stub {
  constructor() {
    return new Proxy(() => {}, {
      get: () => new Stub(),
      apply: () => new Stub(),
      set: () => true
    });
  }

}

const Noop = () => {};

const Skia = new Stub();
exports.Skia = Skia;

const vec = (x, y) => {
  var _ref;

  return {
    x: x !== null && x !== void 0 ? x : 0,
    y: (_ref = y !== null && y !== void 0 ? y : x) !== null && _ref !== void 0 ? _ref : 0
  };
};

exports.vec = vec;
const Mock = {
  // SkiaExports
  // 1. Skia API. BaseSkia contains the enums, and functions like isPaint etc
  Skia,
  ...BaseSkia,
  // 2. Hooks
  useRawData: Noop,
  useData: Noop,
  useFont: Noop,
  useTypeface: Noop,
  useImage: Noop,
  useSVG: Noop,
  usePicture: Noop,
  createPicture: Noop,
  // 3. Point/Rect/Transform utilities
  vec,
  rect: (x, y, width, height) => ({
    x,
    y,
    width,
    height
  }),
  rrect: (r, rx, ry) => ({
    rect: r,
    rx,
    ry
  }),
  point: vec,
  add: (a, b) => vec(a.x + b.x, a.y + b.y),
  sub: (a, b) => vec(a.x - b.x, a.y - b.y),
  neg: a => vec(-a.x, -a.y),
  dist: (a, b) => Math.hypot(a.x - b.x, a.y - b.y),
  translate: _ref2 => {
    let {
      x,
      y
    } = _ref2;
    return [{
      translateX: x
    }, {
      translateY: y
    }];
  },
  bounds: Noop,
  topLeft: Noop,
  topRight: Noop,
  bottomLeft: Noop,
  bottomRight: Noop,
  center: Noop,
  processTransform2d: Noop,
  // ExternalExports
  useSharedValueEffect: _useSharedValueEffect.useSharedValueEffect,
  // ValueExports
  ...Values,
  ...ValuesHooks,
  Selector: _selector.Selector,
  // Animations
  ...timingFunctions,
  ...springFunctions,
  ...decayFunctions,
  ...interpolateFn,
  ...interpolatePathFn,
  ...interpolateVectorFn,
  interpolateColors: (_value, _inputRange, _outputRange) => Float32Array.of(0, 0, 0, 0),
  mixColors: (_v, _x, _y) => Float32Array.of(0, 0, 0, 0),
  ShaderLib: _ShaderLib.ShaderLib,
  createDrawing: Noop,
  createDeclaration: Noop
};
exports.Mock = Mock;
//# sourceMappingURL=index.js.map