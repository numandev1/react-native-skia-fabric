"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkDOM = void 0;

var _drawings = require("./drawings");

var _paint = require("./paint");

var _ColorFilters = require("./paint/ColorFilters");

var _Shaders = require("./paint/Shaders");

var _ImageFilters = require("./paint/ImageFilters");

var _GroupNode = require("./GroupNode");

var _PaintNode = require("./PaintNode");

class JsiSkDOM {
  constructor(ctx) {
    this.ctx = ctx;
  }

  Group(props) {
    return new _GroupNode.GroupNode(this.ctx, props !== null && props !== void 0 ? props : {});
  }

  Paint(props) {
    return new _PaintNode.PaintNode(this.ctx, props);
  } // Drawings


  Fill(props) {
    return new _drawings.FillNode(this.ctx, props);
  }

  Image(props) {
    return new _drawings.ImageNode(this.ctx, props);
  }

  Circle(props) {
    return new _drawings.CircleNode(this.ctx, props);
  }

  Path(props) {
    return new _drawings.PathNode(this.ctx, props);
  }

  CustomDrawing(props) {
    return new _drawings.CustomDrawingNode(this.ctx, props);
  }

  Line(props) {
    return new _drawings.LineNode(this.ctx, props);
  }

  Oval(props) {
    return new _drawings.OvalNode(this.ctx, props);
  }

  Patch(props) {
    return new _drawings.PatchNode(this.ctx, props);
  }

  Points(props) {
    return new _drawings.PointsNode(this.ctx, props);
  }

  Rect(props) {
    return new _drawings.RectNode(this.ctx, props);
  }

  RRect(props) {
    return new _drawings.RRectNode(this.ctx, props);
  }

  Vertices(props) {
    return new _drawings.VerticesNode(this.ctx, props);
  }

  Text(props) {
    return new _drawings.TextNode(this.ctx, props);
  }

  TextPath(props) {
    return new _drawings.TextPathNode(this.ctx, props);
  }

  TextBlob(props) {
    return new _drawings.TextBlobNode(this.ctx, props);
  }

  Glyphs(props) {
    return new _drawings.GlyphsNode(this.ctx, props);
  }

  DiffRect(props) {
    return new _drawings.DiffRectNode(this.ctx, props);
  }

  Picture(props) {
    return new _drawings.PictureNode(this.ctx, props);
  }

  ImageSVG(props) {
    return new _drawings.ImageSVGNode(this.ctx, props);
  } // BlurMaskFilters


  BlurMaskFilter(props) {
    return new _paint.BlurMaskFilterNode(this.ctx, props);
  } // ImageFilters


  BlendImageFilter(props) {
    return new _paint.BlendImageFilterNode(this.ctx, props);
  }

  DropShadowImageFilter(props) {
    return new _paint.DropShadowImageFilterNode(this.ctx, props);
  }

  DisplacementMapImageFilter(props) {
    return new _paint.DisplacementMapImageFilterNode(this.ctx, props);
  }

  BlurImageFilter(props) {
    return new _paint.BlurImageFilterNode(this.ctx, props);
  }

  OffsetImageFilter(props) {
    return new _paint.OffsetImageFilterNode(this.ctx, props);
  }

  MorphologyImageFilter(props) {
    return new _ImageFilters.MorphologyImageFilterNode(this.ctx, props);
  }

  RuntimeShaderImageFilter(props) {
    return new _paint.RuntimeShaderImageFilterNode(this.ctx, props);
  } // Color Filters


  MatrixColorFilter(props) {
    return new _ColorFilters.MatrixColorFilterNode(this.ctx, props);
  }

  BlendColorFilter(props) {
    return new _ColorFilters.BlendColorFilterNode(this.ctx, props);
  }

  LumaColorFilter() {
    return new _ColorFilters.LumaColorFilterNode(this.ctx);
  }

  LinearToSRGBGammaColorFilter() {
    return new _ColorFilters.LinearToSRGBGammaColorFilterNode(this.ctx);
  }

  SRGBToLinearGammaColorFilter() {
    return new _ColorFilters.SRGBToLinearGammaColorFilterNode(this.ctx);
  }

  LerpColorFilter(props) {
    return new _ColorFilters.LerpColorFilterNode(this.ctx, props);
  } // Shaders


  Shader(props) {
    return new _Shaders.ShaderNode(this.ctx, props);
  }

  ImageShader(props) {
    return new _Shaders.ImageShaderNode(this.ctx, props);
  }

  ColorShader(props) {
    return new _Shaders.ColorNode(this.ctx, props);
  }

  SweepGradient(props) {
    return new _Shaders.SweepGradientNode(this.ctx, props);
  }

  Turbulence(props) {
    return new _Shaders.TurbulenceNode(this.ctx, props);
  }

  FractalNoise(props) {
    return new _Shaders.FractalNoiseNode(this.ctx, props);
  }

  LinearGradient(props) {
    return new _Shaders.LinearGradientNode(this.ctx, props);
  }

  RadialGradient(props) {
    return new _Shaders.RadialGradientNode(this.ctx, props);
  }

  TwoPointConicalGradient(props) {
    return new _Shaders.TwoPointConicalGradientNode(this.ctx, props);
  } // Path Effects


  CornerPathEffect(props) {
    return new _paint.CornerPathEffectNode(this.ctx, props);
  }

  DiscretePathEffect(props) {
    return new _paint.DiscretePathEffectNode(this.ctx, props);
  }

  DashPathEffect(props) {
    return new _paint.DashPathEffectNode(this.ctx, props);
  }

  Path1DPathEffect(props) {
    return new _paint.Path1DPathEffectNode(this.ctx, props);
  }

  Path2DPathEffect(props) {
    return new _paint.Path2DPathEffectNode(this.ctx, props);
  }

  SumPathEffect() {
    return new _paint.SumPathEffectNode(this.ctx);
  }

  Line2DPathEffect(props) {
    return new _paint.Line2DPathEffectNode(this.ctx, props);
  }

  Blend(props) {
    return new _paint.BlendNode(this.ctx, props);
  }

  BackdropFilter(props) {
    return new _drawings.BackdropFilterNode(this.ctx, props);
  }

  Box(props) {
    return new _drawings.BoxNode(this.ctx, props);
  }

  BoxShadow(props) {
    return new _drawings.BoxShadowNode(this.ctx, props);
  }

}

exports.JsiSkDOM = JsiSkDOM;
//# sourceMappingURL=JsiSkDOM.js.map