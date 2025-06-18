import React from "react";
import { View } from "react-native";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
import Button from "../button/Button";
import Input from "./Input";
import { BaseFormProps, BaseInputProps } from "./types-forms";
import {
  backgroundColor,
  borderRadius,
  shadow as shadowStyles,
  padding as paddingTokens,
  margin as marginTokens,
} from "../../theme";
import { Subtitle } from "../typography";

const Form: React.FC<BaseFormProps> = ({
  children,
  fields = [] as BaseInputProps[],
  title,
  buttonTitle,
  buttonVariant = "primary",
  bg = "accent",
  padding = "lg",
  margin = "none",
  shadow: useShadow = false,
  radius = false,
  className,
  ...rest
}) => {
  const spacingStyles = getSpacingStyles({
    padding: padding as keyof typeof paddingTokens,
    margin: margin as keyof typeof marginTokens,
  });
  const background = { backgroundColor: backgroundColor[bg] };
  const border = radius ? { borderRadius: borderRadius["lg"] } : {};
  const elevation = useShadow ? shadowStyles["md"] : {};

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

      {fields.map((field, index) => (
        <Input key={field.name ?? index.toString()} {...field} />
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
