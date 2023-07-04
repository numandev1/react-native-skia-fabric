"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageShader = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ImageShader = props => {
  return /*#__PURE__*/_react.default.createElement("skImageShader", props);
};

exports.ImageShader = ImageShader;
ImageShader.defaultProps = {
  tx: "decal",
  ty: "decal",
  fm: "nearest",
  mm: "none",
  fit: "none",
  transform: []
};
//# sourceMappingURL=ImageShader.js.map