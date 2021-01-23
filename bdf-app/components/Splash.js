import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text} from 'react-native';
import {globalStyles} from './common/GlobalStyle';
import React, {Component, useEffect, useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import getConfigValues from './common/getConfigValues';
import {Enum} from "./common/Config";

const Splash = props => {
    const [splashtext, setsplashtext] = useState({value: ''});
    useEffect(() => {
        getConfigValues((conf) => {
            setsplashtext(conf[0]);
        }, Enum.configKeys.splashtxt)
    }
    , []);

    const [splashimage, setsplashimage] = useState({value: null});
    useEffect(() => {
        getConfigValues((conf) => {
            setsplashimage(conf[0]);
        }, Enum.configKeys.splashimg)
    }
    , []);
    
    const image = splashimage.value;  
    useEffect(() => {
        const timeout = setTimeout(() => {
            props.navigation.navigate(Enum.screenName.bottomnav);
         }, 3000);
       },[]);

    let splittext=splashtext.value.split('\n');
    return ( 
        <ImageBackground
            source={{uri: image}}
            style={{height: null, width: null, flex: 1}}>
            <View>
                 <Text style={globalStyles.Splashfirsttxt}>
                    {splittext[0]}</Text>      
                    <Text style={globalStyles.Splashsecondtxt}>
                        {splittext[1]}
                        </Text>       
            </View>
        </ImageBackground>
    );
}
export default Splash;


