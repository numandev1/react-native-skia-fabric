"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkiaView = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let SkiaViewNativeId = 1000;
const NativeSkiaView = (0, _reactNative.requireNativeComponent)("ReactNativeSkiaView");

class SkiaView extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_nativeId", void 0);

    this._nativeId = SkiaViewNativeId++;
    const {
      onDraw
    } = props;

    if (onDraw) {
      assertSkiaViewApi();

      _api.SkiaViewApi.setJsiProperty(this._nativeId, "drawCallback", onDraw);
    }
  }

  get nativeId() {
    return this._nativeId;
  }

  componentDidUpdate(prevProps) {
    const {
      onDraw
    } = this.props;

    if (onDraw !== prevProps.onDraw) {
      assertSkiaViewApi();

      _api.SkiaViewApi.setJsiProperty(this._nativeId, "drawCallback", onDraw);
    }
  }
  /**
   * Creates a snapshot from the canvas in the surface
   * @param rect Rect to use as bounds. Optional.
   * @returns An Image object.
   */


  makeImageSnapshot(rect) {
    assertSkiaViewApi();
    return _api.SkiaViewApi.makeImageSnapshot(this._nativeId, rect);
  }
  /**
   * Sends a redraw request to the native SkiaView.
   */


  redraw() {
    assertSkiaViewApi();

    _api.SkiaViewApi.requestRedraw(this._nativeId);
  }
  /**
   * Registers one or move values as a dependant value of the Skia View. The view will
   * The view will redraw itself when any of the values change.
   * @param values Values to register
   */


  registerValues(values) {
    assertSkiaViewApi();
    return _api.SkiaViewApi.registerValuesInView(this._nativeId, values);
  }

  render() {
    const {
      mode,
      debug = false,
      ...viewProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(NativeSkiaView, _extends({
      collapsable: false,
      nativeID: `${this._nativeId}`,
      mode: mode,
      debug: debug
    }, viewProps));
  }

}

exports.SkiaView = SkiaView;

const assertSkiaViewApi = () => {
  if (_api.SkiaViewApi === null || _api.SkiaViewApi.setJsiProperty === null || _api.SkiaViewApi.callJsiMethod === null || _api.SkiaViewApi.registerValuesInView === null || _api.SkiaViewApi.requestRedraw === null || _api.SkiaViewApi.makeImageSnapshot === null) {
    throw Error("Skia View Api was not found.");
  }
};
//# sourceMappingURL=SkiaView.js.map