var _Reanimated;

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable @typescript-eslint/consistent-type-imports */

/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo } from "react"; // @ts-ignore

let Reanimated;
let Core;

try {
  Reanimated = require("react-native-reanimated");
  Core = require("react-native-reanimated/lib/reanimated2/core");
} catch (e) {// Ignore
}

const useSharedValueWrapper = ((_Reanimated = Reanimated) === null || _Reanimated === void 0 ? void 0 : _Reanimated.useSharedValue) === undefined ? value => useMemo(() => ({
  value
}), [value]) : Reanimated.useSharedValue;
/**
 * Connects a shared value from reanimated to a SkiaView or Canvas
 * so whenever the shared value changes the SkiaView will redraw.
 * @param cb Callback that will be called whenever the shared value changes.
 * @param values One or more shared values to listen for.
 */

export const useSharedValueEffect = function (cb, value) {
  for (var _len = arguments.length, values = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    values[_key - 2] = arguments[_key];
  }

  const input = useSharedValueWrapper(0);
  const {
    runOnJS,
    startMapper,
    stopMapper
  } = useMemo(() => {
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
  useEffect(() => {
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
//# sourceMappingURL=useSharedValueEffect.js.map