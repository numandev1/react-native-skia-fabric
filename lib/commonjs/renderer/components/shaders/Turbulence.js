"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Turbulence = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Turbulence = props => {
  return /*#__PURE__*/_react.default.createElement("skTurbulence", props);
};

exports.Turbulence = Turbulence;
Turbulence.defaultProps = {
  seed: 0,
  tileWidth: 0,
  tileHeight: 0
};
//# sourceMappingURL=Turbulence.js.map