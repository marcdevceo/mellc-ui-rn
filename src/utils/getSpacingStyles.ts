import { margin, padding } from "../theme";

export const getSpacingStyles = (props: {
  margin?: keyof typeof margin;
  mt?: keyof typeof margin;
  mb?: keyof typeof margin;
  ml?: keyof typeof margin;
  mr?: keyof typeof margin;

  padding?: keyof typeof padding;
  pt?: keyof typeof padding;
  pb?: keyof typeof padding;
  pl?: keyof typeof padding;
  pr?: keyof typeof padding;
}) => {
  return {
    ...(props.margin && { margin: margin[props.margin] }),
    ...(props.mt && { marginTop: margin[props.mt] }),
    ...(props.mb && { marginBottom: margin[props.mb] }),
    ...(props.ml && { marginLeft: margin[props.ml] }),
    ...(props.mr && { marginRight: margin[props.mr] }),

    ...(props.padding && { padding: padding[props.padding] }),
    ...(props.pt && { paddingTop: padding[props.pt] }),
    ...(props.pb && { paddingBottom: padding[props.pb] }),
    ...(props.pl && { paddingLeft: padding[props.pl] }),
    ...(props.pr && { paddingRight: padding[props.pr] }),
  };
};
