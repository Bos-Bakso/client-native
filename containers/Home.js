import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Animated,Easing} from 'react-native'
import * as Location from 'expo-location';
import {useSelector} from 'react-redux'
import * as Permissions from 'expo-permissions';
import bowl from '../assets/bowl1.png'
import * as Animatable from "react-native-animatable";
import bakso from '../assets/baksos.png'

import styleg from '../styleGlobal'

export default function Home(props){
  const token = useSelector(state => state.loginAcc.token)
  console.log(token, ' dariiii home yo');
  const [click,setClick] = useState(false)
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    // setInterval(function(){  _getLocationAsync() }, 10000)
    setInterval(function(){  _getLocationAsync() }, 100000000)
  }, [location])

  const animationOn = () => {
    setClick(true)
    setTimeout(function(){
      setClick(false)
    }, 3300)
  }

  _getLocationAsync = async () => {
    let  status  = await Permissions.askAsync(Permissions.LOCATION);
    if (status.status !== 'granted') {
      console.log('not authorize' );
    } else {
          let location_ = await Location.getCurrentPositionAsync({});
          let {coords} = location_
          setLocation({latitude : coords.latitude, longitude: coords.longitude})           
          console.log(location_);
    }
  }

  return (
    <View style={styleg.safearea}>
      <View style={{height: 20}}></View>
      <View style={{alignItems: 'center'}}>
        {
          click ?    
          <View style={{alignItems: 'flex-end', zIndex: 999, paddingBottom: 15, marginTop: 35}}>
            <Animatable.View style={{width: 200, height: 105, top: 20, }} animation="slideInDown" iterationCount={2.6} direction="alternate">
                <Image source={bakso} style={{width: 200, height: 130}} />
            </Animatable.View>
          </View> :    
         <View style={{height: 155, alignItems: "center", justifyContent: 'center'}}>
      <TouchableOpacity style={{...styleg.buttonGreen, width: 100}} onPress={() => animationOn()}>
        <Text style={{fontSize: 16}}>Add Bowl</Text>
      </TouchableOpacity>
       </View> 
        }
        <Image source={bowl} style={{width: 230, height:150, resizeMode: 'contain'}}/>
      </View>
      <View>
        <Text>Penjualan Hari Ini</Text>
        <Text>Income</Text>
        <Text>500.000</Text>
        <Text>Total</Text>
        <Text>25</Text>
      </View>
    </View>
  )
}
