import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {enums} from "../common/enums";
import {Styles} from "./Styles";

function Login({navigation}) {
    return (
        <View style={[Styles.view]}>
            <ScrollView>
                <View style={{flex: 5}}>
                    <Text>Login Goes here</Text>
                </View>
            </ScrollView>
            <View style={[Styles.rowBottom, Styles.opac]}>
                <Button title={enums.LOGIN.name} onPress={() => {
                }}/>
                <Button color={enums.red}
                        title={enums.RESET.name} onPress={() => {
                }}/>
                <Button
                    title={enums.HOME.name}
                    color={enums.orange}
                    onPress={() => navigation.navigate(enums.HOME.name.toString(), {name: 'Jane'})}/>
            </View>
        </View>
    );
}

export default Login;