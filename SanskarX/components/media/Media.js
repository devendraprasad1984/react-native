import React from 'react';
import {View} from 'react-native';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import {Heading} from "../common/Heading";

const Media = props => {
    return <View style={gcss.flexContainer}>
        <TopAppName {...props}/>
        <Heading val={'Media'}/>
    </View>
}


export default Media;
