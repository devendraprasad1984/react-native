import React from 'react';
import {Text, View} from 'react-native';
import {CSS} from "../../common/gcss";
import TopAppName from "../../common/topAppName";
import Back from "../../common/back";

const Learning = props => {
    // let params = props.navigation.state.params;
    // console.log('miscinfo',params);
    return (
        <View style={CSS.flexContainer}>
            <TopAppName {...props}/>
            <Text style={[CSS.txtAppColorCentered]}>Learning...</Text>
        </View>
    );
}

export default Learning;
