import {Text, View} from "react-native";
import React from "react";
import {Enum} from "./Config";

const TopAppName = props => {
    let textStyle = {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: Enum.iconColorPurple,
        textDecorationLine: 'underline'
    };
    return (
        <View style={{width: '100%'}}>
            <Text style={textStyle}>BDF - Business Disability Forum</Text>
        </View>
    );
}

export default TopAppName;
