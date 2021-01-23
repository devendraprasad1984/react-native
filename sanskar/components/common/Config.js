import getHost from "./gethost";

let apiPrefix = getHost();
let appuri = 'sanskar/backend/api/endpoints';
let endpointPrefix = apiPrefix + appuri;
// voicey: 'http://192.168.1.3:8080/sanskar/voicey/'
export const Config = {
    voicey: 'https://dpresume.com/sanskar/voicey/'
    ,bannerEndpoint: endpointPrefix + '/banner.php'
    , offerEndpoint: endpointPrefix + '/offer.php'
    , configEndPoint: endpointPrefix + '/config.php'
    , listingIconsEndpoint: endpointPrefix + '/icons.php'
    , supportRegisterEndPoint: endpointPrefix + '/support_queries.php'
    , agentValidator: endpointPrefix + '/agentValidator.php'
    , forgotCode: endpointPrefix + '/forgotAgentCode.php'
    , productsEndPoint: endpointPrefix + '/products.php'
}


export const Enum = {
    rupee: '₹',
    perc:'%',
    MedLoader: require('../../assets/load1.gif'),
    successMsg: 'success',
    failedMsg: 'failed',
    validateMss: 'wrong guid code, agent cannot be validated',
    forgotMailSuccessMsg: 'forgot email has been sent',
    forgotMailFailMsg: 'contact admin, your code cant be sent, make sure you have entered correct agent code registered with us',
    screenName: {
        ads: 'Adrotator'
        , category: 'Category'
        , splash: 'Splash'
        , home: 'Home'
        , media: 'Media'
        , learning: 'Learning'
        , support: 'Support'
        , orderHistory: 'OrderHistory'
        , setting: 'Settings'
        , mainAppNav: 'BottomNav'
        , events: 'Events'
        , blogs: 'Blogs'
        , userProfile: 'UserProfile'
        , helpSplash: 'HelpSplash'
        , offers: 'Offers'
    }
    , iconSize: 20
    , txtSize: 20
    , black: 'black'
    , orange: 'orangered'
    , purple: 'purple'
    , red: 'red'
    , navy: 'navy'
    , white: 'white'
    , gray: '#e9e9e9'
    , darkgray: '#868484'
    , asyncKeys: {
        mainkey: '@sanskar',
        launched: '@mediEasyLaunched'
    }
    , configKeys: {
        logo: 'logo',
        contactus: 'Contact-Us',
        facebook: 'facebook',
        whatsapp: 'whatsapp',
        twiter: 'twitter',
        linkedin: 'linkedin',
        blogs: 'main-blog',
        splashtxt: 'SplashText',
        splashimg: 'SplashImg',
        getevent: 'events',
        appText: 'app-text',
        appColor: 'app-color',
        licence: 'licence',
        tagline: 'tagline',
    }
}

export const configFilterByKey = (data, key) => {
    // if(data===undefined) return {value:'not found'};
    return data.filter(x => x.key === key)[0]
}
