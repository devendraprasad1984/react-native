import {Text, View, Image, ActivityIndicator} from "react-native";
import React from "react";
import {appColor, CSS} from "./gcss";

const Loading=props=> {
    let loadingDefaultText=props.text || 'loading, plz wait...';
    let thisColor=props.appColor;
    let color=appColor(thisColor);
    return <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
        <ActivityIndicator size="large" color={thisColor}/>
        <Text style={[CSS.txtAppColorCentered, color]}>
            {loadingDefaultText}
        </Text>
    </View>
}
export default Loading;
