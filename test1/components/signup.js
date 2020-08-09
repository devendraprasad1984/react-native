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

            <View style={[Styles.rowBottom, Styles.opac]}>
                <Button title={enums.HOME.name}
                        color={enums.navy}
                        onPress={() => navigation.navigate(enums.HOME.name.toString(), {name: 'home'})}/>

                <Button title={enums.LOGIN.name}
                        color={enums.magenta}
                        onPress={() => navigation.navigate(enums.LOGIN.name.toString(), {name: 'back'})}/>
            </View>
        </View>
    );
}

export default SignUp;