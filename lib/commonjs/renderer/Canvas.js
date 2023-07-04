"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCanvasRef = exports.skiaReconciler = exports.Canvas = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactReconciler = _interopRequireDefault(require("react-reconciler"));

var _views = require("../views");

var _useValue = require("../values/hooks/useValue");

var _Skia = require("../skia/Skia");

var _HostConfig = require("./HostConfig");

var _Container = require("./Container");

var _DependencyManager = require("./DependencyManager");

var _useCanvas = require("./useCanvas");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { debugTree } from "./nodes";
const skiaReconciler = (0, _reactReconciler.default)(_HostConfig.skHostConfig);
exports.skiaReconciler = skiaReconciler;
skiaReconciler.injectIntoDevTools({
  bundleType: 1,
  version: "0.0.1",
  rendererPackageName: "react-native-skia"
});

const render = (element, root, container) => {
  skiaReconciler.updateContainer(element, root, null, () => {
    (0, _HostConfig.debug)("updateContainer");
    container.depMgr.update();
  });
};

const useCanvasRef = () => (0, _react.useRef)(null);

exports.useCanvasRef = useCanvasRef;
const Canvas = /*#__PURE__*/(0, _react.forwardRef)((_ref, forwardedRef) => {
  let {
    children,
    style,
    debug,
    mode,
    onTouch
  } = _ref;
  const size = (0, _useValue.useValue)({
    width: 0,
    height: 0
  });
  const canvasCtx = (0, _react.useMemo)(() => ({
    Skia: _Skia.Skia,
    size
  }), [size]);
  const innerRef = useCanvasRef();
  const ref = useCombinedRefs(forwardedRef, innerRef);
  const [tick, setTick] = (0, _react.useState)(0);
  const redraw = (0, _react.useCallback)(() => {
    setTick(t => t + 1);
  }, []);
  const registerValues = (0, _react.useCallback)(values => {
    if (ref.current === null) {
      throw new Error("Canvas ref is not set");
    }

    return ref.current.registerValues(values);
  }, [ref]);
  const container = (0, _react.useMemo)(() => {
    return new _Container.Container(_Skia.Skia, new _DependencyManager.DependencyManager(registerValues), redraw);
  }, [redraw, registerValues]);
  const root = (0, _react.useMemo)(() => skiaReconciler.createContainer(container, 0, false, null), [container]); // Render effect

  (0, _react.useEffect)(() => {
    render( /*#__PURE__*/_react.default.createElement(_useCanvas.CanvasProvider, {
      value: canvasCtx
    }, children), root, container);
  }, [children, root, redraw, container, canvasCtx]);
  const paint = (0, _react.useMemo)(() => _Skia.Skia.Paint(), []); // Draw callback

  const onDraw = (0, _views.useDrawCallback)((canvas, info) => {
    // TODO: if tree is empty (count === 1) maybe we should not render?
    const {
      width,
      height,
      timestamp
    } = info;

    if (onTouch) {
      onTouch(info.touches);
    }

    if (width !== canvasCtx.size.current.width || height !== canvasCtx.size.current.height) {
      canvasCtx.size.current = {
        width,
        height
      };
    }

    paint.reset();
    const ctx = {
      width,
      height,
      timestamp,
      canvas,
      paint,
      opacity: 1,
      ref,
      center: {
        x: width / 2,
        y: height / 2
      },
      Skia: _Skia.Skia
    };
    container.draw(ctx);
  }, [tick, onTouch]);
  (0, _react.useEffect)(() => {
    return () => {
      skiaReconciler.updateContainer(null, root, null, () => {
        container.depMgr.remove();
      });
    };
  }, [container, root]);
  return /*#__PURE__*/_react.default.createElement(_views.SkiaView, {
    ref: ref,
    style: style,
    onDraw: onDraw,
    mode: mode,
    debug: debug
  });
});
/**
 * Combines a list of refs into a single ref. This can be used to provide
 * both a forwarded ref and an internal ref keeping the same functionality
 * on both of the refs.
 * @param refs Array of refs to combine
 * @returns A single ref that can be used in a ref prop.
 */

exports.Canvas = Canvas;

const useCombinedRefs = function () {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  const targetRef = _react.default.useRef(null);

  _react.default.useEffect(() => {
    refs.forEach(ref => {
      if (ref) {
        if (typeof ref === "function") {
          ref(targetRef.current);
        } else {
          ref.current = targetRef.current;
        }
      }
    });
  }, [refs]);

  return targetRef;
};
//# sourceMappingURL=Canvas.js.map