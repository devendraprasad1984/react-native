import {Image, SafeAreaView, Text, View} from 'react-native';
import {appColor, CSS} from './common/gcss';
import React, {useEffect, useState} from 'react';
import {Enum} from "./common/Config";
import {connect} from 'react-redux'
import Loading from "./common/Loading";
import {FontAwesome as Icon} from '@expo/vector-icons';

const Splash = props => {
    const {config} = props;
    const [conf,setConf]=useState([])
    const [txt,setTxt]=useState('BDF\nNWB\nIndia')
    const [img,setImg]=useState('https://img.icons8.com/officel/2x/home.png')
    const moveNext = () => props.navigation.navigate(Enum.screenName.home);
    useEffect(()=>{
        // console.log('splash config', config)
        setConf(config)
        setTxt(config[Enum.configKeys.splashtxt])
        setImg(config[Enum.configKeys.splashimg])
    },[config])

    if(conf.length===0 || conf===undefined || txt===undefined) return <Loading/>

    const splittext = txt.split('\n')
    let color = appColor();
    return <SafeAreaView style={{flex: 1, backgroundColor: Enum.iconColorWhite}}>
        <View style={{flex: 1}}>
            <Image source={{uri: img}} style={{height: '100%', width: '100%', marginTop: 20}}/>
            {/*<Text onPress={moveNext}>Next</Text>*/}
            <Icon name='arrow-circle-right' color={Enum.iconColorPurple} size={Enum.iconSize+30} onPress={moveNext} style={{textAlign:'right'}}/>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', margin: 20}}>
            <Text style={[CSS.splashFirstTxt, color]}>{splittext[0]}</Text>
            <Text style={CSS.splashSecondTxt}>{splittext[1]}</Text>
            <Text style={CSS.splashThirdTxt}>{splittext[2]}</Text>
        </View>
    </SafeAreaView>
}
const mapx = state => {
    return {
        config: state.config.config,
        color: state.config.color
    }
}
export default connect(mapx)(Splash)
// export default Splash
