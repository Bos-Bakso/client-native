import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Animated, Easing, ImageBackground, ScrollView } from 'react-native'
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux'
import * as Permissions from 'expo-permissions';
import bowl from '../assets/bowl1.png'
import * as Animatable from "react-native-animatable";
import bakso from '../assets/3bakso.png'
import { addBakso } from '../redux/actions/addBakso'
import { updateLocation } from '../redux/actions/patchLocation'
import styleg from '../styleGlobal'
import yellow from '../assets/yellow.png'

export default function Home(props) {
  const dispatch = useDispatch()
  const username = useSelector(state => state.loginAcc.username)
  const image = useSelector(state => state.loginAcc.image)
  const token = useSelector(state => state.loginAcc.token)
  const [click, setClick] = useState(false)
  const [first, setFirst] = useState(true)
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  })

  useEffect(() => {
    if (first) {
      _getLocationAsync()
      setFirst(false)
    } else {
      setInterval(function () {
        //  _getLocationAsync() 
        //  console.log("herer")
      }, 5000)
    }
  }, [first])

  const animationOn = () => {
    console.log("TRIGGER CLIENT");
    setClick(true)
    dispatch(addBakso({
      latitude: location.latitude,
      longitude: location.longitude,
      token: token
    }))
    setTimeout(function () {
      setClick(false)
    }, 3300)
  }

  _getLocationAsync = async () => {
    let status = await Permissions.askAsync(Permissions.LOCATION);
    if (status.status !== 'granted') {
      console.log('not authorize');
    } else {
      let location_ = await Location.getCurrentPositionAsync({});
      let { coords } = location_
      setLocation({ latitude: coords.latitude, longitude: coords.longitude })
      console.log(location_);
      console.log("TRIGGERRR LOCTIONN");
      dispatch(updateLocation({ ...location, token }))
    }
  }

  return (
    <View style={{ backgroundColor: '#013159', height: '100%' }}>
      <ScrollView>

        <View style={{ ...styleg.safearea }}>
          <View style={{ height: 25 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>5 </Text>
              <Text style={{ fontSize: 20, color: 'white' }}> Bowl Sold</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            {
              click ?
                <View style={{ alignItems: 'flex-end', zIndex: 999, paddingBottom: 15, marginTop: 35 }}>
                  <Animatable.View style={{ width: 200, height: 105, top: 20, }} animation="slideInDown" iterationCount={2.6} direction="alternate">
                    <Image source={bakso} style={{ width: 200, height: 156 }} />
                  </Animatable.View>
                </View> :
                <View style={{ height: 155, alignItems: "center", justifyContent: 'center' }}>
                  <TouchableOpacity style={{ ...styleg.buttonGreen, width: 120 }} onPress={() => animationOn()}>
                    <Text style={{ fontSize: 20, paddingVertical: 5 }}>Add Bowl</Text>
                  </TouchableOpacity>
                </View>
            }
            <Image source={bowl} style={{ width: 230, height: 150, resizeMode: 'contain' }} />
          </View>
          <View style={{ width: "95%", justifyContent: 'center', alignItems: 'center', marginTop: 18, backgroundColor: 'grey', alignSelf: 'center' }}>
            <View style={{ width: '100%', borderRadius: 12, backgroundColor: '#F2F3F4', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
              <View style={{ width: '25%', alignItems: 'center' }}>

                {/* <Image source={{uri : image}} style={{ width: 87, height: 87, resizeMode: 'contain', borderRadius: 87 / 2, margin: 5 }} />
            */}
                <Image source={yellow} style={{ width: 87, height: 87, resizeMode: 'contain', borderRadius: 87 / 2, margin: 5 }} />
              </View>
              <View style={{ padding: 10, width: '75%' }}>
                <Text style={{ fontSize: 35 }}>Rp. 500.000,00</Text>
                <Text style={{ textAlign: 'right', fontSize: 10 }}>Income for Now</Text>
                <Text>Total Bowl 25</Text>
              </View>

            </View>
            <View>
              <Text>lorem</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}
