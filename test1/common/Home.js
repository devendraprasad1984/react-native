import {Alert} from "react-native";

export const HomeClick=()=>{
    Alert.alert('HOME','Cools Home',[
        {text:'Yes',onPress:()=>Alert.alert('YES is clicked')}
        ,{text:'No',onPress:()=>Alert.alert('NO is clicked')}
    ])
}
