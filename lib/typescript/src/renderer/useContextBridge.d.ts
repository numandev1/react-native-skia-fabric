import React from "react";
import type { ReactNode, Context } from "react";
export declare const useContextBridge: (...contexts: Context<any>[]) => ({ children }: {
    children: ReactNode;
}) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
