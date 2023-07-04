"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlurMask = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BlurMask = props => {
  return /*#__PURE__*/_react.default.createElement("skBlurMaskFilter", props);
};

exports.BlurMask = BlurMask;
BlurMask.defaultProps = {
  style: "normal",
  respectCTM: true
};
//# sourceMappingURL=Blur.js.map