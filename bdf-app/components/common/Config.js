import getHost from "./gethost";

let apiPrefix = getHost();
let appuri = 'bdf-app/backend/api';

export const Config = {
    adsEndpoint: apiPrefix + appuri + '/ads/adrotator.php'
    , categoryEndpoint: apiPrefix + appuri + '/category/categories.php'
    , categoryDetails: apiPrefix + appuri + '/category/categoryDetails.php'
    , eventsEndPoint: apiPrefix + appuri + '/events/events.php'
    , configEndPoint: apiPrefix + appuri + '/config/config.php'
    , categoryLevelsEndPoint: apiPrefix + appuri + '/category/categoryLevels.php'
    , categoryPagesEndPoint: apiPrefix + appuri + '/category/categoryLevelPages.php'
    , registerEndPoint: apiPrefix + appuri + '/registration/registerEvent.php'
    , supportregisterEndPoint: apiPrefix + appuri + '/support/support_queries.php'
    
}


export const Enum = {
    screenName: {
        ads: 'Adrotator'
        , category: 'Category'
        , categoryDescription: 'Description'
        , splash: 'Splash'
        , home: 'Home'
        , media: 'Media'
        , learning: 'Learning'
        , support: 'Support'
        , setting: 'Settings'
        , bottomnav: 'BottomNav'
        , events: 'Events'
        ,registerForEvent: 'RegisterForEvent',
        blogs:'Blogs'
    }
    , iconSize: 30,
    txtSize: 25
    , iconColorOrange: 'orangered'
    , iconColorPurple: 'purple'
    , iconColorRed: 'red'
    , iconColorNavy: 'navy'
    ,configKeys:{
        contactus:'Contact-Us',
        facebook:'facebook',
        whatsapp:'whatsapp',
        twiter:'twitter',
        linkedin:'linkedin',
        blogs:'main-blog',
        splashtxt: 'SplashText',
        splashimg: 'SplashImg'
    }
}
