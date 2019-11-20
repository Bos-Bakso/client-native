import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, Animated, Easing, ImageBackground, ScrollView } from 'react-native'
import * as Location from 'expo-location';
import { useSelector, useDispatch } from 'react-redux'
import * as Permissions from 'expo-permissions';
import bowlayam from '../assets/bowl1.png'
import * as Animatable from "react-native-animatable";
import bakso from '../assets/3bakso.png'
import { addBakso } from '../redux/actions/addBakso'
import { updateLocation } from '../redux/actions/patchLocation'
import styleg from '../styleGlobal'
import bg from '../assets/wal/wal.jpg'
import satu from '../assets/numberGreen/1.png'
import dua from '../assets/numberGreen/2.png'
import tiga from '../assets/numberGreen/3.png'
import empat from '../assets/numberGreen/4.png'
import lima from '../assets/numberGreen/5.png'
import enam from '../assets/numberGreen/6.png'
import tujuh from '../assets/numberGreen/7.png'
import delapan from '../assets/numberGreen/8.png'


export default function Home(props) {

  const dispatch = useDispatch()
  const bowl = useSelector(state => state.loginAcc.bowl)
  const Income = (bowl * 15000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
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
        _getLocationAsync()
        //  console.log("herer")
      }, 5000)
    }
  }, [first])

  const animationOn = (num) => {
    console.log("TRIGGER CLIENT");
    setClick(true)
    dispatch(addBakso({
      num: num,
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
      dispatch(updateLocation({ latitude: coords.latitude, longitude: coords.longitude, token }))
    }
  }

  return (

    <View style={{ height: '100%' }}>
      <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
        <ScrollView>

          <View style={{ ...styleg.safearea }}>
            <View style={{ height: 25 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>{bowl} </Text>
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
                  <View style={{ height: 155, alignItems: "center", justifyContent: 'center', width: '65%' }}>
                    {/* <View style={{ height: 15, alignItems: "center", justifyContent: 'center', width: '100%', marginVertical: 4, backgroundColor: 'yellow' }}>
                      <Text>Add Bowl</Text>
                    </View> */}
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(1)}>
                        {/* <Text style={{ fontSize: 20, paddingVertical: 5 }}> 1 Bowl</Text> */}
                        <Image source={satu} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(2)}>
                        <Image source={dua} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(3)}>
                        <Image source={tiga} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(4)}>
                        <Image source={empat} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(5)}>
                        <Image source={lima} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(6)}>
                        <Image source={enam} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(7)}>
                        <Image source={tujuh} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: '25%', margin: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => animationOn(8)}>
                        <Image source={delapan} style={{ width: 50, height: 50 }} />
                      </TouchableOpacity>
                    </View>

                  </View>
              }
              <Image source={bowlayam} style={{ width: 230, height: 150, resizeMode: 'contain' }} />
            </View>
            <View style={{ width: "95%", justifyContent: 'center', alignItems: 'center', marginTop: 18, alignSelf: 'center' , ...styleg.shadowing}}>
              <View style={{ width: '100%', borderRadius: 12, backgroundColor: '#F2F3F4', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                <View style={{ width: '25%', alignItems: 'center' }}>

                  <Image source={{ uri: image }} style={{ width: 87, height: 87, borderRadius: 87 / 2, margin: 5 }} />
                </View>
                <View style={{ padding: 10, width: '75%' }}>
                  <Text style={{ fontSize: 35 }}>{Income}</Text>
                  <Text style={{ textAlign: 'right', fontSize: 11 }}>Income for Now</Text>
                  <Text>Total Bowl {bowl}</Text>
                </View>

              </View>


            </View>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}
