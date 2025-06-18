import React from "react";
import { View } from "react-native";
import { backgroundColor, borderRadius, shadow } from "../../theme";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
const BoxView = ({ children, bg = "accent", borderRadius: br, shadow: shadowKey, padding, pt, pb, pl, pr, margin, mt, mb, ml, mr, style, }) => {
    const spacing = getSpacingStyles({
        padding,
        pt,
        pb,
        pl,
        pr,
        margin,
        mt,
        mb,
        ml,
        mr,
    });
    const boxStyles = {
        backgroundColor: backgroundColor[bg],
        borderRadius: br ? borderRadius[br] : undefined,
        ...(shadowKey ? shadow[shadowKey] : {}),
        ...spacing,
        ...style,
    };
    return <View style={boxStyles}>{children}</View>;
};
export default BoxView;
