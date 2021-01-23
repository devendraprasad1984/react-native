import React from "react";
import {Image, ImageBackground} from "react-native";
import {gcss} from "./styles";
import Loading from "./Loading";

export const AppImage = props => {
    // const [loading, setLoading] = React.useState(false);
    const {uri, style, med} = props;
    let thisStyle = style;
    const pad = {margin: 4, padding: 4};
    if (style === undefined) thisStyle = gcss.fitImage;

    return med ? <Image source={uri} style={[thisStyle, med, pad]}/>
        : <Image source={{uri: uri}} style={[thisStyle, pad]}/>;
}
