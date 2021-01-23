import {Linking, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesome} from '@expo/vector-icons';
import {CSS} from "../../common/gcss";
import {Enum} from "../../common/Config";
import {connect} from "react-redux";

const ActionBar = props => {
    const {config, navigation} = props;
    const [facebook, setfacebookurl] = useState('');
    const [twitter, settwitterurl] = useState('');
    const [linkedin, setlinkedinurl] = useState('');
    const [whatsapp, setwhatsappurl] = useState('');
    const [logo, setLogo] = useState('Logo');
    console.log('action', config)
    useEffect(() => {
        setLogo(config[Enum.configKeys.logo]);
        setfacebookurl(config[Enum.configKeys.facebook]);
        settwitterurl(config[Enum.configKeys.twiter]);
        setlinkedinurl(config[Enum.configKeys.linkedin]);
        setwhatsappurl(config[Enum.configKeys.whatsapp]);
    }, []);
    const eventsIconClick = () => {
        navigation.navigate(Enum.screenName.events, {config});
    }

    const blogIconClick = () => {
        navigation.navigate(Enum.screenName.blogs, {config});
    }

    const handleNav = (screen) => {
        navigation.navigate(screen, {});
    }
    const displayIcon = (iconname, value, click) => {
        if (value === '' && click === undefined) return null;
        if (click === undefined) return <FontAwesome name={iconname} color={Enum.iconColorPurple} size={Enum.iconSize}
                                                     onPress={() => Linking.openURL(value)}/>
        if (click !== undefined) return <FontAwesome name={iconname} color={Enum.iconColorPurple} size={Enum.iconSize}
                                                     onPress={click}/>
    }
    return (
        <View style={[{backgroundColor: '#cbc0f1', padding: 5}]}>
            <Text style={{fontWeight: 'bold'}}>{logo}</Text>
            <View style={[CSS.floatInRow]}>
                {displayIcon('home', '', () => handleNav(Enum.screenName.home))}
                {displayIcon('facebook', facebook)}
                {displayIcon('linkedin', linkedin)}
                {displayIcon('twitter', twitter)}
                {displayIcon('whatsapp', whatsapp)}
                {displayIcon('bell-o', '', eventsIconClick)}
                {displayIcon('newspaper-o', '', blogIconClick)}
                {displayIcon('support', '', () => handleNav(Enum.screenName.support))}
            </View>
        </View>
    );
}
const mapx = state => {
    return {
        config: state.config.config,
        color: state.config.color
    }
}
export default connect(mapx)(ActionBar);



