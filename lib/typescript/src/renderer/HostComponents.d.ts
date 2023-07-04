import type { ForwardedRef } from "react";
import { NodeType } from "../dom/types";
import type { CircleProps, DrawingNodeProps, ImageProps, PaintProps, PathProps, CustomDrawingNodeProps, LineProps, OvalProps, DiffRectProps, PointsProps, RectProps, RoundedRectProps, TextProps, VerticesProps, BlurMaskFilterProps, BlendImageFilterProps, BlurImageFilterProps, DisplacementMapImageFilterProps, DropShadowImageFilterProps, OffsetImageFilterProps, RuntimeShaderImageFilterProps, MatrixColorFilterProps, ShaderProps, ImageShaderProps, LinearGradientProps, GroupProps, PatchProps, BlendColorFilterProps, DashPathEffectProps, DiscretePathEffectProps, CornerPathEffectProps, Line2DPathEffectProps, Path1DPathEffectProps, Path2DPathEffectProps, TextPathProps, TextBlobProps, GlyphsProps, TwoPointConicalGradientProps, TurbulenceProps, SweepGradientProps, RadialGradientProps, ColorProps, PictureProps, ImageSVGProps, LerpColorFilterProps, BoxProps, BoxShadowProps } from "../dom/types";
import type { ChildrenProps } from "../dom/types/Common";
import type { BlendProps, MorphologyImageFilterProps } from "../dom/types/ImageFilters";
import type { PaintNode } from "../dom/nodes/PaintNode";
import type { Container } from "./Container";
import type { SkiaProps } from "./processors";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            skGroup: SkiaProps<GroupProps>;
            skPaint: SkiaProps<PaintProps> & {
                ref: ForwardedRef<PaintNode>;
            };
            skFill: SkiaProps<DrawingNodeProps>;
            skImage: SkiaProps<ImageProps>;
            skCircle: SkiaProps<CircleProps>;
            skPath: SkiaProps<PathProps>;
            skDrawing: SkiaProps<CustomDrawingNodeProps>;
            skLine: SkiaProps<LineProps>;
            skOval: SkiaProps<OvalProps>;
            skPatch: SkiaProps<PatchProps>;
            skPoints: SkiaProps<PointsProps>;
            skRect: SkiaProps<RectProps>;
            skRRect: SkiaProps<RoundedRectProps>;
            skVertices: SkiaProps<VerticesProps>;
            skText: SkiaProps<TextProps>;
            skTextPath: SkiaProps<TextPathProps>;
            skTextBlob: SkiaProps<TextBlobProps>;
            skGlyphs: SkiaProps<GlyphsProps>;
            skDiffRect: SkiaProps<DiffRectProps>;
            skPicture: SkiaProps<PictureProps>;
            skImageSVG: SkiaProps<ImageSVGProps>;
            skBlurMaskFilter: SkiaProps<BlurMaskFilterProps>;
            skBlendImageFilter: SkiaProps<BlendImageFilterProps>;
            skBlurImageFilter: SkiaProps<BlurImageFilterProps>;
            skOffsetImageFilter: SkiaProps<OffsetImageFilterProps>;
            skDropShadowImageFilter: SkiaProps<DropShadowImageFilterProps>;
            skDisplacementMapImageFilter: SkiaProps<DisplacementMapImageFilterProps>;
            skRuntimeShaderImageFilter: SkiaProps<RuntimeShaderImageFilterProps>;
            skMorphologyImageFilter: SkiaProps<MorphologyImageFilterProps>;
            skMatrixColorFilter: SkiaProps<MatrixColorFilterProps>;
            skBlendColorFilter: SkiaProps<BlendColorFilterProps>;
            skLinearToSRGBGammaColorFilter: SkiaProps<ChildrenProps>;
            skSRGBToLinearGammaColorFilter: SkiaProps<ChildrenProps>;
            skLumaColorFilter: SkiaProps<ChildrenProps>;
            skLerpColorFilter: SkiaProps<LerpColorFilterProps>;
            skShader: SkiaProps<ShaderProps>;
            skImageShader: SkiaProps<ImageShaderProps>;
            skColorShader: SkiaProps<ColorProps>;
            skTurbulence: SkiaProps<TurbulenceProps>;
            skFractalNoise: SkiaProps<TurbulenceProps>;
            skLinearGradient: SkiaProps<LinearGradientProps>;
            skRadialGradient: SkiaProps<RadialGradientProps>;
            skSweepGradient: SkiaProps<SweepGradientProps>;
            skTwoPointConicalGradient: SkiaProps<TwoPointConicalGradientProps>;
            skDiscretePathEffect: SkiaProps<DiscretePathEffectProps>;
            skDashPathEffect: SkiaProps<DashPathEffectProps>;
            skPath1DPathEffect: SkiaProps<Path1DPathEffectProps>;
            skPath2DPathEffect: SkiaProps<Path2DPathEffectProps>;
            skCornerPathEffect: SkiaProps<CornerPathEffectProps>;
            skSumPathEffect: ChildrenProps;
            skLine2DPathEffect: SkiaProps<Line2DPathEffectProps>;
            skBlend: SkiaProps<BlendProps>;
            skBackdropFilter: SkiaProps<ChildrenProps>;
            skBox: SkiaProps<BoxProps>;
            skBoxShadow: SkiaProps<BoxShadowProps>;
        }
    }
}
export declare const createNode: (container: Container, type: NodeType, props: any) => import("../dom/types").DeclarationNode<PaintProps, import("..").SkPaint, never> | import("../dom/types").DeclarationNode<BlurMaskFilterProps, import("..").SkMaskFilter, never> | import("../dom/types").DeclarationNode<BlendImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<BlurImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<OffsetImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<DropShadowImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<MorphologyImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<DisplacementMapImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<RuntimeShaderImageFilterProps, import("..").SkImageFilter, never> | import("../dom/types").DeclarationNode<MatrixColorFilterProps, import("..").SkColorFilter, never> | import("../dom/types").DeclarationNode<BlendColorFilterProps, import("..").SkColorFilter, never> | import("../dom/types").DeclarationNode<null, import("..").SkColorFilter, never> | import("../dom/types").DeclarationNode<LerpColorFilterProps, import("..").SkColorFilter, never> | import("../dom/types").DeclarationNode<ShaderProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<ImageShaderProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<ColorProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<TurbulenceProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<LinearGradientProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<RadialGradientProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<SweepGradientProps, import("..").SkShader, never> | import("../dom/types").DeclarationNode<CornerPathEffectProps, import("..").SkPathEffect, null> | import("../dom/types").DeclarationNode<DiscretePathEffectProps, import("..").SkPathEffect, never> | import("../dom/types").DeclarationNode<DashPathEffectProps, import("..").SkPathEffect, never> | import("../dom/types").DeclarationNode<Path1DPathEffectProps, import("..").SkPathEffect, null> | import("../dom/types").DeclarationNode<Path2DPathEffectProps, import("..").SkPathEffect, null> | import("../dom/types").DeclarationNode<null, import("..").SkPathEffect, null> | import("../dom/types").DeclarationNode<Line2DPathEffectProps, import("..").SkPathEffect, null> | import("../dom/types").DeclarationNode<BlendProps, import("..").SkImageFilter | import("..").SkShader, never> | import("../dom/types").RenderNode<ChildrenProps> | import("../dom/types").DeclarationNode<BoxShadowProps, BoxShadowProps, never>;
