import { ViewStyle } from "react-native";
import { margin, padding } from "../theme";
export declare const getSpacingStyles: (props: {
    margin?: keyof typeof margin;
    mt?: keyof typeof margin;
    mb?: keyof typeof margin;
    ml?: keyof typeof margin;
    mr?: keyof typeof margin;
    padding?: keyof typeof padding;
    pt?: keyof typeof padding;
    pb?: keyof typeof padding;
    pl?: keyof typeof padding;
    pr?: keyof typeof padding;
}) => ViewStyle;
