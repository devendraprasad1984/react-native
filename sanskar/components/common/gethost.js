import * as Device from 'expo-device';

export const getHost = () => {
    // const isLocal=!Device.isDevice;
    const isLocal=true;
    return isLocal ? 'http://192.168.1.3:8080/' : 'https://dpresume.com/';
}

export default getHost;
