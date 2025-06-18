import React from "react";
import { View } from "react-native";
import { BaseContainerProps } from "./types-container";
import {
  backgroundColor,
  borderRadius,
  flexGrow,
  justifyContent,
  alignItems,
  shadow,
  gap,
} from "../../theme";
import { getSpacingStyles } from "../../utils/getSpacingStyles";

const StackView: React.FC<BaseContainerProps> = ({
  children,
  bg = "accent",
  borderRadius: br,
  flexGrow: fg,
  justify = "start",
  alignItems: ai = "stretch",
  gap: g,
  shadow: shadowKey,
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
  style,
}) => {
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

  const stackStyles = {
    flexDirection: "column",
    backgroundColor: backgroundColor[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    flexGrow: fg ? flexGrow[fg] : undefined,
    justifyContent: justify ? justifyContent[justify] : undefined,
    alignItems: ai ? alignItems[ai] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return (
    <View style={stackStyles}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        const marginBottom =
          index < React.Children.count(children) - 1
            ? gap[g || "none"] || 0
            : 0;
        return <View style={{ marginBottom }}>{child}</View>;
      })}
    </View>
  );
};

export default StackView;
