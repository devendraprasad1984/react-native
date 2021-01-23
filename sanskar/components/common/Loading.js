import {Text, View, Image, ActivityIndicator} from "react-native";
import React from "react";
import {appColor, gcss} from "./styles";
import {connect} from 'react-redux';
import {SubHeading} from "./Heading";

const Loading=props=> {
    let loadingDefaultText=props.text || 'working...';
    let thisColor=props.appColor;
    let color=appColor(thisColor);
    return <View style={{flex: 1, alignItems: 'center', marginTop: 30}}>
        <ActivityIndicator size="large" color={thisColor}/>
        <SubHeading style={[color,{marginTop:20}]} val={loadingDefaultText}/>
    </View>
}
const maps=state=>{
    return{
        appColor:state.appConfig.appColor
    }
}
export default connect(maps)(Loading);
