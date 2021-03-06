import {Video} from "expo-av";
import React from "react";
import {View} from "react-native";


export const AppVideo=props=>{
    return(
        <View>
        <Video
            source={{uri: props.uri}}
            rate={1.0}
            volume={1}
            isMuted={true}
            resizeMode="cover"
            shouldPlay={true}
            isLooping={true}
            style={{width: 500, height: 320}}
        />
        </View>
    );
}
