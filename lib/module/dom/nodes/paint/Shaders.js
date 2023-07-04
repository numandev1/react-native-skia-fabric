import { processUniforms, FilterMode, MipmapMode, TileMode } from "../../../skia/types";
import { JsiDeclarationNode } from "../Node";
import { DeclarationType, NodeType } from "../../types";
import { processColor } from "../datatypes/Color";
import { enumKey, fitRects, getRect, processGradientProps, processTransformProps, rect2rect } from "../datatypes";
export class ShaderDeclaration extends JsiDeclarationNode {
  constructor(ctx, type, props) {
    super(ctx, DeclarationType.Shader, type, props);
  }

}
export class ShaderNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.Shader, props);
  }

  materialize() {
    const {
      source,
      uniforms,
      ...transform
    } = this.props;
    const m3 = this.Skia.Matrix();
    processTransformProps(m3, transform);
    return source.makeShaderWithChildren(processUniforms(source, uniforms), this.children().filter(child => child instanceof JsiDeclarationNode && child.isShader()).map(child => child.materialize()), m3);
  }

}
export class ImageShaderNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.ImageShader, props);
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
    const rct = getRect(this.Skia, imageShaderProps);

    if (rct) {
      var _imageShaderProps$tra;

      const rects = fitRects(fit, {
        x: 0,
        y: 0,
        width: image.width(),
        height: image.height()
      }, rct);
      const m3 = rect2rect(rects.src, rects.dst);
      imageShaderProps.transform = [...((_imageShaderProps$tra = imageShaderProps.transform) !== null && _imageShaderProps$tra !== void 0 ? _imageShaderProps$tra : []), ...m3];
    }

    const lm = this.Skia.Matrix();
    processTransformProps(lm, imageShaderProps);
    return image.makeShaderOptions(TileMode[enumKey(tx)], TileMode[enumKey(ty)], FilterMode[enumKey(fm)], MipmapMode[enumKey(mm)], lm);
  }

}
export class ColorNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.ColorShader, props);
  }

  materialize() {
    const {
      color
    } = this.props;
    return this.Skia.Shader.MakeColor(processColor(this.Skia, color, 1));
  }

}
export class TurbulenceNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.Turbulence, props);
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
export class FractalNoiseNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.FractalNoise, props);
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
export class LinearGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.LinearGradient, props);
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
    } = processGradientProps(this.Skia, this.props);
    return this.Skia.Shader.MakeLinearGradient(start, end, colors, positions !== null && positions !== void 0 ? positions : null, mode, localMatrix, flags);
  }

}
export class RadialGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.RadialGradient, props);
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
    } = processGradientProps(this.Skia, this.props);
    return this.Skia.Shader.MakeRadialGradient(c, r, colors, positions, mode, localMatrix, flags);
  }

}
export class SweepGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.SweepGradient, props);
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
    } = processGradientProps(this.Skia, this.props);
    return this.Skia.Shader.MakeSweepGradient(c.x, c.y, colors, positions, mode, localMatrix, flags, start, end);
  }

}
export class TwoPointConicalGradientNode extends ShaderDeclaration {
  constructor(ctx, props) {
    super(ctx, NodeType.TwoPointConicalGradient, props);
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
    } = processGradientProps(this.Skia, this.props);
    return this.Skia.Shader.MakeTwoPointConicalGradient(start, startR, end, endR, colors, positions, mode, localMatrix, flags);
  }

}
//# sourceMappingURL=Shaders.js.map