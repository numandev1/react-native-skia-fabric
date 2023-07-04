/// <reference types="react" />
import type { BlurMaskFilterProps } from "../../../dom/types";
import type { SkiaProps } from "../../processors/Animations/Animations";
export declare const BlurMask: {
    (props: SkiaProps<BlurMaskFilterProps>): JSX.Element;
    defaultProps: {
        style: string;
        respectCTM: boolean;
    };
};
