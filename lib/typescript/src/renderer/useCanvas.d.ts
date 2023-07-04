import React from "react";
import type { Skia } from "../skia/types";
import type { SkiaValue } from "../values/types";
interface CanvasContext {
    Skia: Skia;
    size: SkiaValue<{
        width: number;
        height: number;
    }>;
}
declare const CanvasContext: React.Context<CanvasContext | null>;
export declare const CanvasProvider: React.Provider<CanvasContext | null>;
export declare const useCanvas: () => CanvasContext;
export {};
