import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";

const Media = props => {
    // let miscinfo = props.navigation.state.params.miscinfo || {};
    // console.log('miscinfo', miscinfo);
    return (
        <View style={globalStyles.BottomNavContainer}>
            <Text>Mediaaaaaaa </Text>
            <View>
                <Button onPress={() => props.navigation.goBack()} title={'Back'}/>
            </View>
        </View>
    );
}


export default Media;
