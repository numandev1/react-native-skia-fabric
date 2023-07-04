import type { CanvasKit } from "canvaskit-wasm";
import type { SkPoint, VertexMode } from "../types";
import { JsiSkVertices } from "./JsiSkVertices";
export declare const MakeVertices: (CanvasKit: CanvasKit, mode: VertexMode, positions: SkPoint[], textureCoordinates?: SkPoint[] | null | undefined, colors?: Float32Array[] | undefined, indices?: number[] | null | undefined, isVolatile?: boolean | undefined) => JsiSkVertices;
