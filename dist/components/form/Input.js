import React from "react";
import { View, Text, TextInput } from "react-native";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
import { backgroundColor, borderRadius } from "../../theme";
const Input = ({ id, name, label, placeholder, required = false, type = "text", padding = "md", bg = "white", radius = "md", className, ...rest }) => {
    const spacing = getSpacingStyles({ padding });
    return (<View style={{ width: "100%", marginBottom: 12 }}>
      {label && (<Text style={{ marginBottom: 6, fontWeight: "500" }}>{label}</Text>)}

      <TextInput placeholder={placeholder} autoCapitalize="none" secureTextEntry={type === "password"} style={[
            {
                width: "100%",
                borderWidth: 1,
                borderColor: "#ccc",
            },
            { backgroundColor: backgroundColor[bg] },
            { borderRadius: borderRadius[radius] },
            spacing,
            className,
        ]} {...rest}/>
    </View>);
};
export default Input;
