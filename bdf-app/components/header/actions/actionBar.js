import {Text, View, Linking, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Enum} from "../../common/Config";
import {globalStyles} from "../../common/GlobalStyle";
import getConfigValues from "../../common/getConfigValues";

const ActionBar = props => {

    const {navigation} = props;
    const eventsIconClick = () => {
        navigation.navigate(Enum.screenName.events, {});
    }


    const blogIconClick = () => {        
        navigation.navigate(Enum.screenName.blogs, {});
      }

 
        const [facebook, setfacebookurl] = useState({value: ''});
        useEffect(() => {
            getConfigValues((conf) => {
                setfacebookurl(conf[0]);
            }, Enum.configKeys.facebook)
        }, []);


        const [twitter, settwitterurl] = useState({value: ''});
        useEffect(() => {
            getConfigValues((conf) => {
                settwitterurl(conf[0]);
            }, Enum.configKeys.twiter)
        }, []);

        const [linkedin, setlinkedinurl] = useState({value: ''});
        useEffect(() => {
            getConfigValues((conf) => {
                setlinkedinurl(conf[0]);
            }, Enum.configKeys.linkedin)
        }, []);


        const [whatsapp, setwhatsappurl] = useState({value: ''});
        useEffect(() => {
            getConfigValues((conf) => {
                setwhatsappurl(conf[0]);
            }, Enum.configKeys.whatsapp)
        }, []);


    
    return (
        <View style={[globalStyles.floatInRow]}>
            
            <View style={globalStyles.iconView}>
            
                <Text
                style={[{fontWeight: 'bold', fontSize: 20, color: Enum.iconColorOrange}]}>BDF</Text></View>
            <View style={globalStyles.iconView}>
                <Icon name="facebook" color={Enum.iconColorPurple} size={Enum.iconSize}
                                                      onPress={() => Linking.openURL(facebook.value)}/></View>
            <View style={globalStyles.iconView}>
                <Icon name="linkedin" color={Enum.iconColorPurple} size={Enum.iconSize}
                                                      onPress={() => Linking.openURL(linkedin.value)}/></View>
            <View style={globalStyles.iconView}>
                <Icon name="twitter" color={Enum.iconColorPurple} size={Enum.iconSize}
                                                      onPress={() => Linking.openURL(twitter.value)}/></View>
            <View style={globalStyles.iconView}>
                <Icon name="whatsapp" color={Enum.iconColorPurple} size={Enum.iconSize}
                                                      onPress={() => Linking.openURL(whatsapp.value)}/></View>
            <View style={globalStyles.iconView}><Icon name="bell-o" color={Enum.iconColorOrange} size={Enum.iconSize}
                                                      onPress={eventsIconClick}/></View>
            <View style={globalStyles.iconView}><Icon name="newspaper-o" color={Enum.iconColorNavy} size={Enum.iconSize}
                                                      onPress={blogIconClick}/></View>                                          

        </View>
    );
}
export default ActionBar;
