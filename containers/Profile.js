import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logoutMe } from '../redux/actions/postLogin'
import { getRank } from '../redux/actions/getRank'
import loading from '../assets/loading.gif'
import styleg from '../styleGlobal'
import axios from 'axios'
import db from '../config/firebase'
// import Rotate from '../components/Rotate'
import LineRank from '../components/LineRank'
import award from '../assets/icons/ribbon.png'
import bgLog from '../assets/wal/wal.jpg'

export default function Ranking(props) {
  const dispatch = useDispatch()
  const _id = useSelector(state => state.loginAcc._id)
  const isLogin = useSelector(state => state.loginAcc.isLogin)
  const image = useSelector(state => state.loginAcc.image) || "https://storage.googleapis.com/bosbakso/1573807677370kachu.jpg"
  const username = useSelector(state => state.loginAcc.username) || "username"
  const data = useSelector(state => state.rankBakso.ranks)
  const totalBowl = useSelector(state => state.rankBakso.totalBowl)
  const totalMoney = useSelector(state => state.rankBakso.totalMoney)
  const myRank = useSelector(state => state.rankBakso.myRank)

  useEffect(() => {
    db.collection('triggerRank').onSnapshot(function (querySnapshot) {
      dispatch(getRank(_id))
    });

  }, [])

  const logoutNow = () => {
    props.navigation.navigate("Login")
    dispatch(logoutMe())
  }

  if (data) {
    return (
      <View style={{ ...styleg.safearea }}>
        <ImageBackground source={bgLog} style={{ height: '100%', width: '100%'}}>

        <ScrollView>
          <View style={{ width: '100%', height: '100%', ...styleg.safearea, justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
            <View style={{ width: '90%', height: 250, backgroundColor: 'whitesmoke', justifyContent: 'center', alignItems: 'center', paddingTop: 6, marginVertical: 5, borderRadius: 10 }}>

              <ImageBackground source={award} style={{ width: 65, height: 65, alignSelf: 'flex-end', justifyContent: 'flex-start', alignItems: 'center', marginRight: 5 , marginTop: 4}}>
                <Text style={{ fontSize: 16, marginTop: 12 }}>#{myRank}</Text>
              </ImageBackground>
              <Image source={{ uri: image }} style={{ width: 115, height: 115, borderRadius: 115 / 2, marginBottom: 6, marginTop: -30 }} />
              <Text style={{ fontSize: 20, fontWeight: '600' }}>{username}</Text>
              <Text style={{ fontSize: 15 }}>{totalBowl} Bowl</Text>
              <Text style={{ fontSize: 12 }}>{totalMoney}</Text>

              <TouchableOpacity activeOpacity={1} onPress={() => {logoutNow()}} style={{ marginTop: 8, width: '100%', height: 35, backgroundColor: '#cc4355', justifyContent: 'center', alignItems: 'center' , borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Logout</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', marginVertical: 20, backgroundColor: '#f6f9fcd0', paddingBottom: 20, borderRadius: 10 }}>
              <View style={{ width: '90%' }}>
                <Text style={{ textDecorationLine: 'underline', fontSize: 28, fontWeight: 'bold', textAlign: "right", marginTop: 12, marginBottom: 8, alignSelf: 'flex-start' }}>Rank</Text>
              </View>
              {
                data.map((el, i) =>
                <View key={i} style={{ flexDirection: 'row', width: '90%', backgroundColor: '#F3F4F5', height: 100, marginVertical: 8, borderRadius: 10 }}>
                    <LineRank key={i} rank={i + 1} image={el.image} username={el.username} id={el._id} />
                  </View>
                )
              }
            </View>
          </View>
        </ScrollView>
              </ImageBackground>
      </View>
    )
  } else {
    return (
      <ImageBackground source={bgLog} style={{ ...styleg.safearea, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={loading} style={{width: 280, height: 278}} />
      </ImageBackground>)
  }
}