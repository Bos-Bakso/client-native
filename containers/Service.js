import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import styleg from '../styleGlobal'
import bg from '../assets/wallpapers/service.png'
import hands from '../assets/icons/hands.png'
import toast from '../helpers/toast'
import ButtonServer from '../components/ButtonServis'
import baksoreal from '../assets/realbakso.jpg'
import call from '../assets/icons/call.png'
import medice from '../assets/icons/medice.png'
import mechine from '../assets/icons/teknik.png'
import ban from '../assets/icons/ban.png'
import user from '../assets/icons/user.png'
import sauce from '../assets/icons/sauce.png'
import battery from '../assets/icons/battery.png'
import police from '../assets/icons/police.png'
// , default should be : '#ededed 
export default function Service(props) {
  const service = [
    { name: 'Urgent', icon: call, color: '#eacc23' },
    { name: 'Medice', icon: medice, color: '#139ad8' },
    { name: 'Service', icon: mechine, color: '#cc4355' },
    { name: 'Ban Issue', icon: ban, color: '#1fba79' },
    { name: 'Edit Profile', icon: user, color: '#eacc23' },
    { name: 'Less Ingredient', icon: sauce, color: '#139ad8' },
    { name: 'Low Battery', icon: battery, color: '#cc4355' },
    { name: 'Police Issue', icon: police, color: '#1fba79' }
  ]
  return (

    <View style={{ ...styleg.safearea, height: '100%' }}>


      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
          <Image source={baksoreal} style={{ height: 145, width: '100%', resizeMode: 'cover', marginBottom: 15 }} />
          <View style={{ justifyContent: 'center', width: '93%', backgroundColor: '#ededed', borderRadius: 8, height: 190, paddingVertical: 3, paddingHorizontal: 3, marginBottom: 12 }}>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', height: '100%', width: '100%', padding: 3 }}>
              {
                service.map((el, i) =>
                  <ButtonServer key={i} icon={el.icon} name={el.name} color={el.color} />
                )
              }
            </View>
          </View>
          {
            service.map((el, i) =>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '93%', backgroundColor: el.color, borderRadius: 8, height: 120, paddingVertical: 3, paddingHorizontal: 3, marginVertical: 7 }}>
                <View style={{ width: 80, height: 80, borderRadius: 80 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke', marginLeft: 8, marginRight: 10 }}>
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

      </ScrollView>
    </View>
  )
} 