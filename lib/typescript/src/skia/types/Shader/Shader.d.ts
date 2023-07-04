import type { SkJSIInstance } from "../JsiInstance";
import type { Vector } from "../Point";
import type { SkRuntimeEffect, SkRuntimeShaderBuilder } from "../RuntimeEffect";
export declare const isShader: (obj: SkJSIInstance<string> | null) => obj is SkShader;
export declare type SkShader = SkJSIInstance<"Shader">;
export declare type UniformValue = number | Vector | readonly number[];
export declare type Uniform = UniformValue | readonly UniformValue[];
export interface Uniforms {
    [name: string]: Uniform;
}
export declare const processUniforms: (source: SkRuntimeEffect, uniforms: Uniforms, builder?: SkRuntimeShaderBuilder | undefined) => number[];
