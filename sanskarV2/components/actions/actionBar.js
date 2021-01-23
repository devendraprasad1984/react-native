import {View} from 'react-native';
import React, {useState} from 'react';
import {Enum} from "../common/Config";
import {appColor, gcss} from "../common/styles";
import AppIcon from "../common/AppIcon";

const ActionBar = props => {
    const {navigation} = props;
    const {params} = navigation.state;
    // const [facebook, setfacebookurl] = useState({value: ''});
    // const [twitter, settwitterurl] = useState({value: ''});
    // const [linkedin, setlinkedinurl] = useState({value: ''});
    // const [whatsapp, setwhatsappurl] = useState({value: ''});
    const [logo, setLogo] = useState({value: 'XX'});
    const menuIconClick = () => {
        navigation.navigate(Enum.screenName.userProfile, {...props});
    }
    const color = appColor(props.appColor);
    return (
        <View style={[gcss.top]}>
            <View style={gcss.inrow}>
                <AppIcon name="user-o" onPress={menuIconClick}/>
            </View>
            {/*{facebook.value !== '' && <AppIcon name="facebook" onPress={() => Linking.openURL(facebook.value)}/>}*/}
            {/*{linkedin.value !== '' && <AppIcon name="linkedin" onPress={() => Linking.openURL(linkedin.value)}/>}*/}
            {/*{twitter.value !== '' && <AppIcon name="twitter" onPress={() => Linking.openURL(twitter.value)}/>}*/}
            {/*{whatsapp.value !== '' && <AppIcon name="whatsapp" onPress={() => Linking.openURL(whatsapp.value)}/>}*/}
        </View>
    );
}
export default ActionBar;



