/// <reference types="react" />
import type { ImageShaderProps } from "../../../dom/types";
import type { SkiaProps } from "../../processors";
export declare const ImageShader: {
    (props: SkiaProps<ImageShaderProps>): JSX.Element;
    defaultProps: {
        readonly tx: "decal";
        readonly ty: "decal";
        readonly fm: "nearest";
        readonly mm: "none";
        readonly fit: "none";
        readonly transform: readonly [];
    };
};
