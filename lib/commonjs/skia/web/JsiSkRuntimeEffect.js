"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsiSkRuntimeEffect = void 0;

var _Host = require("./Host");

var _JsiSkMatrix = require("./JsiSkMatrix");

var _JsiSkShader = require("./JsiSkShader");

class JsiSkRuntimeEffect extends _Host.HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "RuntimeEffect");
  }

  makeShader(uniforms, localMatrix) {
    return new _JsiSkShader.JsiSkShader(this.CanvasKit, this.ref.makeShader(uniforms, localMatrix !== undefined ? _JsiSkMatrix.JsiSkMatrix.fromValue(localMatrix) : localMatrix));
  }

  makeShaderWithChildren(uniforms, children, localMatrix) {
    return new _JsiSkShader.JsiSkShader(this.CanvasKit, this.ref.makeShaderWithChildren(uniforms, children === null || children === void 0 ? void 0 : children.map(child => _JsiSkShader.JsiSkShader.fromValue(child)), localMatrix !== undefined ? _JsiSkMatrix.JsiSkMatrix.fromValue(localMatrix) : localMatrix));
  }

  getUniform(index) {
    return this.ref.getUniform(index);
  }

  getUniformCount() {
    return this.ref.getUniformCount();
  }

  getUniformFloatCount() {
    return this.ref.getUniformFloatCount();
  }

  getUniformName(index) {
    return this.ref.getUniformName(index);
  }

}

exports.JsiSkRuntimeEffect = JsiSkRuntimeEffect;
//# sourceMappingURL=JsiSkRuntimeEffect.js.map