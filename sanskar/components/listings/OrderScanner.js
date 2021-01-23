import {View} from 'react-native';
import React from 'react';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading} from "../common/Heading";
import AppCamera from "../common/Camera";


export default function OrderScanner(props) {
    const params = props.navigation.state.params;
    const {item, color, bg} = params;
    const {config,dealerInfo}=params.props;
    const {category} = item;

    return <View style={[gcss.flexContainer]}>
        <TopAppName {...props}/>
        <Heading val={category+' - Scan Your Order'}/>
        <AppCamera/>
    </View>;
}
