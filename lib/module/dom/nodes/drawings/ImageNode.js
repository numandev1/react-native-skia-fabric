import { NodeType } from "../../types";
import { fitRects, processRect } from "../datatypes";
import { JsiDrawingNode } from "../DrawingNode";
export class ImageNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.Image, props);
  }

  deriveProps() {
    const {
      image,
      fit
    } = this.props;
    const rect = processRect(this.Skia, this.props);
    const {
      src,
      dst
    } = fitRects(fit, {
      x: 0,
      y: 0,
      width: image.width(),
      height: image.height()
    }, rect);
    return {
      src,
      dst
    };
  }

  draw(_ref) {
    let {
      canvas,
      paint
    } = _ref;
    const {
      image
    } = this.props;

    if (!this.derived) {
      throw new Error("ImageNode: src and dst are undefined");
    }

    const {
      src,
      dst
    } = this.derived;
    canvas.drawImageRect(image, src, dst, paint);
  }

}
//# sourceMappingURL=ImageNode.js.map