import {Text,View} from "react-native";
import React from "react";
import {globalStyles} from "./GlobalStyle";


export default function Loading(props) {
    return <View style={{flex:1}}>
        <Text style={globalStyles.txtPurpleCenter}>
            {props.text}
        </Text>
    </View>;
}
