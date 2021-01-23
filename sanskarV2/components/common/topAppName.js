import {SafeAreaView, Text} from "react-native";
import React, {useEffect, useState} from "react";
import {configFilterByKey, Enum} from "./Config";
import {appColor, gcss} from "./styles";
import Back from "./back";

const TopAppName = props => {
    const [appText, setAppText] = useState({value: 'xx'});
    const {config, pageColor} = props;
    useEffect(() => {
        let apptext = configFilterByKey(config, Enum.configKeys.appText);
        setAppText(apptext);
    }, []);
    let textStyle = {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        justifyContent: 'flex-start',
        textDecorationLine: 'underline'
    };
    let color = appColor(props.appColor);
    let clickFuncToCall = undefined;
    clickFuncToCall = props.clicked;
    if (clickFuncToCall === undefined) clickFuncToCall = props.navigation.goBack;
    return (
        <SafeAreaView style={[gcss.xrow, {marginTop: 10}]}>
            <Text style={[textStyle, color]}>{appText.value}</Text>
            <Back onClick={clickFuncToCall} {...props}/>
        </SafeAreaView>
    );
}

export default TopAppName;
