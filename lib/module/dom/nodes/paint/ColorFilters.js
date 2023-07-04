import { BlendMode } from "../../../skia/types";
import { JsiDeclarationNode } from "../Node";
import { DeclarationType, NodeType } from "../../types";
import { processColor } from "../datatypes";
import { enumKey } from "../datatypes/Enum";
export class ColorFilterDeclaration extends JsiDeclarationNode {
  constructor(ctx, type, props) {
    super(ctx, DeclarationType.ColorFilter, type, props);
  }

  addChild(child) {
    if (!(child instanceof ColorFilterDeclaration)) {
      throw new Error(`Cannot add child of type ${child.type} to ${this.type}`);
    }

    super.addChild(child);
  }

  insertChildBefore(child, before) {
    if (!(child instanceof ColorFilterDeclaration)) {
      throw new Error(`Cannot add child of type ${child.type} to ${this.type}`);
    }

    super.insertChildBefore(child, before);
  }

  compose(filter) {
    const children = this._children;

    if (this._children.length === 0) {
      return filter;
    } else {
      return this.Skia.ColorFilter.MakeCompose(filter, children.reduce((acc, child) => {
        if (acc === null) {
          return child.materialize();
        }

        return this.Skia.ColorFilter.MakeCompose(acc, child.materialize());
      }, null));
    }
  }

}
export class MatrixColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.MatrixColorFilter, props);
  }

  materialize() {
    const {
      matrix
    } = this.props;
    const cf = this.Skia.ColorFilter.MakeMatrix(matrix);
    return this.compose(cf);
  }

}
export class BlendColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.BlendColorFilter, props);
  }

  materialize() {
    const {
      mode
    } = this.props;
    const color = processColor(this.Skia, this.props.color, 1);
    const cf = this.Skia.ColorFilter.MakeBlend(color, BlendMode[enumKey(mode)]);
    return this.compose(cf);
  }

}
export class LinearToSRGBGammaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, NodeType.LinearToSRGBGammaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeLinearToSRGBGamma();
    return this.compose(cf);
  }

}
export class SRGBToLinearGammaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, NodeType.SRGBToLinearGammaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeSRGBToLinearGamma();
    return this.compose(cf);
  }

}
export class LumaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, NodeType.LumaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeLumaColorFilter();
    return this.compose(cf);
  }

}
export class LerpColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.LerpColorFilter, props);
  }

  materialize() {
    const {
      t
    } = this.props;
    const [first, second] = this.children();
    return this.Skia.ColorFilter.MakeLerp(t, first.materialize(), second.materialize());
  }

}
//# sourceMappingURL=ColorFilters.js.map