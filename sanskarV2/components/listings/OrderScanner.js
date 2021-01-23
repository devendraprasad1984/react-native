import {SafeAreaView} from 'react-native';
import React from 'react';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading} from "../common/Heading";
import AppCamera from "../common/Camera";


export default function OrderScanner(props) {
    const {params} = props.navigation.state;
    const {item, color, bg,config,dealerInfo} = params;
    const {category} = item;

    return <SafeAreaView style={[gcss.flexContainer, gcss.safeAreaContainer]}>
        <TopAppName {...params} {...props}/>
        <Heading val={category+' - Scan Order Picture'}/>
        <AppCamera/>
    </SafeAreaView>;
}
