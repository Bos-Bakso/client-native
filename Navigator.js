import React from 'react'
import {View, ImageBackground, Text} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from './containers/Home'
import Profile from './containers/Profile'
import Service from './containers/Service'
import Login from './containers/Login'
import { createStackNavigator } from 'react-navigation-stack';
import SWork from './containers/Service/SWork'
import SHome from './containers/Service/SHome'
import {AntDesign,  Entypo} from '@expo/vector-icons'
import { service } from './redux/actions/getService'

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
})

HomNavigator.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
  return <Entypo name='home' size={25} color={tintColor} style={{marginTop: 4}} />;
  }
}
Service.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
  return <Entypo name='tools' size={25} color={tintColor} style={{marginTop: 4}} />;
  }
}
Profile.navigationOptions = {
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
  return <AntDesign name='user' size={25} color={tintColor} style={{marginTop: 4}} />;
  }
}

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
    Login: Login,
    Home: BottomNav,
    Service : switchService
})

export default createAppContainer(switchNav)

