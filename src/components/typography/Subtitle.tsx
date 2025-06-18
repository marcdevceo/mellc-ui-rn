import React from "react";
import { Text, StyleSheet } from "react-native";
import { BaseTextProps } from "./types-typography";
import { fontSize, fontWeight, textAlign, textColor } from "../../theme";

const Subtitle: React.FC<BaseTextProps> = ({
  children,
  align = "left",
  color = "secondary",
  size = "subtitle",
  weight = "semibold",
  //   font = "heading",
  italic,
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.base,
        fontSize[size],
        fontWeight[weight],
        // fontTokens[font],
        textColor[color],
        textAlign[align],
        italic && styles.italic,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
  },
  italic: {
    fontStyle: "italic",
  },
});

export default Subtitle;
