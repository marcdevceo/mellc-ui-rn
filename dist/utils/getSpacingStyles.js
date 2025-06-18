import { margin, padding } from "../theme";
export const getSpacingStyles = (props) => {
    const styles = {
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
    return styles;
};
