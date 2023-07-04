/// <reference types="react" />
import type { SkiaProps } from "../../processors";
import type { PathProps } from "../../../dom/types";
export declare const Path: {
    (props: SkiaProps<PathProps>): JSX.Element;
    defaultProps: {
        start: number;
        end: number;
    };
};
