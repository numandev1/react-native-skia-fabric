/// <reference types="react" />
import type { SkiaProps } from "../../processors";
import type { TextProps } from "../../../dom/types";
export declare const Text: {
    (props: SkiaProps<TextProps>): JSX.Element;
    defaultProps: {
        x: number;
        y: number;
    };
};
