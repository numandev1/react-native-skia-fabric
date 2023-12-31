import type { CanvasKit, Paint } from "canvaskit-wasm";
import type { StrokeJoin, BlendMode, SkColor, SkColorFilter, SkImageFilter, SkPaint, SkShader, StrokeCap, PaintStyle, SkMaskFilter, SkPathEffect } from "../types";
import { HostObject } from "./Host";
export declare class JsiSkPaint extends HostObject<Paint, "Paint"> implements SkPaint {
    constructor(CanvasKit: CanvasKit, ref: Paint);
    copy(): JsiSkPaint;
    reset(): void;
    getColor(): Float32Array;
    getStrokeCap(): number;
    getStrokeJoin(): number;
    getStrokeMiter(): number;
    getStrokeWidth(): number;
    setAlphaf(alpha: number): void;
    setAntiAlias(aa: boolean): void;
    setBlendMode(blendMode: BlendMode): void;
    setColor(color: SkColor): void;
    setColorFilter(filter: SkColorFilter | null): void;
    setImageFilter(filter: SkImageFilter | null): void;
    setMaskFilter(filter: SkMaskFilter | null): void;
    setPathEffect(effect: SkPathEffect | null): void;
    setShader(shader: SkShader | null): void;
    setStrokeCap(cap: StrokeCap): void;
    setStrokeJoin(join: StrokeJoin): void;
    setStrokeMiter(limit: number): void;
    setStrokeWidth(width: number): void;
    setStyle(style: PaintStyle): void;
}
