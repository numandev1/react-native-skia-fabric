import { HostObject } from "./Host";
import { JsiSkPath } from "./JsiSkPath";
export class JsiSkContourMeasure extends HostObject {
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
    return new JsiSkPath(this.CanvasKit, this.ref.getSegment(startD, stopD, startWithMoveTo));
  }

  isClosed() {
    return this.ref.isClosed();
  }

  length() {
    return this.ref.length();
  }

}
//# sourceMappingURL=JsiSkContourMeasure.js.map