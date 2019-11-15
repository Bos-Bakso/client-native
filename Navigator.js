import React from 'react'
import {View} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from './containers/Home'
import Rank from './containers/Rank'
import Service from './containers/Service'
import Login from './containers/Login'
import { createStackNavigator } from 'react-navigation-stack';

const HomNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
        headerTitle : (
            <View style={{ backgroundColor: '#e7a94b',width: '100%',
            height: '100%', }}>
            </View>
        )
    })
  }
});


const BottomNav = createBottomTabNavigator(
  {
    Home: { screen: HomNavigator},
    Rank: {screen: Rank },
    Service: {screen: Service}
  }
);

const switchNav = createSwitchNavigator({
    Login: Login,
    Home: BottomNav,
})

export default createAppContainer(switchNav)

