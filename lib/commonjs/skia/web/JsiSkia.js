"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkApi = void 0;

var _JsiSkPoint = require("./JsiSkPoint");

var _JsiSkPaint = require("./JsiSkPaint");

var _JsiSkRect = require("./JsiSkRect");

var _JsiSkColor = require("./JsiSkColor");

var _JsiSkSurfaceFactory = require("./JsiSkSurfaceFactory");

var _JsiSkRRect = require("./JsiSkRRect");

var _JsiSkRSXform = require("./JsiSkRSXform");

var _JsiSkContourMeasureIter = require("./JsiSkContourMeasureIter");

var _JsiSkPictureRecorder = require("./JsiSkPictureRecorder");

var _JsiSkPictureFactory = require("./JsiSkPictureFactory");

var _JsiSkPathFactory = require("./JsiSkPathFactory");

var _JsiSkMatrix = require("./JsiSkMatrix");

var _JsiSkColorFilterFactory = require("./JsiSkColorFilterFactory");

var _JsiSkTypefaceFactory = require("./JsiSkTypefaceFactory");

var _JsiSkMaskFilterFactory = require("./JsiSkMaskFilterFactory");

var _JsiSkRuntimeEffectFactory = require("./JsiSkRuntimeEffectFactory");

var _JsiSkImageFilterFactory = require("./JsiSkImageFilterFactory");

var _JsiSkShaderFactory = require("./JsiSkShaderFactory");

var _JsiSkPathEffectFactory = require("./JsiSkPathEffectFactory");

var _JsiSkDataFactory = require("./JsiSkDataFactory");

var _JsiSkImageFactory = require("./JsiSkImageFactory");

var _JsiSkSVGFactory = require("./JsiSkSVGFactory");

var _JsiSkTextBlobFactory = require("./JsiSkTextBlobFactory");

var _JsiSkFont = require("./JsiSkFont");

var _JsiSkVerticesFactory = require("./JsiSkVerticesFactory");

var _JsiSkPath = require("./JsiSkPath");

var _JsiSkTypeface = require("./JsiSkTypeface");

const JsiSkApi = CanvasKit => ({
  Point: (x, y) => new _JsiSkPoint.JsiSkPoint(CanvasKit, Float32Array.of(x, y)),
  RuntimeShaderBuilder: _ => {
    throw new Error("Not implemented on React Native Web");
  },
  RRectXY: (rect, rx, ry) => new _JsiSkRRect.JsiSkRRect(CanvasKit, CanvasKit.RRectXY(_JsiSkRect.JsiSkRect.fromValue(CanvasKit, rect), rx, ry)),
  RSXform: (scos, ssin, tx, ty) => new _JsiSkRSXform.JsiSkRSXform(CanvasKit, Float32Array.of(scos, ssin, tx, ty)),
  Color: _JsiSkColor.Color,
  ContourMeasureIter: (path, forceClosed, resScale) => new _JsiSkContourMeasureIter.JsiSkContourMeasureIter(CanvasKit, new CanvasKit.ContourMeasureIter(_JsiSkPath.JsiSkPath.fromValue(path), forceClosed, resScale)),
  Paint: () => {
    const paint = new _JsiSkPaint.JsiSkPaint(CanvasKit, new CanvasKit.Paint());
    paint.setAntiAlias(true);
    return paint;
  },
  PictureRecorder: () => new _JsiSkPictureRecorder.JsiSkPictureRecorder(CanvasKit, new CanvasKit.PictureRecorder()),
  Picture: new _JsiSkPictureFactory.JsiSkPictureFactory(CanvasKit),
  Path: new _JsiSkPathFactory.JsiSkPathFactory(CanvasKit),
  Matrix: matrix => new _JsiSkMatrix.JsiSkMatrix(CanvasKit, matrix ? Float32Array.of(...matrix) : Float32Array.of(...CanvasKit.Matrix.identity())),
  ColorFilter: new _JsiSkColorFilterFactory.JsiSkColorFilterFactory(CanvasKit),
  Font: (typeface, size) => new _JsiSkFont.JsiSkFont(CanvasKit, new CanvasKit.Font(typeface === undefined ? null : _JsiSkTypeface.JsiSkTypeface.fromValue(typeface), size)),
  Typeface: new _JsiSkTypefaceFactory.JsiSkTypefaceFactory(CanvasKit),
  MaskFilter: new _JsiSkMaskFilterFactory.JsiSkMaskFilterFactory(CanvasKit),
  RuntimeEffect: new _JsiSkRuntimeEffectFactory.JsiSkRuntimeEffectFactory(CanvasKit),
  ImageFilter: new _JsiSkImageFilterFactory.JsiSkImageFilterFactory(CanvasKit),
  Shader: new _JsiSkShaderFactory.JsiSkShaderFactory(CanvasKit),
  PathEffect: new _JsiSkPathEffectFactory.JsiSkPathEffectFactory(CanvasKit),
  MakeVertices: _JsiSkVerticesFactory.MakeVertices.bind(null, CanvasKit),
  Data: new _JsiSkDataFactory.JsiSkDataFactory(CanvasKit),
  Image: new _JsiSkImageFactory.JsiSkImageFactory(CanvasKit),
  SVG: new _JsiSkSVGFactory.JsiSkSVGFactory(CanvasKit),
  TextBlob: new _JsiSkTextBlobFactory.JsiSkTextBlobFactory(CanvasKit),
  XYWHRect: (x, y, width, height) => {
    return new _JsiSkRect.JsiSkRect(CanvasKit, CanvasKit.XYWHRect(x, y, width, height));
  },
  Surface: new _JsiSkSurfaceFactory.JsiSkSurfaceFactory(CanvasKit)
});

exports.JsiSkApi = JsiSkApi;
//# sourceMappingURL=JsiSkia.js.map