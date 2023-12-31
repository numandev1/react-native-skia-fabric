function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, forwardRef } from "react";
export const usePaintRef = () => useRef(null);
export const Paint = /*#__PURE__*/forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement("skPaint", _extends({
    ref: ref
  }, props));
});
//# sourceMappingURL=Paint.js.map