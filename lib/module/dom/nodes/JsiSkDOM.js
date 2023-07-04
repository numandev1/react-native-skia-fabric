import { FillNode, ImageNode, CircleNode, PathNode, LineNode, PatchNode, PointsNode, RectNode, RRectNode, VerticesNode, TextNode, OvalNode, CustomDrawingNode, TextPathNode, TextBlobNode, GlyphsNode, DiffRectNode, PictureNode, ImageSVGNode, BackdropFilterNode, BoxNode, BoxShadowNode } from "./drawings";
import { BlendImageFilterNode, BlurImageFilterNode, BlurMaskFilterNode, DisplacementMapImageFilterNode, DropShadowImageFilterNode, OffsetImageFilterNode, RuntimeShaderImageFilterNode, CornerPathEffectNode, DiscretePathEffectNode, DashPathEffectNode, Path1DPathEffectNode, Path2DPathEffectNode, SumPathEffectNode, Line2DPathEffectNode, BlendNode } from "./paint";
import { MatrixColorFilterNode, LumaColorFilterNode, LinearToSRGBGammaColorFilterNode, SRGBToLinearGammaColorFilterNode, BlendColorFilterNode, LerpColorFilterNode } from "./paint/ColorFilters";
import { LinearGradientNode, ShaderNode, ImageShaderNode, TwoPointConicalGradientNode, TurbulenceNode, SweepGradientNode, RadialGradientNode, FractalNoiseNode, ColorNode } from "./paint/Shaders";
import { MorphologyImageFilterNode } from "./paint/ImageFilters";
import { GroupNode } from "./GroupNode";
import { PaintNode } from "./PaintNode";
export class JsiSkDOM {
  constructor(ctx) {
    this.ctx = ctx;
  }

  Group(props) {
    return new GroupNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }

  Paint(props) {
    return new PaintNode(this.ctx, props);
  } // Drawings


  Fill(props) {
    return new FillNode(this.ctx, props);
  }

  Image(props) {
    return new ImageNode(this.ctx, props);
  }

  Circle(props) {
    return new CircleNode(this.ctx, props);
  }

  Path(props) {
    return new PathNode(this.ctx, props);
  }

  CustomDrawing(props) {
    return new CustomDrawingNode(this.ctx, props);
  }

  Line(props) {
    return new LineNode(this.ctx, props);
  }

  Oval(props) {
    return new OvalNode(this.ctx, props);
  }

  Patch(props) {
    return new PatchNode(this.ctx, props);
  }

  Points(props) {
    return new PointsNode(this.ctx, props);
  }

  Rect(props) {
    return new RectNode(this.ctx, props);
  }

  RRect(props) {
    return new RRectNode(this.ctx, props);
  }

  Vertices(props) {
    return new VerticesNode(this.ctx, props);
  }

  Text(props) {
    return new TextNode(this.ctx, props);
  }

  TextPath(props) {
    return new TextPathNode(this.ctx, props);
  }

  TextBlob(props) {
    return new TextBlobNode(this.ctx, props);
  }

  Glyphs(props) {
    return new GlyphsNode(this.ctx, props);
  }

  DiffRect(props) {
    return new DiffRectNode(this.ctx, props);
  }

  Picture(props) {
    return new PictureNode(this.ctx, props);
  }

  ImageSVG(props) {
    return new ImageSVGNode(this.ctx, props);
  } // BlurMaskFilters


  BlurMaskFilter(props) {
    return new BlurMaskFilterNode(this.ctx, props);
  } // ImageFilters


  BlendImageFilter(props) {
    return new BlendImageFilterNode(this.ctx, props);
  }

  DropShadowImageFilter(props) {
    return new DropShadowImageFilterNode(this.ctx, props);
  }

  DisplacementMapImageFilter(props) {
    return new DisplacementMapImageFilterNode(this.ctx, props);
  }

  BlurImageFilter(props) {
    return new BlurImageFilterNode(this.ctx, props);
  }

  OffsetImageFilter(props) {
    return new OffsetImageFilterNode(this.ctx, props);
  }

  MorphologyImageFilter(props) {
    return new MorphologyImageFilterNode(this.ctx, props);
  }

  RuntimeShaderImageFilter(props) {
    return new RuntimeShaderImageFilterNode(this.ctx, props);
  } // Color Filters


  MatrixColorFilter(props) {
    return new MatrixColorFilterNode(this.ctx, props);
  }

  BlendColorFilter(props) {
    return new BlendColorFilterNode(this.ctx, props);
  }

  LumaColorFilter() {
    return new LumaColorFilterNode(this.ctx);
  }

  LinearToSRGBGammaColorFilter() {
    return new LinearToSRGBGammaColorFilterNode(this.ctx);
  }

  SRGBToLinearGammaColorFilter() {
    return new SRGBToLinearGammaColorFilterNode(this.ctx);
  }

  LerpColorFilter(props) {
    return new LerpColorFilterNode(this.ctx, props);
  } // Shaders


  Shader(props) {
    return new ShaderNode(this.ctx, props);
  }

  ImageShader(props) {
    return new ImageShaderNode(this.ctx, props);
  }

  ColorShader(props) {
    return new ColorNode(this.ctx, props);
  }

  SweepGradient(props) {
    return new SweepGradientNode(this.ctx, props);
  }

  Turbulence(props) {
    return new TurbulenceNode(this.ctx, props);
  }

  FractalNoise(props) {
    return new FractalNoiseNode(this.ctx, props);
  }

  LinearGradient(props) {
    return new LinearGradientNode(this.ctx, props);
  }

  RadialGradient(props) {
    return new RadialGradientNode(this.ctx, props);
  }

  TwoPointConicalGradient(props) {
    return new TwoPointConicalGradientNode(this.ctx, props);
  } // Path Effects


  CornerPathEffect(props) {
    return new CornerPathEffectNode(this.ctx, props);
  }

  DiscretePathEffect(props) {
    return new DiscretePathEffectNode(this.ctx, props);
  }

  DashPathEffect(props) {
    return new DashPathEffectNode(this.ctx, props);
  }

  Path1DPathEffect(props) {
    return new Path1DPathEffectNode(this.ctx, props);
  }

  Path2DPathEffect(props) {
    return new Path2DPathEffectNode(this.ctx, props);
  }

  SumPathEffect() {
    return new SumPathEffectNode(this.ctx);
  }

  Line2DPathEffect(props) {
    return new Line2DPathEffectNode(this.ctx, props);
  }

  Blend(props) {
    return new BlendNode(this.ctx, props);
  }

  BackdropFilter(props) {
    return new BackdropFilterNode(this.ctx, props);
  }

  Box(props) {
    return new BoxNode(this.ctx, props);
  }

  BoxShadow(props) {
    return new BoxShadowNode(this.ctx, props);
  }

}
//# sourceMappingURL=JsiSkDOM.js.map