"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeType = exports.DeclarationType = void 0;
let NodeType;
exports.NodeType = NodeType;

(function (NodeType) {
  NodeType["Shader"] = "skShader";
  NodeType["ImageShader"] = "skImageShader";
  NodeType["ColorShader"] = "skColorShader";
  NodeType["Turbulence"] = "skTurbulence";
  NodeType["FractalNoise"] = "skFractalNoise";
  NodeType["LinearGradient"] = "skLinearGradient";
  NodeType["RadialGradient"] = "skRadialGradient";
  NodeType["SweepGradient"] = "skSweepGradient";
  NodeType["TwoPointConicalGradient"] = "skTwoPointConicalGradient";
  NodeType["BlurMaskFilter"] = "skBlurMaskFilter";
  NodeType["DiscretePathEffect"] = "skDiscretePathEffect";
  NodeType["DashPathEffect"] = "skDashPathEffect";
  NodeType["Path1DPathEffect"] = "skPath1DPathEffect";
  NodeType["Path2DPathEffect"] = "skPath2DPathEffect";
  NodeType["CornerPathEffect"] = "skCornerPathEffect";
  NodeType["SumPathEffect"] = "skSumPathEffect";
  NodeType["Line2DPathEffect"] = "skLine2DPathEffect";
  NodeType["MatrixColorFilter"] = "skMatrixColorFilter";
  NodeType["BlendColorFilter"] = "skBlendColorFilter";
  NodeType["LinearToSRGBGammaColorFilter"] = "skLinearToSRGBGammaColorFilter";
  NodeType["SRGBToLinearGammaColorFilter"] = "skSRGBToLinearGammaColorFilter";
  NodeType["LumaColorFilter"] = "skLumaColorFilter";
  NodeType["LerpColorFilter"] = "skLerpColorFilter";
  NodeType["OffsetImageFilter"] = "skOffsetImageFilter";
  NodeType["DisplacementMapImageFilter"] = "skDisplacementMapImageFilter";
  NodeType["BlurImageFilter"] = "skBlurImageFilter";
  NodeType["DropShadowImageFilter"] = "skDropShadowImageFilter";
  NodeType["MorphologyImageFilter"] = "skMorphologyImageFilter";
  NodeType["BlendImageFilter"] = "skBlendImageFilter";
  NodeType["RuntimeShaderImageFilter"] = "skRuntimeShaderImageFilter";
  NodeType["Blend"] = "skBlend";
  NodeType["BackdropFilter"] = "skBackdropFilter";
  NodeType["Box"] = "skBox";
  NodeType["BoxShadow"] = "skBoxShadow";
  NodeType["Group"] = "skGroup";
  NodeType["Drawing"] = "skDrawing";
  NodeType["Paint"] = "skPaint";
  NodeType["Circle"] = "skCircle";
  NodeType["Fill"] = "skFill";
  NodeType["Image"] = "skImage";
  NodeType["Points"] = "skPoints";
  NodeType["Path"] = "skPath";
  NodeType["Rect"] = "skRect";
  NodeType["RRect"] = "skRRect";
  NodeType["Oval"] = "skOval";
  NodeType["Line"] = "skLine";
  NodeType["Patch"] = "skPatch";
  NodeType["Vertices"] = "skVertices";
  NodeType["DiffRect"] = "skDiffRect";
  NodeType["Text"] = "skText";
  NodeType["TextPath"] = "skTextPath";
  NodeType["TextBlob"] = "skTextBlob";
  NodeType["Glyphs"] = "skGlyphs";
  NodeType["Picture"] = "skPicture";
  NodeType["ImageSVG"] = "skImageSVG";
})(NodeType || (exports.NodeType = NodeType = {}));

let DeclarationType;
exports.DeclarationType = DeclarationType;

(function (DeclarationType) {
  DeclarationType[DeclarationType["Paint"] = 0] = "Paint";
  DeclarationType[DeclarationType["Shader"] = 1] = "Shader";
  DeclarationType[DeclarationType["ImageFilter"] = 2] = "ImageFilter";
  DeclarationType[DeclarationType["ColorFilter"] = 3] = "ColorFilter";
  DeclarationType[DeclarationType["PathEffect"] = 4] = "PathEffect";
  DeclarationType[DeclarationType["MaskFilter"] = 5] = "MaskFilter";
  DeclarationType[DeclarationType["Unknown"] = 6] = "Unknown";
})(DeclarationType || (exports.DeclarationType = DeclarationType = {}));
//# sourceMappingURL=NodeType.js.map