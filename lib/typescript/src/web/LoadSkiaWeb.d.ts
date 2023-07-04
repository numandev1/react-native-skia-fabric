import type { CanvasKit as CanvasKitType, CanvasKitInitOptions } from "canvaskit-wasm";
declare global {
    var CanvasKit: CanvasKitType;
}
export declare const LoadSkiaWeb: (opts?: CanvasKitInitOptions | undefined) => Promise<void>;
export declare const LoadSkia: (opts?: CanvasKitInitOptions | undefined) => Promise<void>;
