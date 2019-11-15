import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {logoutMe} from '../redux/actions/postLogin'
import styleg from '../styleGlobal'


export default function Ranking(props){
  const dispatch = useDispatch()
  const logoutNow = () => {
    dispatch(logoutMe())
    props.navigation.navigate("Login")
  }
  return (
    <View style={styleg.safearea}>
           <TouchableOpacity onPress={() => logoutNow()}>
                <Text>Logout</Text>
              </TouchableOpacity>
          <Text>Ranking</Text>
    </View>
  )
}