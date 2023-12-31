import type { DataSourceParam } from "../types";
/**
 * Returns a Skia Font object
 * */
export declare const useFont: (font: DataSourceParam, size?: number | undefined, onError?: ((err: Error) => void) | undefined) => import("../types").SkFont | null;
