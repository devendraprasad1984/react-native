import React from 'react';
import {Text, View} from 'react-native';
import {gcss} from "../common/styles";
import TopAppName from "../common/topAppName";
import Back from "../common/back";
import {Heading} from "../common/Heading";

const Learning = props => {
    // let params = props.navigation.state.params;
    // console.log('miscinfo',params);
    return (
        <View style={gcss.flexContainer}>
            <TopAppName {...props}/>
            <Heading val={'Learning'}/>
        </View>
    );
}

export default Learning;
