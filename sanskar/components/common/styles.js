import {Platform, StatusBar, StyleSheet} from "react-native";
import {Enum} from "./Config";

const defaultColor = 'white';

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

export const gcss = StyleSheet.create({
    centered: {
        alignContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    splashImage: {height: 150, width: 150},
    bottom: {
        flex: 0.8,
        padding: 5,
        bottom: 0,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subheading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Enum.gray
    },
    eventTxt: {
        fontSize: 30,
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
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    horizonatalRule: {
        borderBottomWidth: 2,
        paddingTop: 3
    },
    splashFirstTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
    },
    splashSecondTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        color: Enum.orange,
        textAlign: 'right'
    }, inrow: {
        flexDirection: 'row',
        alignContent: 'space-between'
    }, actionBar: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bgwhite: {
        backgroundColor: Enum.white,
    },
    safeAreaContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        marginTop: 10,
        backgroundColor: Enum.white,
        width: '100%',
        height: undefined,
        paddingTop: Platform.OS.toLowerCase() === 'android' ? StatusBar.currentHeight : 0
    },
    appButtonContainer: {
        elevation: 4,
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 5,
        margin: 2
    },
    appButtonText: {
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    para: {
        fontSize: 16,
        marginLeft: 5,
        textAlign: 'justify'
    },
    BottomNavContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    xrow: {
        flexDirection: 'row',
    }, xcol: {
        flexDirection: 'column',
    }, flexContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        flexDirection: 'column',
    }, iconImg: {
        width: 50,
        height: 50,
        margin: 5,
        padding: 5,
        paddingHorizontal: 10,
        resizeMode: 'contain',
        alignSelf: 'stretch'
    }, iconText: {
        fontWeight: 'bold',
        fontSize: 13
    }, xheight: {
        height: 150
    }, xmargin: {
        marginBottom: 40,
        marginTop: 20
    }, fitImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        // alignSelf: 'stretch'
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
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
    },
    floatInRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    txtInputPurpleFull: {
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 2,
        backgroundColor: Enum.white,
        paddingLeft: 6,
        borderWidth: 2,
        width: '100%',
        height: 30,
        fontSize: 15,
        alignItems: "stretch",
    }, iconView: {
        fontSize: 20,
        height: 30,
        width: 40
    },
    cardsWrapper: {
        marginTop: 10,
        width: '100%',
        alignSelf: 'center',
    },
    card: {
        height: 120,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})
