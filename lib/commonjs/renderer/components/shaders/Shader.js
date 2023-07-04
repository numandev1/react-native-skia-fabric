"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shader = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Shader = props => {
  return /*#__PURE__*/_react.default.createElement("skShader", props);
};

exports.Shader = Shader;
Shader.defaultProps = {
  uniforms: []
};
//# sourceMappingURL=Shader.js.map