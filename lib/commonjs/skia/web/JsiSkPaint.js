"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkPaint = void 0;

var _Host = require("./Host");

var _JsiSkColorFilter = require("./JsiSkColorFilter");

var _JsiSkImageFilter = require("./JsiSkImageFilter");

var _JsiSkMaskFilter = require("./JsiSkMaskFilter");

var _JsiSkPathEffect = require("./JsiSkPathEffect");

var _JsiSkShader = require("./JsiSkShader");

class JsiSkPaint extends _Host.HostObject {
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
    this.ref.setBlendMode((0, _Host.ckEnum)(blendMode));
  }

  setColor(color) {
    this.ref.setColor(color);
  }

  setColorFilter(filter) {
    this.ref.setColorFilter(filter ? _JsiSkColorFilter.JsiSkColorFilter.fromValue(filter) : null);
  }

  setImageFilter(filter) {
    this.ref.setImageFilter(filter ? _JsiSkImageFilter.JsiSkImageFilter.fromValue(filter) : null);
  }

  setMaskFilter(filter) {
    this.ref.setMaskFilter(filter ? _JsiSkMaskFilter.JsiSkMaskFilter.fromValue(filter) : null);
  }

  setPathEffect(effect) {
    this.ref.setPathEffect(effect ? _JsiSkPathEffect.JsiSkPathEffect.fromValue(effect) : null);
  }

  setShader(shader) {
    this.ref.setShader(shader ? _JsiSkShader.JsiSkShader.fromValue(shader) : null);
  }

  setStrokeCap(cap) {
    this.ref.setStrokeCap((0, _Host.ckEnum)(cap));
  }

  setStrokeJoin(join) {
    this.ref.setStrokeJoin((0, _Host.ckEnum)(join));
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

exports.JsiSkPaint = JsiSkPaint;
//# sourceMappingURL=JsiSkPaint.js.map