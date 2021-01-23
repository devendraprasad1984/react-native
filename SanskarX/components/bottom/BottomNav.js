import * as React from 'react';
import {View,Text} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Media from '../media/Media';
import Home from '../Home';
import Support from '../support/Support';
import Learning from '../learning/Learning';
import {Enum} from "../common/Config";
import {bgColor} from "../common/styles";
import OrderHistory from "../orders/OrderHistory";
import AppIcon from '../common/AppIcon';

const BottomNav = props => {
    const {params}=props.navigation.state;

    const FnHome = () => ({
        screen: ()=><Home {...params} {...props}/>,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <AppIcon name={'home'} onPress={()=>{}}/>,
        },
    })

    const FnMedia = () => ({
        screen: ()=><Media {...params} {...props}/>,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <AppIcon name={'newspaper-o'} onPress={()=>{}}/>,
        },
    })

    const FnLearning = () => ({
        screen: ()=><Learning {...params} {...props}/>,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <AppIcon name={'university'} onPress={()=>{}}/>,
        },
    })
    const FnSupport = () => ({
        screen: ()=><Support {...params} {...props}/>,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => <AppIcon name={'support'} onPress={()=>{}}/>,
        }
    })

    const FnOrderHistory = () => ({
        screen: ()=><OrderHistory {...params} {...props}/>,
        navigationOptions: {
            // tabBarLabel: Enum.screenName.orderHistory,
            tabBarIcon: ({tintColor}) => <AppIcon name={'history'} onPress={()=>{}}/>,
        }
    })

    const routes = {
        Home: FnHome(),
        Media: FnMedia(),
        Learning: FnLearning(),
        Orders: FnOrderHistory(),
        Support: FnSupport()
    };
    const routesConfig = {
        tabBarOptions: {showLabel: false},
        initialRouteName: Enum.screenName.home,
        barStyle: bgColor(),
    };
    const navs = createMaterialBottomTabNavigator(routes, routesConfig);
    const MainComponent = createAppContainer(navs);
    return <MainComponent {...params}/>;
};

export default BottomNav;
