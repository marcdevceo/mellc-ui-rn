import { ViewStyle, TextStyle } from "react-native";
import { borderRadius, colorVariants } from "../../theme";
export declare const getButtonStyle: (variant: keyof typeof colorVariants, radius: keyof typeof borderRadius, disabled?: boolean) => {
    container: ViewStyle;
    text: TextStyle;
};
