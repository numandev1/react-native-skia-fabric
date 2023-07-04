"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FractalNoise = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FractalNoise = props => {
  return /*#__PURE__*/_react.default.createElement("skFractalNoise", props);
};

exports.FractalNoise = FractalNoise;
FractalNoise.defaultProps = {
  seed: 0,
  tileWidth: 0,
  tileHeight: 0
};
//# sourceMappingURL=FractalNoise.js.map