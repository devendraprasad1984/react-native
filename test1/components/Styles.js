import {StyleSheet, Platform, StatusBar} from "react-native";

// console.log(useDimensions().get())
export const Styles = StyleSheet.create({
    welcomeBackground: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    opac: {
        opacity: 0.7
    }
    , center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#5fa9e3',
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'seagreen'
    },
    safeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        flexWrap: 'wrap',
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
    },
    view: {
        flexBasis: 100,
        flexShrink: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        textAlign: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#32a0d5',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    mainTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
        , fontSize: 30
        , marginBottom: 3
    }
});