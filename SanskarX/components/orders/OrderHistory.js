import React from 'react';
import {Button, Text, View} from 'react-native';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import Back from "../common/back";
import {Heading} from "../common/Heading";

const OrderHistory = props => {
    return <View style={gcss.flexContainer}>
        <TopAppName {...props}/>
        <Heading val={'Order History'}/>
    </View>
}


export default OrderHistory;
