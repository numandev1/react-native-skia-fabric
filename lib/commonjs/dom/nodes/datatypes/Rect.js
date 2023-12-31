"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processRect = exports.processRRect = exports.isEdge = void 0;

var _Radius = require("./Radius");

/* eslint-disable @typescript-eslint/no-explicit-any */
const isEdge = (pos, b) => pos.x === b.x || pos.y === b.y || pos.x === b.width || pos.y === b.height; // We have an issue to check property existence on JSI backed instances


exports.isEdge = isEdge;

const isRRectCtor = def => def.rect === undefined; // We have an issue to check property existence on JSI backed instances


const isRectCtor = def => def.rect === undefined;

const processRect = (Skia, def) => {
  if (isRectCtor(def)) {
    return Skia.XYWHRect(def.x, def.y, def.width, def.height);
  } else {
    return def.rect;
  }
};

exports.processRect = processRect;

const processRRect = (Skia, def) => {
  if (isRRectCtor(def)) {
    const r = (0, _Radius.processRadius)(Skia, def.r);
    return Skia.RRectXY(Skia.XYWHRect(def.x, def.y, def.width, def.height), r.x, r.y);
  } else {
    return def.rect;
  }
};

exports.processRRect = processRRect;
//# sourceMappingURL=Rect.js.map