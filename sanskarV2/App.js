import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import {Provider} from 'react-redux';

import Splash from './components/Splash';
// import BottomNav from './components/bottom/BottomNav'
import {Enum} from "./components/common/Config";

// import appStore from "./components/redux/store";
import FillOrder from "./components/listings/FillOrder";
import Catalogue from "./components/listings/Catalogue";
import UserProfile from "./components/profile/UserProfile";
import HelpSplash from "./components/help/splashHelp";
import Offers from "./components/listings/Offers";
import OrderScanner from "./components/listings/OrderScanner";
import SimpleNavigation from "./components/bottom/SimpleNavigation";
import Home from "./components/Home";

const screens = {
    Splash: Splash
    , HelpSplash: HelpSplash
    , FillOrder: FillOrder
    , Catalogue: Catalogue
    , Home: Home
    , SimpleNav: SimpleNavigation
    // // , BottomNav: BottomNav
    , UserProfile: UserProfile
    , Offers: Offers
    , OrderScanner: OrderScanner
};
const navConfig = {
    headerMode: 'none',
    initialRouteName: Enum.screenName.splash,
    navigationOptions: {gesturesEnabled: true}
};

const AppNav = createStackNavigator(screens, navConfig);
const AppContainer = createAppContainer(AppNav);
// const store = appStore();
const ReduxMainAppComponent = () => {
    return <AppContainer/>
}
export default ReduxMainAppComponent;
