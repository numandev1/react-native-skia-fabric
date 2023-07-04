import type { DrawingContext } from "../../types";
import type { BoxShadowProps, BoxProps } from "../../types/Drawings";
import type { NodeContext } from "../Node";
import { JsiDeclarationNode } from "../Node";
import { JsiRenderNode } from "../RenderNode";
export declare class BoxShadowNode extends JsiDeclarationNode<BoxShadowProps, BoxShadowProps> {
    constructor(ctx: NodeContext, props: BoxShadowProps);
    materialize(): BoxShadowProps;
}
export declare class BoxNode extends JsiRenderNode<BoxProps> {
    constructor(ctx: NodeContext, props: BoxProps);
    renderNode({ canvas, paint, opacity }: DrawingContext): void;
}
