import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from './components/Splash';
import BottomNav from './components/bottom/BottomNav'
import {Enum} from "./components/common/Config";
import EventHandler from "./components/events/eventHandler";
import Blogs from './components/blogs/Blogs';

import {Provider} from 'react-redux';
import appStore from "./components/redux/store";
import FillOrder from "./components/listings/FillOrder";
import Catalogue from "./components/listings/Catalogue";
import UserProfile from "./components/profile/UserProfile";
import HelpSplash from "./components/help/splashHelp";
import Offers from "./components/listings/Offers";
import OrderScanner from "./components/listings/OrderScanner";

const screens = {
    Splash: Splash
    , HelpSplash: HelpSplash
    , FillOrder: FillOrder
    , Catalogue: Catalogue
    , Events: EventHandler
    , Blogs: Blogs
    , BottomNav: BottomNav
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
const store = appStore();
const ReduxMainAppComponent = () => {
    return <Provider store={store}>
        <AppContainer appConfig={{hello: 1}}/>
    </Provider>
}
export default ReduxMainAppComponent;
