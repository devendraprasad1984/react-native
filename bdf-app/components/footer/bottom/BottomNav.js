import * as React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


import Media from '../../sections/media/Media';
import Home from '../../Home';
import Settings from '../../sections/settings/Settings';
import Support from '../../sections/support/Support';
import Learning from '../../sections/learning/Learning';
import {Enum} from "../../common/Config";
import {globalStyles} from "../../common/GlobalStyle";

const BottomNav = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: Enum.screenName.home,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
                    </View>
                ),
            },
        },
        Media: {
            screen: Media,
            navigationOptions: {
                tabBarLabel: Enum.screenName.media,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon
                            style={[{color: tintColor}]} size={25} name={'md-photos'}/>
                    </View>
                ),

            },
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: Enum.screenName.setting,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon
                            style={[{color: tintColor}]} size={25} name={'ios-people'}/>
                    </View>
                ),

            },
        },
        Learning: {
            screen: Learning,
            navigationOptions: {
                tabBarLabel: Enum.screenName.learning,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon
                            style={[{color: tintColor}]} size={25} name={'md-laptop'}/>
                    </View>
                ),

            },
        },
        Support: {
            screen: Support,
            navigationOptions: {
                tabBarLabel: Enum.screenName.support,
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon
                            style={[{color: tintColor}]} size={25} name={'md-person'}/>
                    </View>
                ),

            },
        },
    },
    {
        initialRouteName: Enum.screenName.home,
        activeColor: 'white',
        inactiveColor: 'gray',
        barStyle: globalStyles.bgPurple,
    }
);

export default createAppContainer(BottomNav);
