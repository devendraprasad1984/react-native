import {Alert} from "react-native";

export const GOClick=()=>{
    Alert.alert('Go','Going Away',[
        {text:'Ok',onPress:()=>Alert.alert('OK is clicked')}
        ,{text:'Cancel',onPress:()=>Alert.alert('Cancel is clicked')}
    ])
}


export const GOImageClick=()=>{
    Alert.alert('Go Image','This is the image',[
        {text:'Ok',onPress:()=>Alert.alert('OK is clicked')}
        ,{text:'Cancel',onPress:()=>Alert.alert('Cancel is clicked')}
    ])
}
