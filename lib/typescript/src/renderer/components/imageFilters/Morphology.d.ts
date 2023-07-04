/// <reference types="react" />
import type { MorphologyImageFilterProps } from "../../../dom/types";
import type { SkiaProps } from "../../processors";
export declare const Morphology: {
    (props: SkiaProps<MorphologyImageFilterProps>): JSX.Element;
    defaultProps: {
        operator: string;
    };
};
