import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";

const Settings = props => {
    // let miscinfo = props.navigation.state.params.miscinfo || {};
    // console.log('miscinfo',props.miscinfo);
    return (
        <View style={globalStyles.BottomNavContainer}>
            <Text>Settings </Text>
            <View>
                <Button onPress={()=>props.navigation.goBack()} title={'Back'} />
            </View>
        </View>
    );
}

export default Settings;
