import React from 'react';
import {View, Text} from 'react-native';
import {gcss} from "./styles";
import {Enum} from "./Config";
import AppIcon from "./AppIcon";


export const Heading = props => {
    const {style,val,icon}=props;
    return (
        <View style={[style, gcss.inrow]}>
            {icon !== undefined ? <AppIcon {...props} name={icon}/> : null}
            <Text style={[gcss.heading, {color: Enum.black}]}>{val}</Text>
        </View>
    );
}

export const SubHeading = props => {
    const {style,val,icon}=props;
    return (
        <View style={[style, gcss.inrow]}>
            {icon !== undefined ? <AppIcon {...props} name={icon}/> : null}
            <Text style={[gcss.subheading, {color: Enum.darkgray}]}>{val}</Text>
        </View>
    );
}
