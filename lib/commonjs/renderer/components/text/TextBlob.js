"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlob = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextBlob = props => {
  return /*#__PURE__*/_react.default.createElement("skTextBlob", props);
};

exports.TextBlob = TextBlob;
TextBlob.defaultProps = {
  x: 0,
  y: 0
};
//# sourceMappingURL=TextBlob.js.map