import {Platform, StatusBar, StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    txtPurpleCenter: {
        margin: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'purple',
        fontSize: 20
    },
    Splashfirsttxt: {
        fontSize: 45, 
        fontWeight: 'bold',
         marginTop: 190,
          padding: 10,
          color: 'black'
    },
    Splashsecondtxt: {
        fontSize: 45, 
        fontWeight: 'bold',
          padding: 10,
          color: 'grey',
     textAlign: 'right'
    }

    ,
    center: {
        justifyContent: 'center'
        , alignItems: 'center'
    },
    buttonsRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    bgPurple: {
        backgroundColor: 'purple'
    },
    bgWhite: {
        backgroundColor: 'white'
    },
    safeAreaContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
        height: undefined,
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
    },
    para: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'justify'
    },
    BottomNavContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRow: {
        flex: 0.12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-around',
    },
    flexColumn: {
        flex: 0.1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }, flexContainer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 5,
        backgroundColor: 'white',
        marginTop: 35
    }, iconImg: {
        width: 100,
        height: 100,
        margin: 10,
        padding: 10,
        paddingHorizontal: 20,
        resizeMode: 'contain',
        alignSelf: 'stretch'
    }, iconText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 13,
        textAlign: 'center'
    }, fitImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'stretch'
    }, adsContainer: {
        flex: 1,
        top: 0,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'stretch',
        borderRadius: 0,
    },
    gap: {
        marginTop: 4,
        marginBottom: 2
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rightAlign: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
    },
    floatInRow: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    txtInputPurpleFull: {
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 2,
        backgroundColor: 'white',
        color: 'purple',
        paddingLeft: 6,
        borderWidth: 2,
        width: '100%',
        height: 30,
        fontSize: 15,
        alignItems: "stretch",
        borderColor: 'purple'
    },iconView:{
        height: 30,
        width: 50
    }
});
