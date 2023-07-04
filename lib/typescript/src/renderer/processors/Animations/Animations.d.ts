import type { SkiaSelector, SkiaValue } from "../../../values";
export declare const isValue: (value: unknown) => value is SkiaValue<unknown>;
export declare const isSelector: <T, R>(value: unknown) => value is {
    selector: (v: T) => R;
    value: SkiaValue<T>;
};
export declare const isAnimated: <T>(props: AnimatedProps<T>) => boolean;
export declare type AnimatedProp<T, P = any> = T | SkiaValue<T> | SkiaSelector<T, P>;
export declare type AnimatedProps<T> = {
    [K in keyof T]: AnimatedProp<T[K]>;
};
export declare type SkiaProps<P = {}> = AnimatedProps<P>;
