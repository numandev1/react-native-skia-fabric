import React, { useMemo } from "react";
import { fitRects, rect2rect } from "../../../dom/nodes";
import { Group } from "../Group";
export const fitbox = (fit, src, dst) => {
  const rects = fitRects(fit, src, dst);
  return rect2rect(rects.src, rects.dst);
};
export const FitBox = _ref => {
  let {
    fit,
    src,
    dst,
    children
  } = _ref;
  const transform = useMemo(() => fitbox(fit, src, dst), [dst, fit, src]);
  return /*#__PURE__*/React.createElement(Group, {
    transform: transform
  }, children);
};
FitBox.defaultProps = {
  fit: "contain"
};
//# sourceMappingURL=FitBox.js.map