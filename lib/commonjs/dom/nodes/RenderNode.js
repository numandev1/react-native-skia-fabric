"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSkPaint = exports.JsiRenderNode = void 0;

var _types = require("../../skia/types");

var _datatypes = require("./datatypes");

var _Node = require("./Node");

var _Enum = require("./datatypes/Enum");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const paintProps = ["color", "strokeWidth", "blendMode", "strokeCap", "strokeJoin", "strokeMiter", "style", "antiAlias", "opacity"];

class JsiRenderNode extends _Node.JsiNode {
  constructor(ctx, type, props) {
    super(ctx, type, props);

    _defineProperty(this, "paintCache", null);

    _defineProperty(this, "matrix", void 0);

    _defineProperty(this, "clipRect", void 0);

    _defineProperty(this, "clipRRect", void 0);

    _defineProperty(this, "clipPath", void 0);

    this.matrix = this.Skia.Matrix();
    this.onPropChange();
  }

  setProps(props) {
    super.setProps(props);
    this.onPropChange();
    this.paintCache = null;
  }

  setProp(key, value) {
    const hasChanged = super.setProp(key, value);

    if (hasChanged) {
      this.onPropChange();

      if (paintProps.includes(key)) {
        this.paintCache = null;
      }
    }

    return hasChanged;
  }

  onPropChange() {
    this.matrix.identity();
    this.clipPath = undefined;
    this.clipRect = undefined;
    this.clipRRect = undefined;
    this.computeMatrix();
    this.computeClip();
  }

  addChild(child) {
    if (child instanceof _Node.JsiDeclarationNode) {
      child.setInvalidate(() => this.paintCache = null);
    }

    super.addChild(child);
  }

  insertChildBefore(child, before) {
    if (child instanceof _Node.JsiDeclarationNode) {
      child.setInvalidate(() => this.paintCache = null);
    }

    super.insertChildBefore(child, before);
  }

  computeClip() {
    const {
      clip
    } = this.props;

    if (clip) {
      if ((0, _datatypes.isPathDef)(clip)) {
        this.clipPath = (0, _datatypes.processPath)(this.Skia, clip);
      } else if ((0, _types.isRRect)(clip)) {
        this.clipRRect = clip;
      } else {
        this.clipRect = clip;
      }
    }
  }

  computeMatrix() {
    (0, _datatypes.processTransformProps)(this.matrix, this.props);
  }

  getPaintCtx() {
    let ctx;
    const {
      color,
      strokeWidth,
      blendMode,
      style,
      strokeJoin,
      strokeCap,
      strokeMiter,
      opacity,
      antiAlias
    } = this.props;

    if (color !== undefined || strokeWidth !== undefined || blendMode !== undefined || style !== undefined || strokeJoin !== undefined || strokeCap !== undefined || strokeMiter !== undefined || opacity !== undefined || antiAlias !== undefined) {
      ctx = {};

      if (color !== undefined) {
        ctx.color = this.Skia.Color(color);
      }

      if (strokeWidth !== undefined) {
        ctx.strokeWidth = strokeWidth;
      }

      if (blendMode !== undefined) {
        ctx.blendMode = _types.BlendMode[(0, _Enum.enumKey)(blendMode)];
      }

      if (style !== undefined) {
        ctx.style = _types.PaintStyle[(0, _Enum.enumKey)(style)];
      }

      if (strokeJoin !== undefined) {
        ctx.strokeJoin = _types.StrokeJoin[(0, _Enum.enumKey)(strokeJoin)];
      }

      if (strokeCap !== undefined) {
        ctx.strokeCap = _types.StrokeCap[(0, _Enum.enumKey)(strokeCap)];
      }

      if (strokeMiter !== undefined) {
        ctx.strokeMiter = strokeMiter;
      }

      if (opacity !== undefined) {
        ctx.opacity = opacity;
      }

      if (antiAlias !== undefined) {
        ctx.antiAlias = antiAlias;
      }
    }

    this._children.forEach(child => {
      if (child instanceof _Node.JsiDeclarationNode) {
        if (child.isColorFilter()) {
          ctx = ctx || {};
          const cf = child.materialize();
          ctx.colorFilter = ctx.colorFilter ? this.Skia.ColorFilter.MakeCompose(cf, ctx.colorFilter) : cf;
        } else if (child.isShader()) {
          ctx = ctx || {};
          const shader = child.materialize();
          ctx.shader = shader;
        } else if (child.isPathEffect()) {
          ctx = ctx || {};
          const pe = child.materialize();
          ctx.pathEffect = ctx.pathEffect ? this.Skia.PathEffect.MakeCompose(pe, ctx.pathEffect) : pe;
        } else if (child.isImageFilter()) {
          ctx = ctx || {};
          const filter = child.materialize();
          ctx.imageFilter = ctx.imageFilter ? this.Skia.ImageFilter.MakeCompose(filter, ctx.imageFilter) : filter;
        } else if (child.isMaskFilter()) {
          ctx = ctx || {};
          const filter = child.materialize();
          ctx.maskFilter = filter;
        }
      }
    });

    return ctx;
  }

