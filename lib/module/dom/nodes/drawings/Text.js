import { NodeType } from "../../types";
import { processPath } from "../datatypes";
import { JsiDrawingNode } from "../DrawingNode";
export class TextNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.Text, props);
  }

  deriveProps() {
    return null;
  }

  draw(_ref) {
    let {
      canvas,
      paint
    } = _ref;
    const {
      text,
      x,
      y,
      font
    } = this.props;
    canvas.drawText(text, x, y, paint, font);
  }

}
export class TextPathNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.TextPath, props);
  }

  deriveProps() {
    const path = processPath(this.Skia, this.props.path);
    const {
      font,
      initialOffset
    } = this.props;
    let {
      text
    } = this.props;
    const ids = font.getGlyphIDs(text);
    const widths = font.getGlyphWidths(ids);
    const rsx = [];
    const meas = this.Skia.ContourMeasureIter(path, false, 1);
    let cont = meas.next();
    let dist = initialOffset;

    for (let i = 0; i < text.length && cont; i++) {
      const width = widths[i];
      dist += width / 2;

      if (dist > cont.length()) {
        // jump to next contour
        cont = meas.next();

        if (!cont) {
          // We have come to the end of the path - terminate the string
          // right here.
          text = text.substring(0, i);
          break;
        }

        dist = width / 2;
      } // Gives us the (x, y) coordinates as well as the cos/sin of the tangent
      // line at that position.


      const {
        px,
        py,
        tx,
        ty
      } = cont.getPosTan(dist);
      const adjustedX = px - width / 2 * tx;
      const adjustedY = py - width / 2 * ty;
      rsx.push(this.Skia.RSXform(tx, ty, adjustedX, adjustedY));
      dist += width / 2;
    }

    return this.Skia.TextBlob.MakeFromRSXform(text, rsx, font);
  }

  draw(_ref2) {
    let {
      canvas,
      paint
    } = _ref2;

    if (!this.derived) {
      throw new Error("TextPathNode: blob is null");
    }

    canvas.drawTextBlob(this.derived, 0, 0, paint);
  }

}
export class TextBlobNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.TextBlob, props);
  }

  deriveProps() {
    return null;
  }

  draw(_ref3) {
    let {
      canvas,
      paint
    } = _ref3;
    const {
      blob,
      x,
      y
    } = this.props;
    canvas.drawTextBlob(blob, x, y, paint);
  }

}
export class GlyphsNode extends JsiDrawingNode {
  constructor(ctx, props) {
    super(ctx, NodeType.Glyphs, props);
  }

  deriveProps() {
    return this.props.glyphs.reduce((acc, glyph) => {
      const {
        id,
        pos
      } = glyph;
      acc.glyphs.push(id);
      acc.positions.push(pos);
      return acc;
    }, {
      glyphs: [],
      positions: []
    });
  }

  draw(_ref4) {
    let {
      canvas,
      paint
    } = _ref4;

    if (!this.derived) {
      throw new Error("GlyphsNode: processedGlyphs is null");
    }

    const {
      glyphs,
      positions
    } = this.derived;
    const {
      x,
      y,
      font
    } = this.props;
    canvas.drawGlyphs(glyphs, positions, x, y, font, paint);
  }

}
//# sourceMappingURL=Text.js.map