import getHost from "./gethost";

let apiPrefix = getHost();
let appuri = 'BDF_APP_SERVER/api/endpoints';

export const Config = {
    adsEndpoint: apiPrefix + appuri + '/adrotator.php'
    , categoryEndpoint: apiPrefix + appuri + '/categories.php'
    , categoryDetails: apiPrefix + appuri + '/categoryDetails.php'
    , configEndPoint: apiPrefix + appuri + '/config.php'
    , categoryLevelsEndPoint: apiPrefix + appuri + '/categoryLevels.php'
    , categoryPagesEndPoint: apiPrefix + appuri + '/categoryLevelPages.php'
    , supportregisterEndPoint: apiPrefix + appuri + '/support_queries.php'
}


export const Enum = {
    screenName: {
        ads: 'Adrotator'
        , category: 'Category'
        , Description: 'Description'
        , splash: 'Splash'
        , home: 'Home'
        , media: 'Media'
        , learning: 'Learning'
        , support: 'Support'
        , setting: 'Settings'
        , bottomnav: 'BottomNav'
        , events: 'Events'
        , blogs: 'Blogs'
        ,actionBarTop:'ActionBar'
    }
    , success: 'success'
    , iconSize: 22
    , txtSize: 22
    , iconColorOrange: 'orangered'
    , iconColorPurple: 'purple'
    , iconColorRed: 'red'
    , iconColorNavy: 'navy'
    , iconColorWhite: 'white'
    , iconColorGray: 'gray'
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
        appColor: 'app-color'
    }
}

export const configFilterByKey = (data, key) => {
    // if(data===undefined) return {value:'not found'};
    return data.filter(x => x.key === key)[0]
}
