/// <reference types="react" />
import type { SkiaProps } from "../../processors";
import type { ShaderProps } from "../../../dom/types";
export declare const Shader: {
    (props: SkiaProps<ShaderProps>): JSX.Element;
    defaultProps: {
        uniforms: never[];
    };
};
