"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Morphology = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Morphology = props => {
  return /*#__PURE__*/_react.default.createElement("skMorphologyImageFilter", props);
};

exports.Morphology = Morphology;
Morphology.defaultProps = {
  operator: "dilate"
};
//# sourceMappingURL=Morphology.js.map