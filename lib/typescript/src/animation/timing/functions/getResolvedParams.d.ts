import type { RequiredAnimationParams, AnimationParams, TimingConfig } from "../../types";
/**
 * Resolves parameters from optional values to a single object
 * @param toOrParams Params or to value
 * @param config timing/spring configuration
 */
export declare const getResolvedParams: (toOrParams: number | AnimationParams, config?: TimingConfig | undefined) => RequiredAnimationParams & Required<TimingConfig>;
