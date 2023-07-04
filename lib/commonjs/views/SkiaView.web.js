"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkiaView = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _JsiSkSurface = require("../skia/web/JsiSkSurface");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const pd = _reactNative.PixelRatio.get();

class SkiaView extends _react.default.Component {
  constructor(props) {
    var _props$mode;

    super(props);

    _defineProperty(this, "_surface", null);

    _defineProperty(this, "_unsubscriptions", []);

    _defineProperty(this, "_touches", []);

    _defineProperty(this, "_canvas", null);

    _defineProperty(this, "_canvasRef", /*#__PURE__*/_react.default.createRef());

    _defineProperty(this, "_mode", void 0);

    _defineProperty(this, "_redrawRequests", 0);

    _defineProperty(this, "width", 0);

    _defineProperty(this, "height", 0);

    _defineProperty(this, "requestId", 0);

    this._mode = (_props$mode = props.mode) !== null && _props$mode !== void 0 ? _props$mode : "default";
  }

  unsubscribeAll() {
    this._unsubscriptions.forEach(u => u());

    this._unsubscriptions = [];
  }

  onLayout(evt) {
    const {
      CanvasKit
    } = global;
    const {
      width,
      height
    } = evt.nativeEvent.layout;
    this.width = width;
    this.height = height; // Reset canvas / surface on layout change

    if (this._canvasRef.current) {
      const canvas = this._canvasRef.current;
      canvas.width = canvas.clientWidth * pd;
      canvas.height = canvas.clientHeight * pd;
      const surface = CanvasKit.MakeWebGLCanvasSurface(this._canvasRef.current);

      if (!surface) {
        throw new Error("Could not create surface");
      }

      this._surface = new _JsiSkSurface.JsiSkSurface(CanvasKit, surface);
      this._canvas = this._surface.getCanvas();
      this.redraw();
    }
  }

  componentDidMount() {
    // Start render loop
    this.tick();
  }

  componentDidUpdate() {
    this.redraw();
  }

  componentWillUnmount() {
    this.unsubscribeAll();
    cancelAnimationFrame(this.requestId);
  }
  /**
   * Creates a snapshot from the canvas in the surface
   * @param rect Rect to use as bounds. Optional.
   * @returns An Image object.
   */


  makeImageSnapshot(rect) {
    var _this$_surface;

    return (_this$_surface = this._surface) === null || _this$_surface === void 0 ? void 0 : _this$_surface.makeImageSnapshot(rect);
  }
  /**
   * Sends a redraw request to the native SkiaView.
   */


  tick() {
    if (this._mode === "continuous" || this._redrawRequests > 0) {
      this._redrawRequests = 0;

      if (this._canvas && this.props.onDraw) {
        var _this$_surface2;

        const touches = [...this._touches];
        this._touches = [];
        const info = {
          height: this.height,
          width: this.width,
          timestamp: Date.now(),
          touches: touches.map(t => [t])
        };

        if (this.props.onDraw) {
          const canvas = this._canvas;
          canvas.save();
          canvas.scale(pd, pd);
          this.props.onDraw(canvas, info);
          canvas.restore();
        }

        (_this$_surface2 = this._surface) === null || _this$_surface2 === void 0 ? void 0 : _this$_surface2.ref.flush();
      }
    }

    this.requestId = requestAnimationFrame(this.tick.bind(this));
  }

  redraw() {
    this._redrawRequests++;
  }
  /**
   * Updates the drawing mode for the skia view. This is the same
   * as declaratively setting the mode property on the SkiaView.
   * There are two drawing modes, "continuous" and "default",
   * where the continuous mode will continuously redraw the view and
   * the default mode will only redraw when any of the regular react
   * properties are changed like size and margins.
   * @param mode Drawing mode to use.
   */


  setDrawMode(mode) {
    this._mode = mode;
    this.tick();
  }
  /**
   * Registers one or move values as a dependant value of the Skia View. The view will
   * The view will redraw itself when any of the values change.
   * @param values Values to register
   */


  registerValues(_values) {
    // Unsubscribe from dependency values
    this.unsubscribeAll(); // Register redraw dependencies on values

    _values.forEach(v => {
      this._unsubscriptions.push(v.addListener(() => {
        this.redraw();
      }));
    });
  }

  handleTouchEvent(evt, touchType) {
    this._touches.push({
      id: evt.pointerId,
      x: evt.clientX - evt.currentTarget.getClientRects()[0].left,
      y: evt.clientY - evt.currentTarget.getClientRects()[0].top,
      force: evt.pressure,
      type: touchType,
      timestamp: Date.now()
    });

    this.redraw();
  }

  createTouchHandler(touchType) {
    return evt => this.handleTouchEvent(evt, touchType);
  }

  render() {
    const {
      mode,
      debug = false,
      ...viewProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, viewProps, {
      onLayout: this.onLayout.bind(this)
    }), /*#__PURE__*/_react.default.createElement("canvas", {
      ref: this._canvasRef,
      style: {
        display: "flex",
        flex: 1
      },
      onPointerDown: this.createTouchHandler(_types.TouchType.Start),
      onPointerMove: this.createTouchHandler(_types.TouchType.Active),
      onPointerUp: this.createTouchHandler(_types.TouchType.End),
      onPointerCancel: this.createTouchHandler(_types.TouchType.Cancelled),
      onPointerLeave: this.createTouchHandler(_types.TouchType.End),
      onPointerOut: this.createTouchHandler(_types.TouchType.End)
    }));
  }

}

exports.SkiaView = SkiaView;
//# sourceMappingURL=SkiaView.web.js.map