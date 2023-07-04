import React from "react";
import type { RefObject, ReactNode, ComponentProps } from "react";
import ReactReconciler from "react-reconciler";
import { SkiaView } from "../views";
import type { TouchHandler } from "../views";
import { Container } from "./Container";
export declare const skiaReconciler: ReactReconciler.Reconciler<Container, import("..").Node<unknown>, import("..").Node<unknown>, import("..").Node<unknown>, import("..").Node<unknown>>;
export declare const useCanvasRef: () => React.RefObject<SkiaView>;
export interface CanvasProps extends ComponentProps<typeof SkiaView> {
    ref?: RefObject<SkiaView>;
    children: ReactNode;
    onTouch?: TouchHandler;
}
export declare const Canvas: React.ForwardRefExoticComponent<Pick<CanvasProps, "style" | "children" | "mode" | "debug" | "onDraw" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onTouch"> & React.RefAttributes<SkiaView>>;
