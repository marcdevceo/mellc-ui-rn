import React from "react";
import { View, Text, Image } from "react-native";
import { padding, margin, maxWidth, fontSize, fontWeight, textAlign, backgroundColor, textColor, overflow, } from "../../theme";
const Footer = ({ children, companyName, logo, bg = "primary", fontSize: fontSizeKey = "sm", fontWeight: fontWeightKey = "medium", padding: paddingKey = "md", margin: marginKey, mt, mb, mx, my, pt, pb, px, py, textAlign: textAlignKey = "center", maxWidth: maxWidthKey, overflow: overflowKey, }) => {
    return (<View style={[
            {
                backgroundColor: backgroundColor[bg],
                padding: padding[paddingKey],
                overflow: overflowKey ? overflow[overflowKey] : undefined,
            },
            pt && { paddingTop: padding[pt] },
            pb && { paddingBottom: padding[pb] },
            px && { paddingHorizontal: padding[px] },
            py && { paddingVertical: padding[py] },
            marginKey && { margin: margin[marginKey] },
            mt && { marginTop: margin[mt] },
            mb && { marginBottom: margin[mb] },
            mx && { marginHorizontal: margin[mx] },
            my && { marginVertical: margin[my] },
            maxWidthKey && { maxWidth: maxWidth[maxWidthKey] },
        ]}>
      {logo && (<Image source={{ uri: logo }} style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 8,
            }} resizeMode="contain"/>)}

        {companyName && (<Text style={{
                fontSize: fontSize[fontSizeKey],
                fontWeight: fontWeight[fontWeightKey],
                color: textColor.primary,
                textAlign: textAlign[textAlignKey],
                marginBottom: 4,
            }}>
          {companyName}
        </Text>)}

        {children && (<Text style={{
                fontSize: fontSize[fontSizeKey],
                color: textColor.secondary,
                textAlign: textAlign[textAlignKey],
            }}>
          {children}
        </Text>)}
    </View>);
};
export default Footer;
