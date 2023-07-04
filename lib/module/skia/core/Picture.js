import { useMemo } from "react";
import { Skia } from "../Skia";

/**
 * Memoizes and returns an SkPicture that can be drawn to another canvas.
 * @param rect Picture bounds
 * @param cb Callback for drawing to the canvas
 * @returns SkPicture
 */
export const usePicture = function (rect, cb) {
  let deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  console.warn("usePicture() is deprecated. Use createPicture() instead.");
  return useMemo(() => {
    const recorder = Skia.PictureRecorder();
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

export const createPicture = (rect, cb) => {
  const recorder = Skia.PictureRecorder();
  const canvas = recorder.beginRecording(rect);
  cb(canvas);
  return recorder.finishRecordingAsPicture();
};
//# sourceMappingURL=Picture.js.map