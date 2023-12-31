"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Image = props => {
  return /*#__PURE__*/_react.default.createElement("skImage", props);
};

exports.Image = Image;
Image.defaultProps = {
  x: 0,
  y: 0,
  fit: "contain"
};
//# sourceMappingURL=Image.js.map