import { PathVerb } from "../types";
import { ckEnum, HostObject, optEnum } from "./Host";
import { JsiSkPoint } from "./JsiSkPoint";
import { JsiSkRect } from "./JsiSkRect";
import { JsiSkRRect } from "./JsiSkRRect";
import { JsiSkMatrix } from "./JsiSkMatrix";
const CommandCount = {
  [PathVerb.Move]: 3,
  [PathVerb.Line]: 3,
  [PathVerb.Quad]: 5,
  [PathVerb.Conic]: 6,
  [PathVerb.Cubic]: 7,
  [PathVerb.Close]: 1
};
export class JsiSkPath extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Path");
  }

  addArc(oval, startAngleInDegrees, sweepAngleInDegrees) {
    this.ref.addArc(JsiSkRect.fromValue(this.CanvasKit, oval), startAngleInDegrees, sweepAngleInDegrees);
    return this;
  }

  addOval(oval, isCCW, startIndex) {
    this.ref.addOval(JsiSkRect.fromValue(this.CanvasKit, oval), isCCW, startIndex);
    return this;
  }

  countPoints() {
    return this.ref.countPoints();
  }

  addPoly(points, close) {
    this.ref.addPoly(points.map(p => Array.from(JsiSkPoint.fromValue(p))).flat(), close);
    return this;
  }

  moveTo(x, y) {
    this.ref.moveTo(x, y);
    return this;
  }

  lineTo(x, y) {
    this.ref.lineTo(x, y);
    return this;
  }

  makeAsWinding() {
    const result = this.ref.makeAsWinding();
    return result === null ? result : this;
  }

  offset(dx, dy) {
    this.ref.offset(dx, dy);
    return this;
  }

  rArcTo(rx, ry, xAxisRotateInDegrees, useSmallArc, isCCW, dx, dy) {
    this.ref.rArcTo(rx, ry, xAxisRotateInDegrees, useSmallArc, isCCW, dx, dy);
    return this;
  }

  rConicTo(dx1, dy1, dx2, dy2, w) {
    this.ref.rConicTo(dx1, dy1, dx2, dy2, w);
    return this;
  }

  rCubicTo(cpx1, cpy1, cpx2, cpy2, x, y) {
    this.ref.rCubicTo(cpx1, cpy1, cpx2, cpy2, x, y);
    return this;
  }

  rMoveTo(x, y) {
    this.ref.rMoveTo(x, y);
    return this;
  }

  rLineTo(x, y) {
    this.ref.rLineTo(x, y);
    return this;
  }

  rQuadTo(x1, y1, x2, y2) {
    this.ref.rQuadTo(x1, y1, x2, y2);
    return this;
  }

  setFillType(fill) {
    this.ref.setFillType(ckEnum(fill));
  }

  setIsVolatile(volatile) {
    this.ref.setIsVolatile(volatile);
  }

  stroke(opts) {
    const result = this.ref.stroke(opts === undefined ? undefined : {
      width: opts.width,
      // eslint-disable-next-line camelcase
      miter_limit: opts.width,
      precision: opts.width,
      join: optEnum(opts.join),
      cap: optEnum(opts.cap)
    });
    return result === null ? result : this;
  }

  close() {
    this.ref.close();
  }

  reset() {
    this.ref.reset();
  }

  rewind() {
    this.ref.rewind();
  }

  computeTightBounds() {
    return new JsiSkRect(this.CanvasKit, this.ref.computeTightBounds());
  }

  arcToOval(oval, startAngleInDegrees, sweepAngleInDegrees, forceMoveTo) {
    this.ref.arcToOval(JsiSkRect.fromValue(this.CanvasKit, oval), startAngleInDegrees, sweepAngleInDegrees, forceMoveTo);
    return this;
  }

  arcToRotated(rx, ry, xAxisRotateInDegrees, useSmallArc, isCCW, x, y) {
    this.ref.arcToRotated(rx, ry, xAxisRotateInDegrees, useSmallArc, isCCW, x, y);
    return this;
  }

  arcToTangent(x1, y1, x2, y2, radius) {
    this.ref.arcToTangent(x1, y1, x2, y2, radius);
    return this;
  }

  conicTo(x1, y1, x2, y2, w) {
    this.ref.conicTo(x1, y1, x2, y2, w);
    return this;
  }

  contains(x, y) {
    return this.ref.contains(x, y);
  }

  copy() {
    return new JsiSkPath(this.CanvasKit, this.ref.copy());
  }

  cubicTo(cpx1, cpy1, cpx2, cpy2, x, y) {
    this.ref.cubicTo(cpx1, cpy1, cpx2, cpy2, x, y);
    return this;
  }

  dash(on, off, phase) {
    return this.ref.dash(on, off, phase);
  }

  equals(other) {
    return this.ref.equals(JsiSkPath.fromValue(other));
  }

  getBounds() {
    return new JsiSkRect(this.CanvasKit, this.ref.getBounds());
  }

  getFillType() {
    return this.ref.getFillType().value;
  }

  quadTo(x1, y1, x2, y2) {
    this.ref.quadTo(x1, y1, x2, y2);
  }

  addRect(rect, isCCW) {
    this.ref.addRect(JsiSkRect.fromValue(this.CanvasKit, rect), isCCW);
  }

  addRRect(rrect, isCCW) {
    this.ref.addRRect(JsiSkRRect.fromValue(this.CanvasKit, rrect), isCCW);
    return this;
  }

  getPoint(index) {
    return new JsiSkPoint(this.CanvasKit, this.ref.getPoint(index));
  }

  isEmpty() {
    return this.ref.isEmpty();
  }

  isVolatile() {
    return this.ref.isVolatile();
  }

  addCircle(x, y, r) {
    this.ref.addCircle(x, y, r);
    return this;
  }

  getLastPt() {
    return new JsiSkPoint(this.CanvasKit, this.ref.getPoint(this.ref.countPoints() - 1));
  }

  op(path, op) {
    return this.ref.op(JsiSkPath.fromValue(path), ckEnum(op));
  }

  simplify() {
    return this.ref.simplify();
  }

  toSVGString() {
    return this.ref.toSVGString();
  }

  trim(startT, stopT, isComplement) {
    const result = this.ref.trim(startT, stopT, isComplement);
    return result === null ? result : this;
  }

  transform(m3) {
    this.ref.transform(JsiSkMatrix.fromValue(m3));
  }

  interpolate(end, t) {
    const path = this.CanvasKit.Path.MakeFromPathInterpolation(this.ref, JsiSkPath.fromValue(end), t);

    if (path === null) {
      return null;
    }

    return new JsiSkPath(this.CanvasKit, path);
  }

  isInterpolatable(path2) {
    return this.CanvasKit.Path.CanInterpolate(this.ref, JsiSkPath.fromValue(path2));
  }

  toCmds() {
    const cmds = this.ref.toCmds();
    const result = cmds.reduce((acc, cmd, i) => {
      if (i === 0) {
        acc.push([]);
      }

      const current = acc[acc.length - 1];

      if (current.length === 0) {
        current.push(cmd);
        const length = CommandCount[current[0]];

        if (current.length === length && i !== cmds.length - 1) {
          acc.push([]);
        }
      } else {
        const length = CommandCount[current[0]];

        if (current.length < length) {
          current.push(cmd);
        }

        if (current.length === length && i !== cmds.length - 1) {
          acc.push([]);
        }
      }

      return acc;
    }, []);
    return result;
  }

}
//# sourceMappingURL=JsiSkPath.js.map