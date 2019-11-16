import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import bgLog from '../assets/wallpapers/customwal.png'
import gerobak from '../assets/food-cart.png'

import styleg from '../styleGlobal'
import { login } from "../redux/actions/postLogin";


export default function LoginForm(props) {
  const dispatch = useDispatch()
  let isLoading = useSelector(state => state.loginAcc.isLoading)
  let isLogin = useSelector(state => state.loginAcc.isLogin)
  let token = useSelector(state => state.loginAcc.token)
  const [pass, setPass] = useState('')
  const [username, setUsername] = useState('')
  const loginMe = () => {
    dispatch(login({ username: username, password: pass }))
  }

  useEffect(() => {
    if (!isLoading && isLogin) {
      props.navigation.navigate('Home')
    }
  }, [isLoading, isLogin])

  return (
    <ImageBackground source={bgLog} style={{height: '100%', resizeMode: "cover"}}>
      <ScrollView>
      <View style={styleg.safearea}>
        <View style={style.containLog}>
        <View style={{ width: '80%', marginVertical: 25}}>
          <Image source={gerobak} style={{width: 140, height: 140, alignSelf:'center', marginVertical: 28}}/>
          <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 28}}>Franchies of</Text>
          <Text style={{fontWeight: "bold", textAlign: 'center', fontSize: 28}}>BosBaso</Text>
        </View>
        <View style={{ width: '80%', marginTop: 10}}>
          <Text style={{alignSelf: 'flex-start', fontSize: 16, fontWeight: '400'}}>Login :</Text>
        </View>
        <View style={{ width: '80%', marginVertical: 8}}>
          <TextInput style={style.input} value={username} onChangeText={text => setUsername(text)} placeholder="Username" />
          </View>
          <View style={{ width: '80%', marginVertical: 8}}>
          <TextInput style={style.input} secureTextEntry={true} value={pass} onChangeText={text => setPass(text)} placeholder="Password"/>
          <View style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <TouchableOpacity style={{ ...styleg.buttonOrange, width: 120, margin: 24, ...style.shadowing }} onPress={() => loginMe()} activeOpacity={.9}>
            <Text style={{padding: 2}}>Submit</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
      </ScrollView>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  shadowing : {
    borderColor: 'grey',
    shadowOpacity: 0.75,
    marginHorizontal: 2.5,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 3, width: 3 }
  },
  input: {
    paddingLeft: 5,
    width: '100%',
    height: 42,
    backgroundColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    shadowOpacity: 0.75,
    marginHorizontal: 2.5,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 3, width: 3 }
  },
  containLog: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})