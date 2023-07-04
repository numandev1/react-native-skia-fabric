/* eslint-disable @typescript-eslint/no-explicit-any */
import { processRadius } from "./Radius";
export const isEdge = (pos, b) => pos.x === b.x || pos.y === b.y || pos.x === b.width || pos.y === b.height; // We have an issue to check property existence on JSI backed instances

const isRRectCtor = def => def.rect === undefined; // We have an issue to check property existence on JSI backed instances


const isRectCtor = def => def.rect === undefined;

export const processRect = (Skia, def) => {
  if (isRectCtor(def)) {
    return Skia.XYWHRect(def.x, def.y, def.width, def.height);
  } else {
    return def.rect;
  }
};
export const processRRect = (Skia, def) => {
  if (isRRectCtor(def)) {
    const r = processRadius(Skia, def.r);
    return Skia.RRectXY(Skia.XYWHRect(def.x, def.y, def.width, def.height), r.x, r.y);
  } else {
    return def.rect;
  }
};
//# sourceMappingURL=Rect.js.map