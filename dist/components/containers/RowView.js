import React from 'react';
import { View } from 'react-native';
import { backgroundColor, borderRadius, flexGrow, flexWrap, justifyContent, alignItems, shadow } from '../../theme';
import { getSpacingStyles } from '../../utils/getSpacingStyles';
const RowView = ({ children, bg = 'accent', borderRadius: br, flexGrow: fg, flexWrap: fw, justify = 'start', alignItems: ai = 'center', shadow: shadowKey, padding, pt, pb, pl, pr, margin, mt, mb, ml, mr, style, }) => {
    const spacing = getSpacingStyles({ padding, pt, pb, pl, pr, margin, mt, mb, ml, mr });
    const rowStyles = {
        flexDirection: 'row',
        backgroundColor: backgroundColor[bg],
        borderRadius: br ? borderRadius[br] : undefined,
        flexGrow: fg ? flexGrow[fg] : undefined,
        flexWrap: fw ? flexWrap[fw] : undefined,
        justifyContent: justify ? justifyContent[justify] : undefined,
        alignItems: ai ? alignItems[ai] : undefined,
        ...(shadowKey ? shadow[shadowKey] : {}),
        ...spacing,
        ...style,
    };
    return <View style={rowStyles}>{children}</View>;
};
export default RowView;
