import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import styleg from '../styleGlobal'
import ButtonServer from '../components/ButtonServis'
// import baksoreal from '../assets/realbakso.jpg'
import gradient from '../assets/wal/walorange.png'
import call from '../assets/icons/call.png'
import medice from '../assets/icons/medice.png'
import mechine from '../assets/icons/teknik.png'
import ban from '../assets/icons/ban.png'
import gas from '../assets/icons/gas.png'
import sauce from '../assets/icons/sauce.png'
import battery from '../assets/icons/battery.png'
import police from '../assets/icons/police.png'

// , default should be : '#ededed 
export default function Service(props) {
  const service = [
    { name: 'Urgent', icon: call, color: '#ededed' },
    { name: 'Medice', icon: medice, color: '#ededed' },
    { name: 'Service', icon: mechine, color: '#ededed' },
    { name: 'Tire Issue', icon: ban, color: '#ededed' },
    { name: 'Gas Issue', icon: gas, color: '#ededed' },
    { name: 'Less Ingredient', icon: sauce, color: '#ededed' },
    { name: 'Low Battery', icon: battery, color: '#ededed' },
    { name: 'Police Issue', icon: police, color: '#ededed' }
  ]
  return (
    
    <View style={{ ...styleg.safearea, height: '100%' }}>
      <ScrollView>

        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <ImageBackground source={gradient} style={{ height: 180, width: '100%', resizeMode: 'cover', marginBottom: 15 , borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>

          </ImageBackground>
          <View style={{ top: -110,justifyContent: 'center', width: '93%', backgroundColor: 'white', borderRadius: 8, height: 190, paddingVertical: 3, paddingHorizontal: 3, marginBottom: 12 , ...style.shadowing}}>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', height: '100%', width: '100%', padding: 3 }}>
              {
                service.map((el, i) =>
                <View style={{width: '25%'}} key={i}>
                  <ButtonServer icon={el.icon} name={el.name} color={el.color}  />
                </View>
                )
              }
            </View>
          </View>
          <View style={{ top: -100}}>

          {
            service.map((el, i) =>
              <View key={i} style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '93%', backgroundColor: 'white', borderRadius: 8, height: 120, paddingVertical: 3, paddingHorizontal: 3, marginVertical: 7, ...style.shadowing1} }>
                <View style={{ width: 80, height: 80, borderRadius: 80 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke', marginLeft: 8, marginRight: 10, borderWidth: .8, borderColor: '#d8d8d8'}}>
                  <Image source={el.icon} style={{ width: 55, height: 55 }} />
                </View>
                <View style={{paddingVertical: 18}}>
                  <Text style={{fontSize: 18}}>{el.name}</Text>
                  <View style={{height: '100%', width: '85%'}}>
                    <Text>lorem ipsum ipsumlorem orem ipsumlorem ipsumsumlorem ipsumlorem ipsum</Text>
                  </View>
                </View>
              </View>
            )
          }
          </View>
        </View>
      </ScrollView>

    </View>
  )
} 

const style =  StyleSheet.create({
  shadowing : {
    borderColor: 'grey',
    shadowOpacity: 0.75,
    marginHorizontal: 2.5,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 3, width: 3 }
  },
  shadowing1 : {
    borderColor: 'grey',
    shadowOpacity: 0.75,
    marginHorizontal: 3,
    shadowRadius: 4,
    shadowColor: 'grey',
    shadowOffset: { height: 1, width: 1 }
  },
})