import type { HostComponent, ViewProps } from "react-native";
import type { WithDefault } from "react-native/Libraries/Types/CodegenTypes";
declare type DrawMode = "continuous" | "default";
export interface NativeProps extends ViewProps {
    nativeID: string;
    debug?: boolean;
    mode?: WithDefault<DrawMode, "default">;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
