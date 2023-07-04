import type { DependencyList } from "react";
import type { SkCanvas, SkRect } from "../types";
/**
 * Memoizes and returns an SkPicture that can be drawn to another canvas.
 * @param rect Picture bounds
 * @param cb Callback for drawing to the canvas
 * @returns SkPicture
 */
export declare const usePicture: (rect: SkRect, cb: (canvas: SkCanvas) => void, deps?: DependencyList) => import("../types").SkPicture;
/**
 * Memoizes and returns an SkPicture that can be drawn to another canvas.
 * @param rect Picture bounds
 * @param cb Callback for drawing to the canvas
 * @returns SkPicture
 */
export declare const createPicture: (rect: SkRect, cb: (canvas: SkCanvas) => void) => import("../types").SkPicture;
