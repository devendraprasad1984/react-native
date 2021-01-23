import {Text, View,TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import {configFilterByKey, Enum} from "./Config";
import {connect} from "react-redux";
import {appColor, gcss} from "./styles";
import Back from "./back";

const TopAppName = props => {
    const [appText, setAppText] = useState({value: ''});
    const {config, pageColor} = props;
    useEffect(() => {
            let xObj = configFilterByKey(config, Enum.configKeys.appText);
            setAppText(xObj);
        }, []);
    let textStyle = {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        textDecorationLine: 'underline'
    };
    let color=appColor(props.appColor);
    let clickFuncToCall=undefined;
    clickFuncToCall=props.clicked;
    if(clickFuncToCall===undefined) clickFuncToCall=props.navigation.goBack;
    return (
        <View style={[gcss.xrow,{marginTop:20}]}>
            <Text style={[textStyle, color]}>{appText.value}</Text>
            <Back onClick={clickFuncToCall} {...props}/>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        config: state.appConfig.configObject
        ,appColor: state.appConfig.appColor
    }
}
export default connect(mapStateToProps)(TopAppName);
