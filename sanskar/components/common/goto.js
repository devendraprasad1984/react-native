import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function GoToButton({ screenName }) {
    const navigation = useNavigation();
    return (
        <Button title={`Go to ${screenName}`} onPress={() => navigation.navigate(screenName)}/>
    );
}
