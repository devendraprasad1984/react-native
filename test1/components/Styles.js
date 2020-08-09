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
    , bgred: {
        backgroundColor: '#ec7f7f',
    }
    , bgorange: {
        backgroundColor: '#e37840',
    }
    , bgpurple: {
        backgroundColor: '#925dde',
    }
    , center: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
    },
    bottom: {
        bottom: 0
    },
    btnFill: {
        width:'100%',
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 2
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute'
    },
    safeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
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