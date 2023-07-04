"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SRGBToLinearGammaColorFilterNode = exports.MatrixColorFilterNode = exports.LumaColorFilterNode = exports.LinearToSRGBGammaColorFilterNode = exports.LerpColorFilterNode = exports.ColorFilterDeclaration = exports.BlendColorFilterNode = void 0;

var _types = require("../../../skia/types");

var _Node = require("../Node");

var _types2 = require("../../types");

var _datatypes = require("../datatypes");

var _Enum = require("../datatypes/Enum");

class ColorFilterDeclaration extends _Node.JsiDeclarationNode {
  constructor(ctx, type, props) {
    super(ctx, _types2.DeclarationType.ColorFilter, type, props);
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

exports.ColorFilterDeclaration = ColorFilterDeclaration;

class MatrixColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.MatrixColorFilter, props);
  }

  materialize() {
    const {
      matrix
    } = this.props;
    const cf = this.Skia.ColorFilter.MakeMatrix(matrix);
    return this.compose(cf);
  }

}

exports.MatrixColorFilterNode = MatrixColorFilterNode;

class BlendColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.BlendColorFilter, props);
  }

  materialize() {
    const {
      mode
    } = this.props;
    const color = (0, _datatypes.processColor)(this.Skia, this.props.color, 1);
    const cf = this.Skia.ColorFilter.MakeBlend(color, _types.BlendMode[(0, _Enum.enumKey)(mode)]);
    return this.compose(cf);
  }

}

exports.BlendColorFilterNode = BlendColorFilterNode;

class LinearToSRGBGammaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, _types2.NodeType.LinearToSRGBGammaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeLinearToSRGBGamma();
    return this.compose(cf);
  }

}

exports.LinearToSRGBGammaColorFilterNode = LinearToSRGBGammaColorFilterNode;

class SRGBToLinearGammaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, _types2.NodeType.SRGBToLinearGammaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeSRGBToLinearGamma();
    return this.compose(cf);
  }

}

exports.SRGBToLinearGammaColorFilterNode = SRGBToLinearGammaColorFilterNode;

class LumaColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx) {
    super(ctx, _types2.NodeType.LumaColorFilter, null);
  }

  materialize() {
    const cf = this.Skia.ColorFilter.MakeLumaColorFilter();
    return this.compose(cf);
  }

}

exports.LumaColorFilterNode = LumaColorFilterNode;

class LerpColorFilterNode extends ColorFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.LerpColorFilter, props);
  }

  materialize() {
    const {
      t
    } = this.props;
    const [first, second] = this.children();
    return this.Skia.ColorFilter.MakeLerp(t, first.materialize(), second.materialize());
  }

}

exports.LerpColorFilterNode = LerpColorFilterNode;
//# sourceMappingURL=ColorFilters.js.map