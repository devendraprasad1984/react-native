import React from "react";
import {Image, ImageBackground} from "react-native";
import {gcss} from "./styles";
import Loading from "./Loading";

export const AppImage = props => {
    // const [loading, setLoading] = React.useState(false);
    const {uri, style, med,click} = props;
    let thisStyle = style;
    let xclick=click;
    const pad = {margin: 4, padding: 4};
    if (style === undefined) thisStyle = gcss.fitImage;
    if (click === undefined) xclick = ()=>{};

    return med ? <Image source={uri} style={[thisStyle, med, pad]} onPress={xclick}/>
        : <Image source={{uri: uri}} style={[thisStyle, pad]} onPress={xclick}/>;
}
