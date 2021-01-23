import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {appColor, CSS} from "../../common/gcss";
import {configFilterByKey, Enum} from "../../common/Config";
import SupportQueries from './SupportQueries';
import TopAppName from "../../common/topAppName";

const Support = props => {
    const {config} = props;
    const [contactus, setContactus] = useState({value: ''});
    useEffect(() => {
        setContactus(configFilterByKey(config, Enum.configKeys.contactus));
    }, []);
    let color=appColor(props.appColor);
    // console.log('support color', color);
    return (
        <View style={CSS.flexContainer}>
            <TopAppName {...props}/>
            <Text style={[CSS.txtAppColorCentered, color]}>Support!</Text>
            <Text style={[CSS.para,color]}>{contactus.value}</Text>
            <SupportQueries {...props}/>
        </View>
    );
}

export default Support;



