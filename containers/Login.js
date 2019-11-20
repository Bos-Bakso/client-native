import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import bgLog from '../assets/wal/wal.jpg'
import {service} from '../redux/actions/getService'
import styleg from '../styleGlobal'
import { login, logoutMe } from "../redux/actions/postLogin";
import toast from '../helpers/toast'

import Spinner from 'react-native-loading-spinner-overlay'

export default function LoginForm(props) {
  const dispatch = useDispatch()
  let isLoading = useSelector(state => state.loginAcc.isLoading)
  let isLogin = useSelector(state => state.loginAcc.isLogin)
  let role = useSelector(state=> state.loginAcc.role)
  let token = useSelector(state => state.loginAcc.token)
  let message = useSelector(state => state.loginAcc.message)
  const [spinner, setSpinner] = useState(false)
  const [pass, setPass] = useState(null)


  const [username, setUsername] = useState(null)
  const loginMe = () => {
    setSpinner(true)
    dispatch(login({ username: username, password: pass }))
    setTimeout(function(){
      setSpinner(false)}, 1500)
  }

  useEffect(() => {
    // props.navigation.navigate('Home')
    if (!isLoading && isLogin) {
      if (role === "service"){
        dispatch(service({token : token}))
        props.navigation.navigate('Service')
      } else if (role === "baso"){
        props.navigation.navigate('Home')
      } else if (role === "admin"){
        toast("Access for owner is in web")
      }
    } else if (!isLoading && message){
      toast(message)
      dispatch(logoutMe())
    } 
    return setSpinner(false)
  }, [isLoading, isLogin])

  return (
    <View style={styleg.safearea}>
      <ImageBackground source={bgLog} style={{height: '100%', resizeMode: "cover"}}>
      <ScrollView>
        <View style={style.containLog}>
        <View style={{ width: '80%', marginTop: 55}}>
          <Text style={{fontWeight: "bold", textAlign: 'left', fontSize: 33, color: 'white', marginLeft: 4}}>Login</Text>
        </View>
        <View style={{ width: '80%', marginTop: 10}}>
        </View>
        <View style={{ width: '80%', marginVertical: 8}}>
          <TextInput style={style.input} value={username} onChangeText={text => setUsername(text)} placeholder="Username" />
          </View>
          <View style={{ width: '80%', marginVertical: 8}}>
          <TextInput style={style.input} secureTextEntry={true} value={pass} onChangeText={text => setPass(text)} placeholder="Password"/>
          <View style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <TouchableOpacity style={{ ...styleg.buttonOrange, width: 110, margin: 24, ...style.shadowing }} onPress={() => loginMe()} activeOpacity={1}>
            <Text style={{padding: 2}}>Submit</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    <Spinner
          visible={spinner}
          textContent={"One moment..."}
          textStyle={{ color: "#fff" }}
        />
    </ImageBackground>
      </View>
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
    paddingLeft: 14,
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