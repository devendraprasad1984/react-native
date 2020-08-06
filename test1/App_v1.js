import React from "react";
import {Text, SafeAreaView, View, StyleSheet} from "react-native";
import ImagePrep from './components/ImagePrep';
import Separator from './components/Separator';
import {Styles} from './components/Styles';
import {HomeClick} from './common/Home';
import {GOClick, GOImageClick} from './common/GO';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";


export default function App() {
    // console.log(useDimensions(), useDeviceOrientation());
    const {landscape} = useDeviceOrientation();

    const viewAdjustments = StyleSheet.create({
        adjust: {
            width: '100%',
            height: landscape ? '100%' : '100%'
        }
    })
    return (
        <SafeAreaView style={[Styles.safeContainer, viewAdjustments.adjust]}>
            <View style={[Styles.view, {flex: 0.2, backgroundColor: 'dodgerblue'}]}>
                <Text style={Styles.mainTitle}>Welcome To DP's World</Text>
            </View>

            <View style={[Styles.view, {flex: 1, backgroundColor: 'orange'}]}>
                <ImagePrep obj={require('./assets/dp.png')} imgClick={() => undefined}
                           title={'Hello DP, the web developer'} btnTitle={'Home'} btnClick={HomeClick}/>
            </View>

            <View style={[Styles.view, {flex: 1, backgroundColor: 'tomato'}]}>
                <ImagePrep obj={{uri: "https://picsum.photos/200/300", width: 100, height: 100}}
                           imgClick={GOImageClick} title={'looks good'} btnTitle={'Go'} btnClick={GOClick}/>
            </View>
        </SafeAreaView>
    );
}
