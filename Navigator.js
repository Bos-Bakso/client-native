import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import nav from  './assets/wallpapers/nav.jpg'
import Triall from './containers/Triall'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from './containers/Home'
import Profile from './containers/Profile'
import Service from './containers/Service'
import Login from './containers/Login'
import { createStackNavigator } from 'react-navigation-stack';
import SWork from './containers/Service/SWork'
import SHome from './containers/Service/SHome'

const HomNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        headerTitle : (
          <View style={{width: "100%", height: "100%", alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{textAlign: "center", fontSize: 21, margin: 10}}>BosBaso</Text>
          </View>
        )
    })
  }
});

const switchService = createSwitchNavigator({
  SHome : SHome,
  SWork : SWork
})


const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: HomNavigator},
    Service: {screen: Service},
    Profile: {screen: Profile },
  }
);

const switchNav = createSwitchNavigator({
  // Triall: Triall,
    Login: Login,
    Home: BottomNav,
    Service : switchService
})

export default createAppContainer(switchNav)

