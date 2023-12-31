function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { JsiDeclarationNode } from "./Node";
import { PaintNode } from "./PaintNode";
import { isSkPaint, JsiRenderNode } from "./RenderNode";
export class JsiDrawingNode extends JsiRenderNode {
  constructor(ctx, type, props) {
    super(ctx, type, props);

    _defineProperty(this, "derived", void 0);

    this.derived = this.deriveProps();
  }

  setProps(props) {
    super.setProps(props);
    this.derived = this.deriveProps();
  }

  setProp(name, value) {
    const hasChanged = super.setProp(name, value);

    if (hasChanged) {
      this.derived = this.deriveProps();
    }

    return hasChanged;
  }

  addChild(child) {
    if (!(child instanceof JsiDeclarationNode)) {
      throw new Error(`Cannot add ${child.type} to ${this.type}`);
    }

    super.addChild(child);
    this.derived = this.deriveProps();
  }

  insertChildBefore(child, before) {
    if (!(child instanceof JsiDeclarationNode)) {
      throw new Error(`Cannot add ${child.type} to ${this.type}`);
    }

    super.insertChildBefore(child, before);
    this.derived = this.deriveProps();
  }

  renderNode(ctx) {
    if (this.props.paint && isSkPaint(this.props.paint)) {
      this.draw({ ...ctx,
        paint: this.props.paint
      });
    } else if (this.props.paint && this.props.paint.current != null) {
      this.draw({ ...ctx,
        paint: this.props.paint.current.materialize()
      });
    } else {
      this.draw(ctx);
    }

    this.children().map(child => {
      if (child instanceof PaintNode) {
        const paint = child.materialize();
        this.draw({ ...ctx,
          paint
        });
      }
    });
  }

}
//# sourceMappingURL=DrawingNode.js.map