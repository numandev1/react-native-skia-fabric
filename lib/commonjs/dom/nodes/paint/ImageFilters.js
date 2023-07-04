"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RuntimeShaderImageFilterNode = exports.OffsetImageFilterNode = exports.MorphologyOperator = exports.MorphologyImageFilterNode = exports.ImageFilterDeclaration = exports.DropShadowImageFilterNode = exports.DisplacementMapImageFilterNode = exports.BlurImageFilterNode = exports.BlendImageFilterNode = void 0;

var _types = require("../../../skia/types");

var _types2 = require("../../types");

var _datatypes = require("../datatypes");

var _Node = require("../Node");

const Black = Float32Array.of(0, 0, 0, 1);

const MakeInnerShadow = (Skia, shadowOnly, dx, dy, sigmaX, sigmaY, color, input) => {
  const sourceGraphic = Skia.ImageFilter.MakeColorFilter(Skia.ColorFilter.MakeBlend(Black, _types.BlendMode.Dst), null);
  const sourceAlpha = Skia.ImageFilter.MakeColorFilter(Skia.ColorFilter.MakeBlend(Black, _types.BlendMode.SrcIn), null);
  const f1 = Skia.ImageFilter.MakeColorFilter(Skia.ColorFilter.MakeBlend(color, _types.BlendMode.SrcOut), null);
  const f2 = Skia.ImageFilter.MakeOffset(dx, dy, f1);
  const f3 = Skia.ImageFilter.MakeBlur(sigmaX, sigmaY, _types.TileMode.Decal, f2);
  const f4 = Skia.ImageFilter.MakeBlend(_types.BlendMode.SrcIn, sourceAlpha, f3);

  if (shadowOnly) {
    return f4;
  }

  return Skia.ImageFilter.MakeCompose(input, Skia.ImageFilter.MakeBlend(_types.BlendMode.SrcOver, sourceGraphic, f4));
};

class ImageFilterDeclaration extends _Node.JsiDeclarationNode {
  constructor(ctx, type, props) {
    super(ctx, _types2.DeclarationType.ImageFilter, type, props);
  }

  getOptionalChildInstance(index) {
    const child = this._children[index];

    if (!child) {
      return null;
    }

    return this.getMandatoryChildInstance(index);
  }

  getMandatoryChildInstance(index) {
    const child = this._children[index];

    if (child instanceof _Node.JsiDeclarationNode) {
      if (child.isImageFilter()) {
        return child.materialize();
      } else if (child.isShader()) {
        return this.Skia.ImageFilter.MakeShader(child.materialize(), null);
      } else if (child.declarationType === _types2.DeclarationType.ColorFilter) {
        return this.Skia.ImageFilter.MakeColorFilter(child.materialize(), null);
      } else {
        throw new Error(`Found invalid child ${child.type} in ${this.type}`);
      }
    } else {
      throw new Error(`Found invalid child ${child.type} in ${this.type}`);
    }
  }

}

exports.ImageFilterDeclaration = ImageFilterDeclaration;

class OffsetImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.OffsetImageFilter, props);
  }

  materialize() {
    const {
      x,
      y
    } = this.props;
    return this.Skia.ImageFilter.MakeOffset(x, y, this.getOptionalChildInstance(0));
  }

}

exports.OffsetImageFilterNode = OffsetImageFilterNode;

class DisplacementMapImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.DisplacementMapImageFilter, props);
  }

  materialize() {
    const {
      channelX,
      channelY,
      scale
    } = this.props;
    return this.Skia.ImageFilter.MakeDisplacementMap(_types.ColorChannel[(0, _datatypes.enumKey)(channelX)], _types.ColorChannel[(0, _datatypes.enumKey)(channelY)], scale, this.getMandatoryChildInstance(0), this.getOptionalChildInstance(1));
  }

}

exports.DisplacementMapImageFilterNode = DisplacementMapImageFilterNode;

class BlurImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.BlurImageFilter, props);
  }

  materialize() {
    const {
      mode,
      blur
    } = this.props;
    const sigma = (0, _datatypes.processRadius)(this.Skia, blur);
    return this.Skia.ImageFilter.MakeBlur(sigma.x, sigma.y, _types.TileMode[(0, _datatypes.enumKey)(mode)], this.getOptionalChildInstance(0));
  }

}

exports.BlurImageFilterNode = BlurImageFilterNode;

class DropShadowImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.BlurImageFilter, props);
  }

  materialize() {
    const {
      dx,
      dy,
      blur,
      shadowOnly,
      color: cl,
      inner
    } = this.props;
    const color = (0, _datatypes.processColor)(this.Skia, cl, 1);
    const input = this.getOptionalChildInstance(0);
    let factory;

    if (inner) {
      factory = MakeInnerShadow.bind(null, this.Skia, shadowOnly);
    } else {
      factory = shadowOnly ? this.Skia.ImageFilter.MakeDropShadowOnly.bind(this.Skia.ImageFilter) : this.Skia.ImageFilter.MakeDropShadow.bind(this.Skia.ImageFilter);
    }

    return factory(dx, dy, blur, blur, color, input);
  }

}

exports.DropShadowImageFilterNode = DropShadowImageFilterNode;
let MorphologyOperator;
exports.MorphologyOperator = MorphologyOperator;

(function (MorphologyOperator) {
  MorphologyOperator[MorphologyOperator["Erode"] = 0] = "Erode";
  MorphologyOperator[MorphologyOperator["Dilate"] = 1] = "Dilate";
})(MorphologyOperator || (exports.MorphologyOperator = MorphologyOperator = {}));

class MorphologyImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.MorphologyImageFilter, props);
  }

  materialize() {
    const {
      operator
    } = this.props;
    const r = (0, _datatypes.processRadius)(this.Skia, this.props.radius);
    const input = this.getOptionalChildInstance(0);

    if (MorphologyOperator[(0, _datatypes.enumKey)(operator)] === MorphologyOperator.Erode) {
      return this.Skia.ImageFilter.MakeErode(r.x, r.y, input);
    }

    return this.Skia.ImageFilter.MakeDilate(r.x, r.y, input);
  }

}

exports.MorphologyImageFilterNode = MorphologyImageFilterNode;

class BlendImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.BlendImageFilter, props);
  }

  materialize() {
    const {
      mode
    } = this.props;
    const a = this.getMandatoryChildInstance(0);
    const b = this.getMandatoryChildInstance(1);
    return this.Skia.ImageFilter.MakeBlend(mode, a, b);
  }

}

exports.BlendImageFilterNode = BlendImageFilterNode;

class RuntimeShaderImageFilterNode extends ImageFilterDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.RuntimeShaderImageFilter, props);
  }

  materialize() {
    const {
      source,
      uniforms
    } = this.props;
    const rtb = this.Skia.RuntimeShaderBuilder(source);

    if (uniforms) {
      (0, _types.processUniforms)(source, uniforms, rtb);
    }

    const input = this.getOptionalChildInstance(0);
    return this.Skia.ImageFilter.MakeRuntimeShader(rtb, null, input);
  }

}

exports.RuntimeShaderImageFilterNode = RuntimeShaderImageFilterNode;
//# sourceMappingURL=ImageFilters.js.map