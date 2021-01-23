// import Icon from "react-native-vector-icons/FontAwesome";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import Ionicons from "react-native-vector-icons/Ionicons";
import {Enum} from "./Config";
import React from "react";
import {View, TouchableOpacity,Text} from "react-native";


const AppIcon = props => {
    const {name, onPress, mat, size,style,ion} = props;
    const xstyle={padding:2};
    const displayIcon=()=>{
        return <View><Text>icon</Text></View>
        // if(ion) return <View style={[style,xstyle]}><Ionicons name={name} size={size || Enum.iconSize} color={Enum.purple} onPress={onPress}/></View>
        // else if(mat) return <View style={[style,xstyle]}><MaterialCommunityIcons name={name} size={size || Enum.iconSize} color={Enum.purple} onPress={onPress}/></View>
        // else return <View style={[style,xstyle]}><Icon name={name} color={Enum.purple} size={size || Enum.iconSize} onPress={onPress}/></View>
    }
    return <TouchableOpacity onPress={onPress}>{displayIcon()}</TouchableOpacity>;
}


export default AppIcon
