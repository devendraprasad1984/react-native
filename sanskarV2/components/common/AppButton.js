import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import {bgColor, gcss} from "./styles";
import AppIcon from "./AppIcon";

export const AppButton = props => {
    const {onPress, title, width, icon, style}=props;
    let bg = bgColor();
    return <TouchableOpacity onPress={onPress} style={[gcss.appButtonContainer, bg, {width: width}]}>
        <View style={gcss.inrow}>
            {icon !== undefined ? <AppIcon {...props} name={icon}/> : null}
            <Text style={[gcss.appButtonText, style]}>{title}</Text>
        </View>
    </TouchableOpacity>;
};
