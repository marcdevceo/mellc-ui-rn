import React from "react";
import { View } from "react-native";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
import Button from "../button/Button";
import Input from "./Input";
import { backgroundColor, borderRadius, shadow as shadowStyles, } from "../../theme";
import { Subtitle } from "../typography";
const Form = ({ children, fields = [], title, buttonTitle, buttonVariant = "primary", bg = "accent", padding = "lg", margin = "none", shadow: useShadow = false, radius = false, className, ...rest }) => {
    const spacingStyles = getSpacingStyles({
        padding: padding,
        margin: margin,
    });
    const background = { backgroundColor: backgroundColor[bg] };
    const border = radius ? { borderRadius: borderRadius["lg"] } : {};
    const elevation = useShadow ? shadowStyles["md"] : {};
    return (<View style={[
            { width: "100%" },
            background,
            border,
            elevation,
            spacingStyles,
            className,
        ]} {...rest}>
      {title && <Subtitle align="center">{title}</Subtitle>}

      {fields.map((field, index) => (<Input key={field.name ?? index.toString()} {...field}/>))}

      {children}

      {buttonTitle && (<Button variant={buttonVariant} label={buttonTitle}/>)}
    </View>);
};
export default Form;
