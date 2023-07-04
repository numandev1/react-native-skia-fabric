import type { DrawingContext, GroupProps } from "../types";
import type { RenderNode } from "../types/Node";
import { JsiRenderNode } from "./RenderNode";
import type { NodeContext } from "./Node";
export declare class GroupNode extends JsiRenderNode<GroupProps> implements RenderNode<GroupProps> {
    constructor(ctx: NodeContext, props: GroupProps);
    renderNode(ctx: DrawingContext): void;
}
