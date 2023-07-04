"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useContextBridge = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// useContextBridge() is taken from https://github.com/pmndrs/drei#usecontextbridge
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useContextBridge = function () {
  for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
    contexts[_key] = arguments[_key];
  }

  const values = // eslint-disable-next-line react-hooks/rules-of-hooks
  contexts.map(context => (0, _react.useContext)(context));
  return (0, _react.useMemo)(() => _ref => {
    let {
      children
    } = _ref;
    return contexts.reduceRight((acc, Context, i) => /*#__PURE__*/_react.default.createElement(Context.Provider, {
      value: values[i],
      children: acc
    }), children);
  }, [contexts, values]);
};

exports.useContextBridge = useContextBridge;
//# sourceMappingURL=useContextBridge.js.map