import type { CanvasKit, RRect } from "canvaskit-wasm";
import type { SkRRect } from "../types";
import { BaseHostObject } from "./Host";
import { JsiSkRect } from "./JsiSkRect";
export declare class JsiSkRRect extends BaseHostObject<RRect, "RRect"> implements SkRRect {
    static fromValue(CanvasKit: CanvasKit, rect: SkRRect): Float32Array;
    constructor(CanvasKit: CanvasKit, ref: RRect);
    get rx(): number;
    get ry(): number;
    get rect(): JsiSkRect;
}
