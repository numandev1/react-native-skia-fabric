/// <reference types="react" />
import type { TurbulenceProps } from "../../../dom/types";
import type { SkiaProps } from "../../processors/Animations/Animations";
export declare const Turbulence: {
    (props: SkiaProps<TurbulenceProps>): JSX.Element;
    defaultProps: {
        seed: number;
        tileWidth: number;
        tileHeight: number;
    };
};
