import type { Skia } from "../../../skia/types";
import type { CircleDef, ScalarCircleDef } from "../../types";
export declare const isCircleScalarDef: (def: CircleDef) => def is ScalarCircleDef;
export declare const processCircle: (Skia: Skia, def: CircleDef) => import("../../types").PointCircleDef;
