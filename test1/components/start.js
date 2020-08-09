import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Styles} from './Styles';
import {useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from "./WelcomeScreen";


export default function Start({navigation}) {
    // console.log(useDimensions(), useDeviceOrientation());
    const {landscape} = useDeviceOrientation();

    const viewAdjustments = StyleSheet.create({
        adjust: {
            width: '100%',
            height: landscape ? '50%' : '100%'
        }
    })

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
        }, err => {
            console.err(err)
        })
    }
    // console.log(navigation);

    return (
        <View style={[Styles.safeContainer, viewAdjustments.adjust]}>
            {/*<Text style={Styles.mainTitle}>Welcome DP's APP</Text>*/}
            {/*<FetchLocation onGetLocation={getUserLocation}/>*/}
            <WelcomeScreen navigation={navigation}/>
        </View>
    );
}
