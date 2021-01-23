import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {globalStyles} from "./GlobalStyle";

export default function NoDataFound(props, {navigation}) {
    return (<View>
        <Text style={globalStyles.txtPurpleCenter}>No Data Found!</Text>
    </View>);
}
