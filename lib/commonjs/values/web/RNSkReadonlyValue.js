"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RNSkReadonlyValue = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class RNSkReadonlyValue {
  constructor(value) {
    _defineProperty(this, "_current", void 0);

    _defineProperty(this, "_listeners", []);

    _defineProperty(this, "__typename__", "RNSkValue");

    this._current = value;
  }

  notifyListeners() {
    this._listeners.forEach(cb => cb(this._current));
  }

  update(nextValue) {
    this._current = nextValue;
    this.notifyListeners();
  }

  get current() {
    return this._current;
  }

  addListener(cb) {
    this._listeners.push(cb);

    return () => {
      this._listeners.splice(this._listeners.indexOf(cb), 1);
    };
  }

  __invalidate() {
    this._listeners = [];
  }

}

exports.RNSkReadonlyValue = RNSkReadonlyValue;
//# sourceMappingURL=RNSkReadonlyValue.js.map