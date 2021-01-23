import React from 'react';
import {Text,View} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import {bgColor, gcss} from "./styles";
import AppIcon from "./AppIcon";

export const AppButton = props => {
    const {onPress, title, width, icon}=props;
    let bg = bgColor();
    return <TouchableOpacity onPress={onPress} style={[gcss.appButtonContainer, bg, {width: width}]}>
        <View style={gcss.inrow}>
            {icon !== undefined ? <AppIcon {...props} name={icon}/> : null}
            <Text style={[gcss.appButtonText]}>{title}</Text>
        </View>
    </TouchableOpacity>;
};
