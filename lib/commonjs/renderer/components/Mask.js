"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = void 0;

var _react = _interopRequireWildcard(require("react"));

var _types = require("../../skia/types");

var _useCanvas = require("../useCanvas");

var _Group = require("./Group");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Mask = _ref => {
  let {
    children,
    mask,
    mode,
    clip
  } = _ref;
  const {
    Skia
  } = (0, _useCanvas.useCanvas)();
  const maskPaint = (0, _react.useMemo)(() => {
    const paint = Skia.Paint();
    paint.setBlendMode(_types.BlendMode.Src);

    if (mode === "luminance") {
      paint.setColorFilter(Skia.ColorFilter.MakeLumaColorFilter());
    }

    return paint;
  }, [Skia, mode]);
  const clippingPaint = (0, _react.useMemo)(() => {
    const paint = Skia.Paint();
    paint.setBlendMode(_types.BlendMode.DstIn);
    return paint;
  }, [Skia]);
  return /*#__PURE__*/_react.default.createElement(_Group.Group, {
    layer: true
  }, /*#__PURE__*/_react.default.createElement(_Group.Group, {
    layer: maskPaint
  }, mask, clip && /*#__PURE__*/_react.default.createElement(_Group.Group, {
    layer: clippingPaint
  }, children)), /*#__PURE__*/_react.default.createElement(_Group.Group, {
    blendMode: "srcIn"
  }, children));
};

exports.Mask = Mask;
Mask.defaultProps = {
  mode: "alpha",
  clip: true
};
//# sourceMappingURL=Mask.js.map