import { HostObject } from "./Host";
import { JsiSkMatrix } from "./JsiSkMatrix";
import { JsiSkShader } from "./JsiSkShader";
export class JsiSkRuntimeEffect extends HostObject {
  constructor(CanvasKit, ref) {
    super(CanvasKit, ref, "RuntimeEffect");
  }

  makeShader(uniforms, localMatrix) {
    return new JsiSkShader(this.CanvasKit, this.ref.makeShader(uniforms, localMatrix !== undefined ? JsiSkMatrix.fromValue(localMatrix) : localMatrix));
  }

  makeShaderWithChildren(uniforms, children, localMatrix) {
    return new JsiSkShader(this.CanvasKit, this.ref.makeShaderWithChildren(uniforms, children === null || children === void 0 ? void 0 : children.map(child => JsiSkShader.fromValue(child)), localMatrix !== undefined ? JsiSkMatrix.fromValue(localMatrix) : localMatrix));
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
//# sourceMappingURL=JsiSkRuntimeEffect.js.map