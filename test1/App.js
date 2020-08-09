import React from "react";
import {SafeAreaView, Text} from "react-native";
import {Styles} from "./components/Styles";
import {AppNavigation} from "./components/navigation";

export default function App() {
    // console.log(useDimensions(), useDeviceOrientation());
    return (
        <SafeAreaView style={[Styles.safeContainer]}>
            <AppNavigation />
        </SafeAreaView>
    );
}
