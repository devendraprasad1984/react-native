import React from 'react';
import {View, Button} from "react-native";

function FetchLocation(props) {
    return (
        <View>
            <Button title='Where Are You!' onPress={props.onGetLocation}/>
        </View>
    );
}

export default FetchLocation;