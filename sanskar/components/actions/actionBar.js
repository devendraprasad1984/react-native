import {Linking, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {configFilterByKey, Enum} from "../common/Config";
import {appColor, gcss} from "../common/styles";
import {connect} from "react-redux";
import AppIcon from "../common/AppIcon";

const ActionBar = props => {
    const {config, navigation} = props;
    const [facebook, setfacebookurl] = useState({value: ''});
    const [twitter, settwitterurl] = useState({value: ''});
    const [linkedin, setlinkedinurl] = useState({value: ''});
    const [whatsapp, setwhatsappurl] = useState({value: ''});
    const [logo, setLogo] = useState({value: 'BDF'});
    useEffect(() => {
        setLogo(configFilterByKey(config, Enum.configKeys.logo));
        setfacebookurl(configFilterByKey(config, Enum.configKeys.facebook));
        settwitterurl(configFilterByKey(config, Enum.configKeys.twiter));
        setlinkedinurl(configFilterByKey(config, Enum.configKeys.linkedin));
        setwhatsappurl(configFilterByKey(config, Enum.configKeys.whatsapp));
    }, []);
    const eventsIconClick = () => {
        navigation.navigate(Enum.screenName.events, {...{props}});
    }
    const menuIconClick = () => {
        navigation.navigate(Enum.screenName.userProfile, {...{props}});
    }
    const blogIconClick = () => {
        // navigation.dispatch(NavigationActions.navigate({routeName: Enum.screenName.blogs}))
        // navigate(Enum.screenName.blogs);
        navigation.navigate(Enum.screenName.blogs, {...{props}});
    }
    const color = appColor(props.appColor);
    const logoText = {fontWeight: 'bold', fontSize: 15};
    return (
        <View style={[gcss.actionBar]}>
            <View style={gcss.inrow}>
                <TouchableOpacity onPress={menuIconClick}>
                    <AppIcon name="user-o" onPress={menuIconClick}/>
                    <Text style={[logoText, color]}>{logo.value}</Text>
                </TouchableOpacity>
            </View>
            {facebook.value !== '' && <AppIcon name="facebook" onPress={() => Linking.openURL(facebook.value)}/>}
            {linkedin.value !== '' && <AppIcon name="linkedin" onPress={() => Linking.openURL(linkedin.value)}/>}
            {twitter.value !== '' && <AppIcon name="twitter" onPress={() => Linking.openURL(twitter.value)}/>}
            {whatsapp.value !== '' && <AppIcon name="whatsapp" onPress={() => Linking.openURL(whatsapp.value)}/>}
            <AppIcon name="bell-o" onPress={eventsIconClick}/>
            <AppIcon name="newspaper-o" onPress={blogIconClick}/>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        config: state.appConfig.configObject,
        appColor: state.appConfig.appColor
    }
}
export default connect(mapStateToProps)(ActionBar);



