import {View} from "react-native";
import {gcss} from "./styles";
import {WebView} from 'react-native-webview';

export const AppWebView=props=>{
    return (
        <View style={gcss.flexContainer}>
            <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: props.uri }}
            />
        </View>
    );
}
