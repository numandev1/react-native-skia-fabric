"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Circle = props => {
  return /*#__PURE__*/_react.default.createElement("skCircle", props);
};

exports.Circle = Circle;
Circle.defaultProps = {
  c: {
    x: 0,
    y: 0
  }
};
//# sourceMappingURL=Circle.js.map