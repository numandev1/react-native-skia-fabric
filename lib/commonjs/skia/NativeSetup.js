"use strict";

var _reactNative = require("react-native");

if (_reactNative.Platform.OS !== "web" && global.SkiaApi == null) {
  // Initialize RN Skia
  const SkiaModule = _reactNative.NativeModules.RNSkia;

  if (SkiaModule == null || typeof SkiaModule.install !== "function") {
    throw new Error("Native RNSkia Module cannot be found! Make sure you correctly " + "installed native dependencies and rebuilt your app.");
  }

  const result = SkiaModule.install();

  if (result !== true) {
    throw new Error(`Native Skia Module failed to correctly install JSI Bindings! Result: ${result}`);
  }
}
//# sourceMappingURL=NativeSetup.js.map