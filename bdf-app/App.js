import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Splash from './components/Splash';
import Description from "./components/sections/categories/Description";
import BottomNav from './components/footer/bottom/BottomNav'
import {Enum} from "./components/common/Config";
import eventHandler from "./components/sections/events/eventHandler";
import RegisterEvent from "./components/sections/events/registerEvent";
import Blogs from './components/sections/blogs/Blogs';



const App = createStackNavigator({
  Splash : { screen : Splash, navigationOptions: {headerShown: false}}
  ,BottomNav :{screen: BottomNav, navigationOptions:{headerShown: false}}
  ,Description : { screen : Description, navigationOptions: {headerShown: false}}
  ,Events : { screen : eventHandler, navigationOptions: {headerShown: false}}
  ,RegisterForEvent : { screen : RegisterEvent, navigationOptions: {headerShown: false}},
  Blogs: {screen: Blogs, navigationOptions: {headerShown: false}}
  
}, {
  initialRouteName : Enum.screenName.splash,
});


export default createAppContainer(App);
