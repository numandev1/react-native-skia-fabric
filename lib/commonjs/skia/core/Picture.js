"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePicture = exports.createPicture = void 0;

var _react = require("react");

var _Skia = require("../Skia");

/**
 * Memoizes and returns an SkPicture that can be drawn to another canvas.
 * @param rect Picture bounds
 * @param cb Callback for drawing to the canvas
 * @returns SkPicture
 */
const usePicture = function (rect, cb) {
  let deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  console.warn("usePicture() is deprecated. Use createPicture() instead.");
  return (0, _react.useMemo)(() => {
    const recorder = _Skia.Skia.PictureRecorder();

    const canvas = recorder.beginRecording(rect);
    cb(canvas);
    return recorder.finishRecordingAsPicture(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
/**
 * Memoizes and returns an SkPicture that can be drawn to another canvas.
 * @param rect Picture bounds
 * @param cb Callback for drawing to the canvas
 * @returns SkPicture
 */


exports.usePicture = usePicture;

const createPicture = (rect, cb) => {
  const recorder = _Skia.Skia.PictureRecorder();

  const canvas = recorder.beginRecording(rect);
  cb(canvas);
  return recorder.finishRecordingAsPicture();
};

exports.createPicture = createPicture;
//# sourceMappingURL=Picture.js.map