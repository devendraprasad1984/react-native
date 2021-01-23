import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Enum} from "./Config";
import {globalStyles} from "./GlobalStyle";

const Back = props => {
    let {onClick} = props;
    return (<View>
            <Icon name="close" color={'gray'} size={Enum.iconSize} onPress={() => onClick()}/>
        </View>
    );
}

export default Back;
