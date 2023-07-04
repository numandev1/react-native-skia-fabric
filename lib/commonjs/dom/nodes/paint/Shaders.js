"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoPointConicalGradientNode = exports.TurbulenceNode = exports.SweepGradientNode = exports.ShaderNode = exports.ShaderDeclaration = exports.RadialGradientNode = exports.LinearGradientNode = exports.ImageShaderNode = exports.FractalNoiseNode = exports.ColorNode = void 0;

var _types = require("../../../skia/types");

var _Node = require("../Node");

var _types2 = require("../../types");

var _Color = require("../datatypes/Color");

var _datatypes = require("../datatypes");

class ShaderDeclaration extends _Node.JsiDeclarationNode {
  constructor(ctx, type, props) {
    super(ctx, _types2.DeclarationType.Shader, type, props);
  }

}

exports.ShaderDeclaration = ShaderDeclaration;

class ShaderNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.Shader, props);
  }

  materialize() {
    const {
      source,
      uniforms,
      ...transform
    } = this.props;
    const m3 = this.Skia.Matrix();
    (0, _datatypes.processTransformProps)(m3, transform);
    return source.makeShaderWithChildren((0, _types.processUniforms)(source, uniforms), this.children().filter(child => child instanceof _Node.JsiDeclarationNode && child.isShader()).map(child => child.materialize()), m3);
  }

}

exports.ShaderNode = ShaderNode;

class ImageShaderNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.ImageShader, props);
  }

  materialize() {
    const {
      fit,
      image,
      tx,
      ty,
      fm,
      mm,
      ...imageShaderProps
    } = this.props;
    const rct = (0, _datatypes.getRect)(this.Skia, imageShaderProps);

    if (rct) {
      var _imageShaderProps$tra;

      const rects = (0, _datatypes.fitRects)(fit, {
        x: 0,
        y: 0,
        width: image.width(),
        height: image.height()
      }, rct);
      const m3 = (0, _datatypes.rect2rect)(rects.src, rects.dst);
      imageShaderProps.transform = [...((_imageShaderProps$tra = imageShaderProps.transform) !== null && _imageShaderProps$tra !== void 0 ? _imageShaderProps$tra : []), ...m3];
    }

    const lm = this.Skia.Matrix();
    (0, _datatypes.processTransformProps)(lm, imageShaderProps);
    return image.makeShaderOptions(_types.TileMode[(0, _datatypes.enumKey)(tx)], _types.TileMode[(0, _datatypes.enumKey)(ty)], _types.FilterMode[(0, _datatypes.enumKey)(fm)], _types.MipmapMode[(0, _datatypes.enumKey)(mm)], lm);
  }

}

exports.ImageShaderNode = ImageShaderNode;

class ColorNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.ColorShader, props);
  }

  materialize() {
    const {
      color
    } = this.props;
    return this.Skia.Shader.MakeColor((0, _Color.processColor)(this.Skia, color, 1));
  }

}

exports.ColorNode = ColorNode;

class TurbulenceNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.Turbulence, props);
  }

  materialize() {
    const {
      freqX,
      freqY,
      octaves,
      seed,
      tileWidth,
      tileHeight
    } = this.props;
    return this.Skia.Shader.MakeTurbulence(freqX, freqY, octaves, seed, tileWidth, tileHeight);
  }

}

exports.TurbulenceNode = TurbulenceNode;

class FractalNoiseNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.FractalNoise, props);
  }

  materialize() {
    const {
      freqX,
      freqY,
      octaves,
      seed,
      tileWidth,
      tileHeight
    } = this.props;
    return this.Skia.Shader.MakeFractalNoise(freqX, freqY, octaves, seed, tileWidth, tileHeight);
  }

}

exports.FractalNoiseNode = FractalNoiseNode;

class LinearGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.LinearGradient, props);
  }

  materialize() {
    const {
      start,
      end
    } = this.props;
    const {
      colors,
      positions,
      mode,
      localMatrix,
      flags
    } = (0, _datatypes.processGradientProps)(this.Skia, this.props);
    return this.Skia.Shader.MakeLinearGradient(start, end, colors, positions !== null && positions !== void 0 ? positions : null, mode, localMatrix, flags);
  }

}

exports.LinearGradientNode = LinearGradientNode;

class RadialGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.RadialGradient, props);
  }

  materialize() {
    const {
      c,
      r
    } = this.props;
    const {
      colors,
      positions,
      mode,
      localMatrix,
      flags
    } = (0, _datatypes.processGradientProps)(this.Skia, this.props);
    return this.Skia.Shader.MakeRadialGradient(c, r, colors, positions, mode, localMatrix, flags);
  }

}

exports.RadialGradientNode = RadialGradientNode;

class SweepGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.SweepGradient, props);
  }

  materialize() {
    const {
      c,
      start,
      end
    } = this.props;
    const {
      colors,
      positions,
      mode,
      localMatrix,
      flags
    } = (0, _datatypes.processGradientProps)(this.Skia, this.props);
    return this.Skia.Shader.MakeSweepGradient(c.x, c.y, colors, positions, mode, localMatrix, flags, start, end);
  }

}

exports.SweepGradientNode = SweepGradientNode;

class TwoPointConicalGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, _types2.NodeType.TwoPointConicalGradient, props);
  }

  materialize() {
    const {
      startR,
      endR,
      start,
      end
    } = this.props;
    const {
      colors,
      positions,
      mode,
      localMatrix,
      flags
    } = (0, _datatypes.processGradientProps)(this.Skia, this.props);
    return this.Skia.Shader.MakeTwoPointConicalGradient(start, startR, end, endR, colors, positions, mode, localMatrix, flags);
  }

}

exports.TwoPointConicalGradientNode = TwoPointConicalGradientNode;
//# sourceMappingURL=Shaders.js.map