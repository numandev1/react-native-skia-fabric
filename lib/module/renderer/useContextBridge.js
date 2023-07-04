import React, { useMemo, useContext } from "react";
// useContextBridge() is taken from https://github.com/pmndrs/drei#usecontextbridge
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useContextBridge = function () {
  for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
    contexts[_key] = arguments[_key];
  }

  const values = // eslint-disable-next-line react-hooks/rules-of-hooks
  contexts.map(context => useContext(context));
  return useMemo(() => _ref => {
    let {
      children
    } = _ref;
    return contexts.reduceRight((acc, Context, i) => /*#__PURE__*/React.createElement(Context.Provider, {
      value: values[i],
      children: acc
    }), children);
  }, [contexts, values]);
};
//# sourceMappingURL=useContextBridge.js.map