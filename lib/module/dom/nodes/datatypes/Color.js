export const RED = 0;
export const GREEN = 1;
export const BLUE = 2;
export const ALPHA = 3;
export const rgbaColor = (r, g, b, a) => new Float32Array([r, g, b, a]);
export const processColor = (Skia, cl, currentOpacity) => {
  const color = Skia.Color(cl);
  color[ALPHA] *= currentOpacity;
  return color;
};
//# sourceMappingURL=Color.js.map