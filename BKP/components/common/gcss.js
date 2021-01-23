import {Platform, StatusBar, StyleSheet} from "react-native";
import {Enum} from "./Config";

const defaultColor = 'navy';

export const appColor = (color) => {
    // console.log('appcolor',color);
    return {
        color: (color === undefined || color === '' ? defaultColor : color)
    }
}
export const bgColor = (color) => {
    return {
        backgroundColor: (color === undefined || color === '' ? defaultColor : color)
    }
}

export const CSS = StyleSheet.create({
    txtAppColorCentered: {
        margin: 5,
        alignContent: 'space-around',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20
    },
    eventTxt: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    headerLine: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    eventView: {
        borderWidth: 4,
        padding: 5,
        borderRadius: 20
    },
    eventHeading: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    horizonatalRule: {
        borderBottomWidth: 2,
        paddingTop: 3
    },
    cards: {
        margin: 5,
        padding: 2,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Enum.iconColorGray,
    },
    splashFirstTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    splashSecondTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Enum.iconColorGray,
        textAlign: 'right'
    },
    splashThirdTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Enum.iconColorPurple,
        textAlign: 'right'
    }
    , center: {
        justifyContent: 'center'
        , alignItems: 'center'
    },
    buttonsRow: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    bgWhite: {
        backgroundColor: 'white'
    },
    safeAreaContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Enum.iconColorWhite,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        // width: '100%',
        height: undefined,
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
    },
    para: {
        fontSize: 13,
        padding: 10,
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
        backgroundColor: Enum.iconColorWhite,
        marginTop: 35
    }, iconImg: {
        width: 70,
        height: 70,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        resizeMode: 'contain',
        alignSelf: 'stretch'
    }, iconImageView: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
    }, iconText: {
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    }, fitImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'stretch'
    }, adsContainer: {
        marginTop: 10,
        // width: '100%',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    gap: {
        marginTop: 2,
        marginBottom: 2
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    rightAlign: {
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-around',
    },
    topAppName: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        textAlign: 'left',
        justifyContent: 'flex-start',
    },
    floatInRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    txtInputPurpleFull: {
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 2,
        backgroundColor: Enum.iconColorWhite,
        paddingLeft: 6,
        borderWidth: 2,
        // width: '100%',
        height: 30,
        fontSize: 15,
        alignItems: "stretch",
        borderColor: 'black'
    }, iconView: {
        height: 30,
        width: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Enum.iconColorWhite
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: Enum.iconColorWhite
    }, card: {
        width: 350,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#101010',
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    cardText: {
        fontSize: 18,
        color: Enum.iconColorWhite,
        marginBottom: 5
    },
    catIcons: {
        margin: 10,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        paddingBottom: 10,
    }
})
