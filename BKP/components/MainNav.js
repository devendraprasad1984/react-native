import React, {useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from './sections/Home'
import {Enum} from "./common/Config";
import Description from "./sections/categories/Description";
import Category from "./sections/categories/Category";
import Splash from "./Splash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getConfigWithRedux from "./common/getConfigWithRedux";

const Stack = createStackNavigator()
const screenOptions = {
    gestureEnabled: true,
    headerStyle: {
        backgroundColor: '#7c15c6'
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerTintColor: 'white',
    headerBackTitleVisible: false
}


const MainNav=props=> {
    const {getConfigWithRedux} = props;
    useEffect(() => {
        getConfigWithRedux();
    }, []);

    const fnSplash = () => {
        return <Stack.Screen
            name={Enum.screenName.splash}
            component={Splash}
            options={{title: Enum.screenName.splash}}
        />
    }
    const mainConfigSetter = (route) => {
        return
        {
            title: Enum.screenName.home
        }
    }
    const fnHome = () => {
        return <Stack.Screen
            name={Enum.screenName.home}
            component={Home}
            options={({route}) => mainConfigSetter(route)}
        />
    }
    const fnCategory = () => {
        return <Stack.Screen
            name={Enum.screenName.category}
            component={Category}
            options={{title: Enum.screenName.category}}
        />
    }
    const fnDescription = () => {
        return <Stack.Screen
            name={Enum.screenName.Description}
            component={Description}
            options={{title: Enum.screenName.Description}}
        />
    }
    return <NavigationContainer>
            <Stack.Navigator initialRouteName={Enum.screenName.splash} screenOptions={screenOptions} headerMode='false'>
                {fnSplash()}
                {fnHome()}
                {fnCategory()}
                {fnDescription()}
            </Stack.Navigator>
        </NavigationContainer>
}


//mapStateToProps
const mapx = (state) => {
    return {
        config: state.config.config,
        color: state.config.color
    }
}
//mapDispatchToProps
const mapd = (dispatch) => {
    return {
        ...bindActionCreators({getConfigWithRedux}, dispatch)
    }
}

export default connect(mapx, mapd)(MainNav);
