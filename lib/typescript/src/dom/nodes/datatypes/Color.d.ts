import type { Color, Skia } from "../../../skia/types";
export declare const RED = 0;
export declare const GREEN = 1;
export declare const BLUE = 2;
export declare const ALPHA = 3;
export declare const rgbaColor: (r: number, g: number, b: number, a: number) => Float32Array;
export declare const processColor: (Skia: Skia, cl: Color, currentOpacity: number) => Float32Array;
