import React from "react";
import type { DrawingNodeProps } from "../../dom/types";
import type { PaintNode } from "../../dom/nodes/PaintNode";
export declare const usePaintRef: () => React.RefObject<PaintNode>;
export declare const Paint: React.ForwardRefExoticComponent<import("../processors").AnimatedProps<DrawingNodeProps> & React.RefAttributes<PaintNode>>;
