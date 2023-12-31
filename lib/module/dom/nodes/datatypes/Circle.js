export const isCircleScalarDef = def => // We have an issue to check property existence on JSI backed instances
// eslint-disable-next-line @typescript-eslint/no-explicit-any
def.cx !== undefined;
export const processCircle = (Skia, def) => {
  if (isCircleScalarDef(def)) {
    return {
      c: Skia.Point(def.cx, def.cy),
      r: def.r
    };
  }

  return def;
};
//# sourceMappingURL=Circle.js.map