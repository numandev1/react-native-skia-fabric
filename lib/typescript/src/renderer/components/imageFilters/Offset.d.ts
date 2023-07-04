/// <reference types="react" />
import type { SkiaProps } from "../../processors/Animations/Animations";
import type { OffsetImageFilterProps } from "../../../dom/types";
export declare const Offset: {
    (props: SkiaProps<OffsetImageFilterProps>): JSX.Element;
    defaultProps: {
        x: number;
        y: number;
    };
};
