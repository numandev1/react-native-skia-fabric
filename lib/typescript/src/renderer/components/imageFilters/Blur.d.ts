/// <reference types="react" />
import type { SkiaProps } from "../../processors/Animations/Animations";
import type { BlurImageFilterProps } from "../../../dom/types";
export declare const Blur: {
    (props: SkiaProps<BlurImageFilterProps>): JSX.Element;
    defaultProps: {
        mode: string;
    };
};
