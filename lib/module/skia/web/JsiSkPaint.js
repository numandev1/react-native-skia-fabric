import { HostObject, ckEnum } from "./Host";
import { JsiSkColorFilter } from "./JsiSkColorFilter";
import { JsiSkImageFilter } from "./JsiSkImageFilter";
import { JsiSkMaskFilter } from "./JsiSkMaskFilter";
import { JsiSkPathEffect } from "./JsiSkPathEffect";
import { JsiSkShader } from "./JsiSkShader";
export class JsiSkPaint extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "Paint");
  }

  copy() {
    return new JsiSkPaint(this.CanvasKit, this.ref.copy());
  }

  reset() {
    this.ref = new this.CanvasKit.Paint();
  }

  getColor() {
    return this.ref.getColor();
  }

  getStrokeCap() {
    return this.ref.getStrokeCap().value;
  }

  getStrokeJoin() {
    return this.ref.getStrokeJoin().value;
  }

  getStrokeMiter() {
    return this.ref.getStrokeMiter();
  }

  getStrokeWidth() {
    return this.ref.getStrokeWidth();
  }

  setAlphaf(alpha) {
    this.ref.setAlphaf(alpha);
  }

  setAntiAlias(aa) {
    this.ref.setAntiAlias(aa);
  }

  setBlendMode(blendMode) {
    this.ref.setBlendMode(ckEnum(blendMode));
  }

  setColor(color) {
    this.ref.setColor(color);
  }

  setColorFilter(filter) {
    this.ref.setColorFilter(filter ? JsiSkColorFilter.fromValue(filter) : null);
  }

  setImageFilter(filter) {
    this.ref.setImageFilter(filter ? JsiSkImageFilter.fromValue(filter) : null);
  }

  setMaskFilter(filter) {
    this.ref.setMaskFilter(filter ? JsiSkMaskFilter.fromValue(filter) : null);
  }

  setPathEffect(effect) {
    this.ref.setPathEffect(effect ? JsiSkPathEffect.fromValue(effect) : null);
  }

  setShader(shader) {
    this.ref.setShader(shader ? JsiSkShader.fromValue(shader) : null);
  }

  setStrokeCap(cap) {
    this.ref.setStrokeCap(ckEnum(cap));
  }

  setStrokeJoin(join) {
    this.ref.setStrokeJoin(ckEnum(join));
  }

  setStrokeMiter(limit) {
    this.ref.setStrokeMiter(limit);
  }

  setStrokeWidth(width) {
    this.ref.setStrokeWidth(width);
  }

  setStyle(style) {
    this.ref.setStyle({
      value: style
    });
  }

}
//# sourceMappingURL=JsiSkPaint.js.map