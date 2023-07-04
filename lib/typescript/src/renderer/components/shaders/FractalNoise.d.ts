/// <reference types="react" />
import type { FractalNoiseProps } from "../../../dom/types";
import type { SkiaProps } from "../../processors/Animations/Animations";
export declare const FractalNoise: {
    (props: SkiaProps<FractalNoiseProps>): JSX.Element;
    defaultProps: {
        seed: number;
        tileWidth: number;
        tileHeight: number;
    };
};
