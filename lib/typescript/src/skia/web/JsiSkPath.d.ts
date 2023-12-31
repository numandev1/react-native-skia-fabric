import type { CanvasKit, Path } from "canvaskit-wasm";
import type { FillType, PathCommand, PathOp, SkMatrix, SkPath, SkPoint, SkRect, SkRRect, StrokeOpts } from "../types";
import { HostObject } from "./Host";
import { JsiSkPoint } from "./JsiSkPoint";
import { JsiSkRect } from "./JsiSkRect";
export declare class JsiSkPath extends HostObject<Path, "Path"> implements SkPath {
    constructor(CanvasKit: CanvasKit, ref: Path);
    addArc(oval: SkRect, startAngleInDegrees: number, sweepAngleInDegrees: number): this;
    addOval(oval: SkRect, isCCW?: boolean, startIndex?: number): this;
    countPoints(): number;
    addPoly(points: SkPoint[], close: boolean): this;
    moveTo(x: number, y: number): this;
    lineTo(x: number, y: number): this;
    makeAsWinding(): this | null;
    offset(dx: number, dy: number): this;
    rArcTo(rx: number, ry: number, xAxisRotateInDegrees: number, useSmallArc: boolean, isCCW: boolean, dx: number, dy: number): this;
    rConicTo(dx1: number, dy1: number, dx2: number, dy2: number, w: number): this;
    rCubicTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): this;
    rMoveTo(x: number, y: number): this;
    rLineTo(x: number, y: number): this;
    rQuadTo(x1: number, y1: number, x2: number, y2: number): this;
    setFillType(fill: FillType): void;
    setIsVolatile(volatile: boolean): void;
    stroke(opts?: StrokeOpts): this | null;
    close(): void;
    reset(): void;
    rewind(): void;
    computeTightBounds(): SkRect;
    arcToOval(oval: SkRect, startAngleInDegrees: number, sweepAngleInDegrees: number, forceMoveTo: boolean): this;
    arcToRotated(rx: number, ry: number, xAxisRotateInDegrees: number, useSmallArc: boolean, isCCW: boolean, x: number, y: number): this;
    arcToTangent(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    conicTo(x1: number, y1: number, x2: number, y2: number, w: number): this;
    contains(x: number, y: number): boolean;
    copy(): JsiSkPath;
    cubicTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): this;
    dash(on: number, off: number, phase: number): boolean;
    equals(other: SkPath): boolean;
    getBounds(): JsiSkRect;
    getFillType(): number;
    quadTo(x1: number, y1: number, x2: number, y2: number): void;
    addRect(rect: SkRect, isCCW?: boolean): void;
    addRRect(rrect: SkRRect, isCCW?: boolean): this;
    getPoint(index: number): JsiSkPoint;
    isEmpty(): boolean;
    isVolatile(): boolean;
    addCircle(x: number, y: number, r: number): this;
    getLastPt(): JsiSkPoint;
    op(path: SkPath, op: PathOp): boolean;
    simplify(): boolean;
    toSVGString(): string;
    trim(startT: number, stopT: number, isComplement: boolean): this | null;
    transform(m3: SkMatrix): void;
    interpolate(end: SkPath, t: number): JsiSkPath | null;
    isInterpolatable(path2: SkPath): boolean;
    toCmds(): PathCommand[];
}
