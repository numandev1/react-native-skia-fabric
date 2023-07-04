export const canvas2Cartesian = (v, center) => ({
  x: v.x - center.x,
  y: -1 * (v.y - center.y)
});
export const cartesian2Canvas = (v, center) => ({
  x: v.x + center.x,
  y: -1 * v.y + center.y
});
export const cartesian2Polar = v => ({
  theta: Math.atan2(v.y, v.x),
  radius: Math.sqrt(v.x ** 2 + v.y ** 2)
});
export const polar2Cartesian = p => ({
  x: p.radius * Math.cos(p.theta),
  y: p.radius * Math.sin(p.theta)
});
export const polar2Canvas = (p, center) => cartesian2Canvas(polar2Cartesian(p), center);
export const canvas2Polar = (v, center) => cartesian2Polar(canvas2Cartesian(v, center));
//# sourceMappingURL=Coordinates.js.map