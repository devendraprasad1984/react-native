import React from 'react';
import {ImageBackground, View, Text, Button} from "react-native";
import {Styles} from "./Styles";
import {enums} from "../common/enums";

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground style={Styles.welcomeBackground} source={require('../assets/dp.png')}>
            <View style={[Styles.opac, Styles.bgpurple]}>
                <Button style={[Styles.btnText]} title={enums.LOGIN.name} onPress={() => navigation.navigate(enums.LOGIN.name, {global: []})}/>
            </View>
            <View style={[Styles.opac, Styles.bgorange]}>
                <Button style={[Styles.btnText]}  title={enums.SIGNUP.name} onPress={() => navigation.navigate(enums.SIGNUP.name, {global: []})}/>
            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;
