import type { GroupProps, DrawingContext, RenderNode, SkDOM } from "../dom/types";
import type { Skia } from "../skia/types";
import type { DependencyManager } from "./DependencyManager";
export declare class Container {
    depMgr: DependencyManager;
    redraw: () => void;
    private _root;
    Sk: SkDOM;
    constructor(Skia: Skia, depMgr: DependencyManager, redraw: () => void);
    draw(ctx: DrawingContext): void;
    get root(): RenderNode<GroupProps>;
}
