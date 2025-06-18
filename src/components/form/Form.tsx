import React from "react";
import { View } from "react-native";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
import Button from "../button/Button";
import Input from "./Input";
import { BaseFormProps } from "./types-forms";
import { backgroundColor, borderRadius } from "../../theme";
import { Subtitle } from "../typography";

const Form: React.FC<BaseFormProps> = ({
  children,
  fields = [],
  title,
  buttonTitle,
  buttonVariant = "primary",
  bg = "accent",
  padding = "lg",
  margin = "none",
  shadow = false,
  radius = false,
  className,
  ...rest
}) => {
  const spacingStyles = getSpacingStyles({ padding, margin });
  const background = backgroundColor[bg];
  const border = radius ? borderRadius["lg"] : {};
  const elevation = shadow ? shadow["md"] : {};

  return (
    <View
      style={[
        { width: "100%" },
        background,
        border,
        elevation,
        spacingStyles,
        className,
      ]}
      {...rest}
    >
      {title && <Subtitle align="center">{title}</Subtitle>}

      {fields.map((field) => (
        <Input key={field.name} {...field} />
      ))}

      {children}

      {buttonTitle && (
        <Button type="submit" variant={buttonVariant}>
          {buttonTitle}
        </Button>
      )}
    </View>
  );
};

export default Form;
