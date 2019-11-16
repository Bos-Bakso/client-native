import React from 'react'
import {View, ImageBackground} from 'react-native'
import nav from  './assets/wallpapers/nav.jpg'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from './containers/Home'
import Profile from './containers/Profile'
import Service from './containers/Service'
import Login from './containers/Login'
import { createStackNavigator } from 'react-navigation-stack';

const HomNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        headerTitle : (
          <View style={{width: "100%", height: "100%", borderWidth:0,backgroundColor: '#f9ca1d'}}>
          </View>
        )
    })
  }
});


const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: HomNavigator},
    Service: {screen: Service},
    Profile: {screen: Profile },
  }
);

const switchNav = createSwitchNavigator({
    Login: Login,
    Home: BottomNav,
})

export default createAppContainer(switchNav)

