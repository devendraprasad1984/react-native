import React from 'react';
import {Button, Text, View} from 'react-native';
import {CSS} from "../../common/gcss";
import TopAppName from "../../common/topAppName";
import Back from "../../common/back";

const Media = props => {
    return <View style={CSS.flexContainer}>
        <TopAppName {...props}/>
        <Text style={[CSS.txtAppColorCentered]}>Media...</Text>
    </View>
}


export default Media;
