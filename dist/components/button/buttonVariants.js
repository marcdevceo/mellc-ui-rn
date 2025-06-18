import { borderRadius, colorVariants, fontWeight, state } from "../../theme";
export const getButtonStyle = (variant, radius, disabled = false) => {
    const { backgroundColor, textColor, borderColor } = colorVariants[variant];
    const styles = {
        container: {
            backgroundColor: backgroundColor,
            borderRadius: borderRadius[radius] || borderRadius.sm,
            borderWidth: borderColor ? 1 : 0,
            borderColor: borderColor || "transparent",
            paddingVertical: 12,
            paddingHorizontal: 16,
            alignItems: "center",
            justifyContent: "center",
            ...(disabled ? state.disabled : {}),
        },
        text: {
            color: textColor,
            fontWeight: fontWeight.semibold,
            fontSize: 16,
        },
    };
    return styles;
};
