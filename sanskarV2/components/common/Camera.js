import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {AppButton} from "./AppButton";
import {gcss} from "./styles";

export default function AppCamera(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const flip = () => {
        setType(
            type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    }
    return (
        <View style={{flex: 1}}>
            <Camera style={{flex: 1}} type={type}>
                <View style={[{background:'transparent',flex:1}, gcss.inrow]}>
                    <TouchableOpacity style={gcss.bottom}>
                        <AppButton title={'Flip'} width={150} onPress={flip} style={{fontSize:30}}/>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
