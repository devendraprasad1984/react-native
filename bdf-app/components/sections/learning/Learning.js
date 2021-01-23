import React from 'react';
import {Text, View, Button} from 'react-native';
import {globalStyles} from "../../common/GlobalStyle";

const Learning = props => {
    let params = props.navigation.state.params;
    console.log('miscinfo',params);
    return (
        <View style={globalStyles.BottomNavContainer}>
            <Text>Learning! </Text>
            <View>
                <Button onPress={()=>props.navigation.goBack()} title={'Back'} />
            </View>
        </View>
    );
}

export default Learning;
