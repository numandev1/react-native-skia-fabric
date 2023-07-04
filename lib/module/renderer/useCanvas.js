import React, { useContext } from "react";
const CanvasContext = /*#__PURE__*/React.createContext(null);
export const CanvasProvider = CanvasContext.Provider;
export const useCanvas = () => {
  const ctx = useContext(CanvasContext);

  if (!ctx) {
    throw new Error("Canvas context is not available");
  }

  return ctx;
};
//# sourceMappingURL=useCanvas.js.map