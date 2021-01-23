// import * as React from 'react';
// import {View} from 'react-native';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import {createAppContainer} from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Media from '../media/Media';
// import Home from '../Home';
// import Support from '../support/Support';
// import Learning from '../learning/Learning';
// import {Enum} from "../common/Config";
// import {bgColor} from "../common/styles";
// import OrderHistory from "../orders/OrderHistory";
// // import {connect} from 'react-redux';
//
// const BottomNav = props => {
//     const {params}=props.navigation.state;
//
//     const bottomIcon = (tint, iconName) => (
//         <View>
//             <Icon style={{color: tint}} size={Enum.iconSize} name={iconName}/>
//         </View>
//     )
//
//     const FnHome = () => ({
//         screen: ()=><Home {...params} {...props}/>,
//         navigationOptions: {
//             params,
//             tabBarLabel: Enum.screenName.home,
//             tabBarIcon: ({tintColor}) => bottomIcon(tintColor, 'ios-home'),
//         },
//     })
//
//     const FnMedia = () => ({
//         screen: ()=><Media {...params} {...props}/>,
//         navigationOptions: {
//             params,
//             tabBarLabel: Enum.screenName.media,
//             tabBarIcon: ({tintColor}) => bottomIcon(tintColor, 'md-photos')
//         },
//     })
//
//     const FnLearning = () => ({
//         screen: ()=><Learning {...params} {...props}/>,
//         navigationOptions: {
//             params,
//             tabBarLabel: Enum.screenName.learning,
//             tabBarIcon: ({tintColor}) => bottomIcon(tintColor, 'md-laptop')
//         },
//     })
//     const FnSupport = () => ({
//         screen: ()=><Support {...params} {...props}/>,
//         navigationOptions: {
//             params,
//             tabBarLabel: Enum.screenName.support,
//             tabBarIcon: ({tintColor}) => bottomIcon(tintColor, 'md-person')
//         }
//     })
//
//     const FnOrderHistory = () => ({
//         screen: ()=><OrderHistory {...params} {...props}/>,
//         navigationOptions: {
//             params,
//             tabBarLabel: Enum.screenName.orderHistory,
//             tabBarIcon: ({tintColor}) => bottomIcon(tintColor, 'ios-alert')
//         }
//     })
//
//     const routes = {
//         Home: FnHome(),
//         Media: FnMedia(),
//         Learning: FnLearning(),
//         OrderHistory: FnOrderHistory(),
//         Support: FnSupport()
//     };
//     const routesConfig = {
//         initialRouteName: Enum.screenName.home,
//         activeColor: Enum.black,
//         inactiveColor: Enum.purple,
//         barStyle: bgColor(),
//     };
//     const navs = createMaterialBottomTabNavigator(routes, routesConfig);
//     const MainComponent = createAppContainer(navs);
//     return <MainComponent {...params}/>;
// };
//
// export default BottomNav;
