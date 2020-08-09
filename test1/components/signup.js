import React from 'react';
import {View, Text, Button} from 'react-native';
import {enums} from "../common/enums";
import {Styles} from "./Styles";

function SignUp({navigation}) {
    return (
        <View style={[Styles.view]}>
            <View>
                <Text>signup Goes here</Text>
            </View>

            <View style={[Styles.bottom, Styles.row]}>
                <Button title={enums.HOME.name}
                        onPress={() => navigation.navigate(enums.HOME.name.toString(), {name: 'home'})}/>
                <Button style={Styles.bgpurple} title={enums.LOGIN.name}
                        onPress={() => navigation.navigate(enums.LOGIN.name.toString(), {name: 'back'})}/>
            </View>
        </View>
    );
}

export default SignUp;