import React from "react";
import type { PointerEvent } from "react";
import type { SkRect } from "../skia/types";
import type { SkiaValue } from "../values";
import type { DrawMode, SkiaViewProps } from "./types";
import { TouchType } from "./types";
export declare class SkiaView extends React.Component<SkiaViewProps> {
    constructor(props: SkiaViewProps);
    private _surface;
    private _unsubscriptions;
    private _touches;
    private _canvas;
    private _canvasRef;
    private _mode;
    private _redrawRequests;
    private width;
    private height;
    private requestId;
    private unsubscribeAll;
    private onLayout;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    /**
     * Creates a snapshot from the canvas in the surface
     * @param rect Rect to use as bounds. Optional.
     * @returns An Image object.
     */
    makeImageSnapshot(rect?: SkRect): import("../skia/types").SkImage | undefined;
    /**
     * Sends a redraw request to the native SkiaView.
     */
    private tick;
    redraw(): void;
    /**
     * Updates the drawing mode for the skia view. This is the same
     * as declaratively setting the mode property on the SkiaView.
     * There are two drawing modes, "continuous" and "default",
     * where the continuous mode will continuously redraw the view and
     * the default mode will only redraw when any of the regular react
     * properties are changed like size and margins.
     * @param mode Drawing mode to use.
     */
    setDrawMode(mode: DrawMode): void;
    /**
     * Registers one or move values as a dependant value of the Skia View. The view will
     * The view will redraw itself when any of the values change.
     * @param values Values to register
     */
    registerValues(_values: SkiaValue<unknown>[]): void;
    private handleTouchEvent;
    createTouchHandler(touchType: TouchType): (evt: PointerEvent) => void;
    render(): JSX.Element;
}
