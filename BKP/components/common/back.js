import React from 'react';
import {View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Enum} from "./Config";

const Back = props => {
    let {onClick} = props;
    let iconStyle = {
        height: 40,
        width: 40,
        marginTop:10,
        borderRadius: 20,
        backgroundColor: props.appColor || Enum.iconColorOrange,
        color: Enum.iconColorWhite,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 0
    }
    return <View style={iconStyle}>
        <TouchableOpacity>
            <Icon name="close"
                  color={Enum.iconColorWhite}
                  size={Enum.iconSize}
                  onPress={() => onClick()}
            />
        </TouchableOpacity>
    </View>
}

export default Back;
