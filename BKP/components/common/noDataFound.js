import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CSS} from "./gcss";

export default function NoDataFound(props, {navigation}) {
    return (<SafeAreaView style={{marginTop:40}}>
        <Text style={CSS.txtAppColorCentered}>No Data Found!</Text>
    </SafeAreaView>);
}
