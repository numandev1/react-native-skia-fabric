import type { Skia as SkiaApi } from "../skia/types";
import type * as SkiaExports from "../skia";
import type * as ExternalExports from "../external";
import type * as ValueExports from "../values";
import type * as AnimationExports from "../animation";
import { ShaderLib } from "../renderer/components/shaders/ShaderLib";
export declare const Skia: SkiaApi;
export declare const vec: (x?: number | undefined, y?: number | undefined) => {
    x: number;
    y: number;
};
export declare const Mock: typeof SkiaExports & typeof ExternalExports & typeof ValueExports & typeof AnimationExports & {
    createDrawing: () => any;
    createDeclaration: () => any;
    ShaderLib: typeof ShaderLib;
};
