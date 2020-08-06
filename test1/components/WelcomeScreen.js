import React from 'react';
import {ImageBackground, View, Text} from "react-native";
import {Styles} from "./Styles";

function WelcomeScreen() {
    return (
        <ImageBackground style={Styles.welcomeBackground} source={require('../assets/dp.png')}>
            <View style={[Styles.loginButton, Styles.center, Styles.opac]}><Text style={Styles.btnText}>Login</Text></View>
            <View style={[Styles.registerButton, Styles.center, Styles.opac]}><Text style={Styles.btnText}>Signup</Text></View>
        </ImageBackground>
    );
}

export default WelcomeScreen;
