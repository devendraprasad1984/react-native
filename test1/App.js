import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {Styles} from './components/Styles';
import {useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from "./components/WelcomeScreen";
import FetchLocation from "./components/fetchLocation";


export default function App() {
    // console.log(useDimensions(), useDeviceOrientation());
    const {landscape} = useDeviceOrientation();

    const viewAdjustments = StyleSheet.create({
        adjust: {
            width: '100%',
            height: landscape ? '100%' : '100%'
        }
    })

    const getUserLocation=()=>{
        navigator.geolocation.getCurrentPosition(position=>{
            console.log(position)
        },err=>{
            console.err(err)
        })
    }

    return (
        <SafeAreaView style={[Styles.safeContainer, viewAdjustments.adjust]}>
            <Text style={Styles.mainTitle}>Welcome DP's APP</Text>
            <FetchLocation onGetLocation={getUserLocation}/>
            <WelcomeScreen/>
        </SafeAreaView>
    );
}
