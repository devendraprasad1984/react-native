import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {appColor, gcss} from "../common/styles";
import getConfigValues from "../common/getConfigValues";
import {configFilterByKey, Enum} from "../common/Config";
import Back from "../common/back";
import SupportQueries from './SupportQueries';
import {connect} from "react-redux";
import TopAppName from "../common/topAppName";
import {Heading} from "../common/Heading";

const Support = props => {
    const {config} = props;
    const [contactus, setContactus] = useState({value: ''});
    useEffect(() => {
        setContactus(configFilterByKey(config, Enum.configKeys.contactus));
    }, []);
    let color=appColor(props.appColor);
    // console.log('support color', color);
    return (
        <View style={gcss.flexContainer}>
            <TopAppName {...props}/>
            <Heading val={'Contact Us'}/>
            <Text style={[gcss.para,color]}>{contactus.value}</Text>
            <SupportQueries {...props}/>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        config: state.appConfig.configObject
        ,appColor: state.appConfig.appColor
    }
}
export default connect(mapStateToProps)(Support);



