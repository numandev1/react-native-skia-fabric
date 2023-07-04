/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Values from "../values/web";
import * as ValuesHooks from "../values/hooks";
import { Selector } from "../values/selector";
import * as BaseSkia from "../skia/types";
import { useSharedValueEffect } from "../external/reanimated/useSharedValueEffect";
import * as timingFunctions from "../animation/timing";
import * as springFunctions from "../animation/spring";
import * as decayFunctions from "../animation/decay";
import * as interpolateFn from "../animation/functions/interpolate";
import * as interpolatePathFn from "../animation/functions/interpolatePaths";
import * as interpolateVectorFn from "../animation/functions/interpolateVector";
import { ShaderLib } from "../renderer/components/shaders/ShaderLib";

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

export const Skia = new Stub();
export const vec = (x, y) => {
  var _ref;

  return {
    x: x !== null && x !== void 0 ? x : 0,
    y: (_ref = y !== null && y !== void 0 ? y : x) !== null && _ref !== void 0 ? _ref : 0
  };
};
export const Mock = {
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
  useSharedValueEffect,
  // ValueExports
  ...Values,
  ...ValuesHooks,
  Selector,
  // Animations
  ...timingFunctions,
  ...springFunctions,
  ...decayFunctions,
  ...interpolateFn,
  ...interpolatePathFn,
  ...interpolateVectorFn,
  interpolateColors: (_value, _inputRange, _outputRange) => Float32Array.of(0, 0, 0, 0),
  mixColors: (_v, _x, _y) => Float32Array.of(0, 0, 0, 0),
  ShaderLib,
  createDrawing: Noop,
  createDeclaration: Noop
};
//# sourceMappingURL=index.js.map