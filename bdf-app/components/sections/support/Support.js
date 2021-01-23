import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";
import getConfigValues from "../../common/getConfigValues";
import {Enum} from "../../common/Config";
import Back from "../../common/back";
import SupportQueries from './SupportQueries';

const Support = props => {
    const [contactus, setContactus] = useState({value: ''});
    useEffect(() => {
        getConfigValues((conf) => {
            // console.log('calling', conf[0]);
            setContactus(conf[0]);
        }, Enum.configKeys.contactus)
    }, []);
    // let miscinfo = props.navigation.state.params.miscinfo || {};
    // console.log('miscinfo',props.miscinfo);
    return (
        <View style={globalStyles.flexContainer}>
            <Back onClick={() => props.navigation.goBack()}/>
            <Text style={globalStyles.txtPurpleCenter}>Support!</Text>
            <Text>{contactus.value}</Text>
            <SupportQueries/>
        </View>
    );
}

export default Support;
