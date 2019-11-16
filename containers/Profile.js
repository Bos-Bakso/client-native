import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,ScrollView} from 'react-native'
import {useDispatch} from 'react-redux'
import {logoutMe} from '../redux/actions/postLogin'
import styleg from '../styleGlobal'
import axios from 'axios'

export default function Ranking(props){
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const logoutNow = () => {
    dispatch(logoutMe())
    props.navigation.navigate("Login")
  }

  // useEffect(() => {
    // axios.get("http://34.87.107.88/user")
    // .then(({data}) => {
    //   data.sort((a, b) => b)
    //   console.log(data);
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  
  // }, [])

  return (
    <View style={styleg.safearea}>
      <ScrollView>
           <TouchableOpacity onPress={() => logoutNow()}>
                <Text>Logout</Text>
              </TouchableOpacity>
          <Text>Ranking</Text>
      </ScrollView>
    </View>
  )
}