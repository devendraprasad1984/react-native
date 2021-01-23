import {View} from 'react-native';
import React from 'react';
import Adrotator from './header/ads/adrotator';
import Category from './sections/categories/Category';
import {globalStyles} from "./common/GlobalStyle";
import ActionBar from "./header/actions/actionBar";

export default function HOME({navigation}) {
    let thisStyle=[
        {display: 'flex', flexDirection: 'column', flex: 1}
        ,globalStyles.safeAreaContainer
    ];
    return (
        <View style={thisStyle}>
            <View style={[globalStyles.flexColumn,{flex:0.3}]}><ActionBar navigation={navigation}/></View>
            <View style={[globalStyles.flexColumn,{flex:2}]}><Adrotator navigation={navigation}/></View>
            <View style={[globalStyles.flexColumn,{flex:3}]}><Category navigation={navigation}/></View>
        </View>
    );
}
