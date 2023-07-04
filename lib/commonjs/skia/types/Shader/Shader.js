"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processUniforms = exports.isShader = void 0;

const isShader = obj => obj !== null && obj.__typename__ === "Shader";

exports.isShader = isShader;

const isVector = obj => // We have an issue to check property existence on JSI backed instances
// eslint-disable-next-line @typescript-eslint/no-explicit-any
obj.x !== undefined && obj.y !== undefined;

const processValue = value => {
  if (isVector(value)) {
    return [value.x, value.y];
  }

  return value;
};

const processUniforms = (source, uniforms, builder) => {
  const processed = new Array(source.getUniformCount()).fill(0).flatMap((_, i) => {
    const name = source.getUniformName(i);
    const value = uniforms[name];

    if (value === undefined) {
      throw new Error(`No value specified for uniform ${name}`);
    }

    const result = Array.isArray(value) ? value.flatMap(processValue) : processValue(value);
    builder === null || builder === void 0 ? void 0 : builder.setUniform(name, typeof result === "number" ? [result] : result);
    return result;
  });
  const names = Object.keys(uniforms);

  if (names.length > source.getUniformCount()) {
    const usedUniforms = new Array(source.getUniformCount()).fill(0).map((_, i) => source.getUniformName(i));
    const unusedUniform = names.map(name => {
      if (usedUniforms.indexOf(name) === -1) {
        return name;
      }

      return null;
    }).filter(n => n !== null);
    console.warn("Unused uniforms were provided: " + unusedUniform.join(", "));
  }

  return processed;
};

exports.processUniforms = processUniforms;
//# sourceMappingURL=Shader.js.map