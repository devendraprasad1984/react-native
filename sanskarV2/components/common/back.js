import React from 'react';
import {View,TouchableOpacity} from "react-native";
import {Enum} from "./Config";
import AppIcon from "./AppIcon";

const Back = props => {
    const {onClick} = props;
    const iconStyle = {
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 0
    }
    return <View style={iconStyle}>
        <TouchableOpacity onPress={onClick}><AppIcon name={'close'} onPress={onClick}/></TouchableOpacity>
    </View>
}

export default Back;
