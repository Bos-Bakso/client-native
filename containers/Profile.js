import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logoutMe } from '../redux/actions/postLogin'
import styleg from '../styleGlobal'
import axios from 'axios'
import yellow from '../assets/yellow.png'
import cube from '../assets/wallpapers/cube.jpg'
import SocketIOClient from 'socket.io-client'
import LineRank from '../components/LineRank'
import award from '../assets/icons/ribbon.png'
import bgLog from '../assets/wal/wal.jpg'
export default function Ranking(props) {
  const socket = SocketIOClient('http://34.87.107.88');
  const image = useSelector(state => state.loginAcc.image) || "https://storage.googleapis.com/bosbakso/1573807677370kachu.jpg"
  const username = useSelector(state => state.loginAcc.username) || "username"
  const [totalBowl , setTotalBowl] = useState(0)
  const [totalMoney , setTotalMoney] = useState(0)
  const [myRank , setMyRank] = useState(0)
  const money = 500000
  const [data, setData] = useState([
    {
      _id: 1,
      username: 'ayu',
      image: "https://storage.googleapis.com/bosbakso/1573807677370kachu.jpg"
    },
    {
      _id: 2,
      username: 'hem',
      image: "https://storage.googleapis.com/bosbakso/1573807677370kachu.jpg"
    },
    {
      _id: 3,
      username: 'lala',
      image: "https://storage.googleapis.com/bosbakso/1573807677370kachu.jpg"
    }
  ])

  socket.on('test', (data) => {
    setData(data.rank)
    data.rank.forEach((el, i) => {
      if (el.username === username){
        setTotalBowl(el.totalBakso)
        let rupiah = "Rp "+(el.totalBakso * 15000).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        setMyRank(i+1)
        setTotalMoney(rupiah)
      }
    });
    // console.log(data.rank)
  });

  const bowl = 25
  const dispatch = useDispatch()
  const logoutNow = () => {
    dispatch(logoutMe())
    props.navigation.navigate("Login")
  }


  return (
    <View style={{ height: '100%', ...styleg.safearea }}>
    {/* <ImageBackground source={bgLog} style={{width: '100%', height: '100%'}}> */}

      <ScrollView>
        <View style={{ width: '100%', height: '100%', ...styleg.safearea, justifyContent: 'flex-start', alignItems: 'center', flex: 1}}>
          <View style={{ width: '90%', height: 250, backgroundColor: 'whitesmoke', justifyContent: 'center', alignItems: 'center', paddingTop: 5, marginVertical: 5 }}>

          <ImageBackground  source={award} style={{width: 65, height: 65, alignSelf: 'flex-end', justifyContent: 'flex-start', alignItems: 'center', marginRight: 5}}>
          <Text style={{fontSize: 16, marginTop: 12}}>#{myRank}</Text>
          </ImageBackground>
            <Image source={{ uri: image }} style={{ width: 115, height: 115, borderRadius: 115/2, marginBottom: 6, marginTop: -30 }} />
            <Text style={{fontSize: 20, fontWeight: '600'}}>{username}</Text>
            <Text style={{fontSize: 15}}>{totalBowl} Bowl</Text>
            <Text  style={{fontSize: 12}}>{totalMoney}</Text>

            <TouchableOpacity onPress={() => logoutNow()} style={{marginTop:8,width: '100%', height: 30, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color:'white', textAlign: 'center', fontWeight: '600'}}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-start', marginTop: 20, backgroundColor:'#f6f9fcd0', paddingBottom: 20, borderRadius: 10 }}>
            <View style={{width: '90%'}}>
            <Text style={{textDecorationLine: 'underline', fontSize: 28, fontWeight:'bold', textAlign:"right", marginTop: 12, marginBottom: 8, alignSelf: 'flex-start'}}>Rank</Text>
            </View>
            {
              data.map((el, i) =>
              <View style={{ flexDirection: 'row', width: '90%', backgroundColor: '#F3F4F5', height: 100, marginVertical: 8, borderRadius: 10 }}>
                  <LineRank key={i} rank={i + 1} image={el.image} username={el.username} id={el._id} />
                </View>
              )
            }
          </View>
        </View>
      </ScrollView>
 {/* </ImageBackground> */}
    </View>
  )
}