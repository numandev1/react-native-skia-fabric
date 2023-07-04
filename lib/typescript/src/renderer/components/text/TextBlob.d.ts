/// <reference types="react" />
import type { SkiaProps } from "../../processors";
import type { TextBlobProps } from "../../../dom/types";
export declare const TextBlob: {
    (props: SkiaProps<TextBlobProps>): JSX.Element;
    defaultProps: {
        x: number;
        y: number;
    };
};
