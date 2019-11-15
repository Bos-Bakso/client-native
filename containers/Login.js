import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import styleg from '../styleGlobal'
import { login } from "../redux/actions/postLogin";


export default function LoginForm(props){
  const dispatch = useDispatch()
  let isLoading = useSelector(state => state.loginAcc.isLoading)
  let isLogin = useSelector(state => state.loginAcc.isLogin)
  let token = useSelector(state => state.loginAcc.token)
  const [pass, setPass] = useState('')
  const [username, setUsername] = useState('')
  const loginMe = () => {
    dispatch(login({ username: username, password: pass}))
  }

  useEffect(() => {
    if (!isLoading && isLogin){
      props.navigation.navigate('Home')
    }
   
  }, [isLoading])

  return (
    <View style={styleg.safearea}>
      <Text>Login</Text>
      <View style={style.containLog}>
        <Text>Username</Text>
        <TextInput style={style.input} value={username} onChangeText={text => setUsername(text)}/>
        <Text>Password</Text>
        <TextInput style={style.input} secureTextEntry={true} value={pass} onChangeText={text => setPass(text)}/>
        <TouchableOpacity style={{...styleg.buttonOrange, width: 80, margin: 10}} onPress={() => loginMe()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  input: {
    width : '70%',
    height: 30,
    backgroundColor: 'grey'
  },
  containLog: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})