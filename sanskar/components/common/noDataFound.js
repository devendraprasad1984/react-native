import React from 'react';
import {View} from 'react-native';
import {Heading} from "./Heading";

export const NoDataFound=props=>{
    return <View style={{flex:1}}>
        <Heading val={'OOPs....'} icon='glass'/>
    </View>;
}

export default NoDataFound;
