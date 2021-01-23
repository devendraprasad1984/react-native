import {View} from 'react-native';
import React from 'react';
import {Enum} from "../common/Config";
import {bgColor, gcss} from "../common/styles";
import {AppButton} from "../common/AppButton";


const SimpleNavigation = props => {
    const {navigation} = props;
    const {params}=navigation.state;
    const navtohome = () => navigation.navigate(Enum.screenName.home, {params});
    const signout = () => navigation.navigate(Enum.screenName.splash, {signout: 1, params});
    return <View style={[gcss.bottom,bgColor()]}>
        <View style={[gcss.inrow]}>
            <AppButton onPress={navtohome} title={Enum.screenName.home}/>
            <AppButton onPress={signout} title='signout'/>
        </View>
    </View>
}

export default SimpleNavigation;
