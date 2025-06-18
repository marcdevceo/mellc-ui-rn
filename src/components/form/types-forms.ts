import React from "react";
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import {
  backgroundColor,
  borderRadius,
  colorVariants,
  margin,
  padding,
} from "../../theme";
import { getButtonStyle } from "../button/buttonVariants";

export type BaseInputProps = {
  id?: string;
  name?: string;
  label?: string;
  type?: "text" | "password";
  placeholder?: string;
  padding?: keyof typeof padding;
  bg?: keyof typeof backgroundColor;
  radius?: keyof typeof borderRadius;
  className?: object; // for passing style objects
  required?: boolean;

  button?: {
    name: string;
    variant: keyof typeof colorVariants;
  };

  onChange?: (value: string) => void;
  value?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & TextInputProps;

export type BaseFormProps = {
  children?: React.ReactNode;
  fields?: BaseInputProps[];
  title?: string;
  buttonTitle?: string;
  buttonVariant?: keyof typeof getButtonStyle;
  bg?: keyof typeof backgroundColor;
  padding?: keyof typeof padding;
  margin?: keyof typeof margin;
  shadow?: boolean;
  radius?: boolean;
  action?: string;
  className?: object;
};
