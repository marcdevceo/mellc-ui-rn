import React from "react";
import { Text, StyleSheet } from "react-native";
import { fontSize, fontWeight, textAlign, textColor } from "../../theme";
const Subtitle = ({ children, align = "left", color = "secondary", size = "subtitle", weight = "semibold", 
//   font = "heading",
italic, style, ...rest }) => {
    return (<Text style={[
            styles.base,
            { fontSize: fontSize[size] },
            { fontWeight: fontWeight[weight] },
            // fontTokens[font],
            { color: textColor[color] },
            { textAlign: textAlign[align] },
            italic && styles.italic,
            style,
        ]} {...rest}>
      {children}
    </Text>);
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
