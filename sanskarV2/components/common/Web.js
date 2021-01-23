// import * as WebBrowser from 'expo-web-browser';

export const Web=(url,success)=> {
    WebBrowser.openBrowserAsync(url).then(res=> success(res));
}
