import {SafeAreaView, Text} from "react-native";
import React, {useState} from "react";
import {appColor, CSS} from "./gcss";
import Back from "./back";
// import {ConfigContext} from "./Controllers";
import {Enum} from "./Config";

const TopAppName = props => {
    // const [config] = React.useContext(ConfigContext)
    const color=appColor()
    const [appText, setAppText] = useState({value: 'Business Disability Forum'});
    let clickFuncToCall = undefined;
    clickFuncToCall = props.clicked;
    if (clickFuncToCall === undefined) clickFuncToCall = props.navigation.goBack;
    return (
        <SafeAreaView style={{width: '100%'}}>
            {/*<View style={{marginBottom: 20}}><ActionBar {...props}/></View>*/}
            <Text style={[CSS.topAppName, color]}>{appText.value}</Text>
            <Back onClick={() => clickFuncToCall()} {...props}/>
        </SafeAreaView>
    );
}
export default TopAppName;