  render(parentCtx) {
    const {
      invertClip,
      layer,
      matrix,
      transform
    } = this.props;
    const {
      canvas
    } = parentCtx;
    const opacity = this.props.opacity ? parentCtx.opacity * this.props.opacity : parentCtx.opacity;

    if (this.paintCache === null || this.paintCache.parent !== parentCtx.paint) {
      const paintCtx = this.getPaintCtx();
      const child = paintCtx ? concatPaint(parentCtx.paint, paintCtx, parentCtx.opacity) : parentCtx.paint;
      this.paintCache = {
        parent: parentCtx.paint,
        child
      };
    }

    const paint = this.paintCache.child; // TODO: can we only recreate a new context here if needed?

    const ctx = { ...parentCtx,
      opacity,
      paint
    };
    const hasTransform = matrix !== undefined || transform !== undefined;
    const hasClip = this.clipRect !== undefined;
    const shouldSave = hasTransform || hasClip || !!layer;
    const op = invertClip ? _types.ClipOp.Difference : _types.ClipOp.Intersect;

    if (shouldSave) {
      if (layer) {
        if (typeof layer === "boolean") {
          canvas.saveLayer();
        } else if (isSkPaint(layer)) {
          canvas.saveLayer(layer);
        } else {
          canvas.saveLayer(layer.current ? layer.current.materialize() : undefined);
        }
      } else {
        canvas.save();
      }
    }

    if (this.matrix) {
      canvas.concat(this.matrix);
    }

    if (this.clipRect) {
      canvas.clipRect(this.clipRect, op, true);
    }

    if (this.clipRRect) {
      canvas.clipRRect(this.clipRRect, op, true);
    }

    if (this.clipPath) {
      canvas.clipPath(this.clipPath, op, true);
    }

    this.renderNode(ctx);

    if (shouldSave) {
      canvas.restore();
    }
  }

}

exports.JsiRenderNode = JsiRenderNode;

const isSkPaint = obj => "__typename__" in obj && obj.__typename__ === "Paint";

exports.isSkPaint = isSkPaint;

const concatPaint = (parent, _ref, opacity) => {
  let {
    color,
    strokeWidth,
    shader,
    antiAlias,
    blendMode,
    colorFilter,
    imageFilter,
    maskFilter,
    pathEffect,
    opacity: alpha,
    strokeCap,
    strokeJoin,
    strokeMiter,
    style
  } = _ref;
  const paint = parent.copy();

  if (color !== undefined) {
    paint.setShader(null);
    color[3] *= opacity;
    paint.setColor(color);
  } else {
    const cl = paint.getColor();
    cl[3] *= opacity;
    paint.setColor(cl);
  }

  if (strokeWidth !== undefined) {
    paint.setStrokeWidth(strokeWidth);
  }

  if (shader !== undefined) {
    paint.setShader(shader);
  }

  if (antiAlias !== undefined) {
    paint.setAntiAlias(antiAlias);
  }

  if (blendMode !== undefined) {
    paint.setBlendMode(blendMode);
  }

  if (colorFilter !== undefined) {
    paint.setColorFilter(colorFilter);
  }

  if (imageFilter !== undefined) {
    paint.setImageFilter(imageFilter);
  }

  if (maskFilter !== undefined) {
    paint.setMaskFilter(maskFilter);
  }

  if (pathEffect !== undefined) {
    paint.setPathEffect(pathEffect);
  }

  if (alpha !== undefined) {
    paint.setAlphaf(alpha * opacity);
  }

  if (strokeCap !== undefined) {
    paint.setStrokeCap(strokeCap);
  }

  if (strokeJoin !== undefined) {
    paint.setStrokeJoin(strokeJoin);
  }

  if (strokeMiter !== undefined) {
    paint.setStrokeMiter(strokeMiter);
  }

  if (style !== undefined) {
    paint.setStyle(style);
  }

  return paint;
};
//# sourceMappingURL=RenderNode.js.map