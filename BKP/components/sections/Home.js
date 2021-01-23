import React,{useState, useEffect} from 'react'
import {Text, View} from 'react-native'
import {CSS} from "../common/gcss";
import Category from "./categories/Category";
import ActionBar from "../header/actions/actionBar";

function Home(props) {
    const {navigation, route} = props
    // const {config} = route.params;
    return (
        <View style={CSS.container}>
            <ActionBar navigation={navigation}/>
            <Category navigation={navigation}/>
        </View>
    )
}

export default Home
