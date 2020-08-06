import {Button, Image, Text, TouchableHighlight, View} from "react-native";
import React from "react";
import {Styles} from './Styles';

export default function ImagePrep (props) {
    const {btnClick,imgClick,obj,title,btnTitle}=props;

    const handleImgClick = () => {
        if (typeof imgClick !== "undefined")
            imgClick();
    }
    const handleBtnClick = () => {
        if (typeof btnClick !== "undefined")
            btnClick();
    }
    return (
        <TouchableHighlight onPress={handleImgClick}>
            <View>
                <Image  style={{height:200, width:200}} source={obj}/>
                <Text style={Styles.title}>{title}</Text>
                <Button title={btnTitle} onPress={handleBtnClick}/>
            </View>
        </TouchableHighlight>
    );
}