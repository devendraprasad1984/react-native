import 'react-native-gesture-handler';
import React from "react";
import Start from "./start";
import {enums} from '../common/enums';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./login";
import SignUp from "./signup";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={enums.HOME.name} component={Start} options={{ title: enums.HOME.title }} />
                <Stack.Screen name={enums.LOGIN.name} component={Login} options={{ title: enums.LOGIN.title }} />
                <Stack.Screen name={enums.SIGNUP.name} component={SignUp} options={{ title: enums.SIGNUP.title }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};