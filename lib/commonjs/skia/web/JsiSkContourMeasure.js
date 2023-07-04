"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkContourMeasure = void 0;

var _Host = require("./Host");

var _JsiSkPath = require("./JsiSkPath");

class JsiSkContourMeasure extends _Host.HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "ContourMeasure");
  }

  getPosTan(distance) {
    const [px, py, tx, ty] = this.ref.getPosTan(distance);
    return {
      px,
      py,
      tx,
      ty
    };
  }

  getSegment(startD, stopD, startWithMoveTo) {
    return new _JsiSkPath.JsiSkPath(this.CanvasKit, this.ref.getSegment(startD, stopD, startWithMoveTo));
  }

  isClosed() {
    return this.ref.isClosed();
  }

  length() {
    return this.ref.length();
  }

}

exports.JsiSkContourMeasure = JsiSkContourMeasure;
//# sourceMappingURL=JsiSkContourMeasure.js.map