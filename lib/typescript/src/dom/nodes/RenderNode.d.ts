import type { RefObject } from "react";
import type { SkMatrix, SkRect, SkRRect, SkPath, SkPaint } from "../../skia/types";
import type { RenderNode, GroupProps, DrawingContext, NodeType, Node, DeclarationNode } from "../types";
import type { NodeContext } from "./Node";
import { JsiNode } from "./Node";
interface PaintCache {
    parent: SkPaint;
    child: SkPaint;
}
export declare abstract class JsiRenderNode<P extends GroupProps> extends JsiNode<P> implements RenderNode<P> {
    paintCache: PaintCache | null;
    matrix: SkMatrix;
    clipRect?: SkRect;
    clipRRect?: SkRRect;
    clipPath?: SkPath;
    constructor(ctx: NodeContext, type: NodeType, props: P);
    setProps(props: P): void;
    setProp<K extends keyof P>(key: K, value: P[K]): boolean;
    protected onPropChange(): void;
    addChild(child: Node<unknown>): void;
    insertChildBefore(child: Node<unknown>, before: Node<unknown>): void;
    private computeClip;
    private computeMatrix;
    private getPaintCtx;
    render(parentCtx: DrawingContext): void;
    abstract renderNode(ctx: DrawingContext): void;
}
export declare const isSkPaint: (obj: RefObject<DeclarationNode<unknown, SkPaint>> | SkPaint) => obj is SkPaint;
export {};
