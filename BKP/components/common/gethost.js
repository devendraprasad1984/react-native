// import * as Device from 'expo-device'

export const getHost = () => {
    // const isdevice=Device.isDevice;
    // let ip =!isdevice ? 'http://192.168.1.3:8080/' : 'https://dpresume.com/';
    let ip ='http://192.168.1.3:8080/';
    return ip;
}

export default getHost;
