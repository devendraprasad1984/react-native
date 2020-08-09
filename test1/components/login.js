import React from 'react';
import {View, Text, Button} from 'react-native';
import {enums} from "../common/enums";
import {Styles} from "./Styles";

function Login({navigation}) {
    return (
        <View style={[Styles.view]}>
            <View style={{flex: 1, height:90}}>
                <Text>Login Goes here</Text>
            </View>
            <View style={[{flex: 1, height:10}, Styles.bottom, Styles.row]}>
                <Button title={enums.SUBMIT.title} onPress={() => {
                }}/>
                <Button style={[Styles.bgred, Styles.opac]} title={enums.RESET.title} onPress={() => {
                }}/>
                <Button title={enums.HOME.name}
                        onPress={() => navigation.navigate(enums.HOME.name.toString(), {name: 'Jane'})}/>
            </View>
        </View>
    );
}

export default Login;