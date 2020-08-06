import React from "react";
import {Alert, SafeAreaView, View} from "react-native";
import ImagePrep from './components/ImagePrep';
import Separator from './components/Separator';
import {Styles} from './components/Styles';
import {HomeClick} from './common/Home';
import {GOClick} from './common/GO';

export default function App() {
    return (
        <SafeAreaView style={Styles.container}>
            <View>
                <ImagePrep obj={require('./assets/dp.png')} imgClick={() => {
                }}  title={'Hello DP, the web developer'}  btnTitle={'Home'} btnClick={HomeClick}/>
            </View>
            <Separator/>
            <View>
                <ImagePrep obj={{uri: "https://picsum.photos/200/300", width: 200, height: 200}} imgClick={() => Alert.alert('image on click trigger')} title={'looks good'} btnTitle={'Go'} btnClick={GOClick}/>
            </View>
        </SafeAreaView>
    );
}
