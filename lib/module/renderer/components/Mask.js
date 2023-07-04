import React, { useMemo } from "react";
import { BlendMode } from "../../skia/types";
import { useCanvas } from "../useCanvas";
import { Group } from "./Group";
export const Mask = _ref => {
  let {
    children,
    mask,
    mode,
    clip
  } = _ref;
  const {
    Skia
  } = useCanvas();
  const maskPaint = useMemo(() => {
    const paint = Skia.Paint();
    paint.setBlendMode(BlendMode.Src);

    if (mode === "luminance") {
      paint.setColorFilter(Skia.ColorFilter.MakeLumaColorFilter());
    }

    return paint;
  }, [Skia, mode]);
  const clippingPaint = useMemo(() => {
    const paint = Skia.Paint();
    paint.setBlendMode(BlendMode.DstIn);
    return paint;
  }, [Skia]);
  return /*#__PURE__*/React.createElement(Group, {
    layer: true
  }, /*#__PURE__*/React.createElement(Group, {
    layer: maskPaint
  }, mask, clip && /*#__PURE__*/React.createElement(Group, {
    layer: clippingPaint
  }, children)), /*#__PURE__*/React.createElement(Group, {
    blendMode: "srcIn"
  }, children));
};
Mask.defaultProps = {
  mode: "alpha",
  clip: true
};
//# sourceMappingURL=Mask.js.map