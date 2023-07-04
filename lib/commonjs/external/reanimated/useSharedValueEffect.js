"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSharedValueEffect = void 0;

var _react = require("react");

var _Reanimated;

// @ts-ignore
let Reanimated;
let Core;

try {
  Reanimated = require("react-native-reanimated");
  Core = require("react-native-reanimated/lib/reanimated2/core");
} catch (e) {// Ignore
}

const useSharedValueWrapper = ((_Reanimated = Reanimated) === null || _Reanimated === void 0 ? void 0 : _Reanimated.useSharedValue) === undefined ? value => (0, _react.useMemo)(() => ({
  value
}), [value]) : Reanimated.useSharedValue;
/**
 * Connects a shared value from reanimated to a SkiaView or Canvas
 * so whenever the shared value changes the SkiaView will redraw.
 * @param cb Callback that will be called whenever the shared value changes.
 * @param values One or more shared values to listen for.
 */

const useSharedValueEffect = function (cb, value) {
  for (var _len = arguments.length, values = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    values[_key - 2] = arguments[_key];
  }

  const input = useSharedValueWrapper(0);
  const {
    runOnJS,
    startMapper,
    stopMapper
  } = (0, _react.useMemo)(() => {
    if (Reanimated && Core) {
      const {
        runOnJS
      } = Reanimated;
      const {
        startMapper,
        stopMapper
      } = Core;
      return {
        runOnJS,
        startMapper,
        stopMapper
      };
    } else {
      console.warn("Reanimated was not found and the useSharedValueEffect hook will have no effect.");
      return {
        runOnJS: undefined,
        startMapper: undefined,
        stopMapper: undefined
      };
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (startMapper !== undefined && runOnJS !== undefined && stopMapper !== undefined) {
      // Start a mapper in Reanimated
      const mapperId = startMapper(() => {
        "worklet";

        runOnJS(cb)();
      }, [value, ...values], [input]); // Return unregistering the mapper

      return () => {
        if (stopMapper && mapperId !== undefined) {
          stopMapper(mapperId);
        }
      };
    }

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, runOnJS, startMapper, stopMapper, value, ...values]);
};

exports.useSharedValueEffect = useSharedValueEffect;
//# sourceMappingURL=useSharedValueEffect.js.map