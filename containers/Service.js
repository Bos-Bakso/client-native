import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image, TouchableOpacity, ImageBackground} from 'react-native'
import styleg from '../styleGlobal'
import bg from '../assets/wallpapers/service.png'
import hands from '../assets/icons/hands.png'
import toast from '../helpers/toast'
import ButtonServer from '../components/ButtonServis'

import call from '../assets/icons/call.png'
import medice from '../assets/icons/medice.png'
import mechine from '../assets/icons/teknik.png'
import ban from '../assets/icons/ban.png'
import user from '../assets/icons/user.png'
import sauce from '../assets/icons/sauce.png'
import battery from '../assets/icons/battery.png'
import police from '../assets/icons/police.png'

export default function Service(props) {
  const service = [
    { name: 'Urgent', icon: call, color: 'yellow' },
    { name: 'Medice', icon: medice, color: 'cyan' },
    { name: 'Service', icon: mechine, color: 'red' },
    { name: 'Ban Issue', icon: ban, color: 'blue' },
    { name: 'Edit Profile', icon: user, color: 'green' },
    { name: 'Less Ingredient', icon: sauce, color: 'cyan' },
    { name: 'Low Battery', icon: battery, color: 'green' },
    { name: 'Police Issue', icon: police, color: 'red' }
  ]
  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={bg}>

    <View style={{...styleg.safearea, height: '100%'}}>
      {/* <ScrollView> */}



        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginVertical: 20,  height: '100%' }}>
          <View style={{justifyContent: 'center',width: '90%', backgroundColor: '#ededed', borderRadius: 8, height: '30%' }}>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
            {
              service.map((el, i) =>
              <ButtonServer key={i} icon={el.icon} name={el.name} color={el.color}/>
                //   <View key={i}  style={{ width: 78, height: 78, alignItems: 'center', justifyContent: 'flex-start', marginVertical: 2 , marginHorizontal: 4, padding: 4}}>
                //   <TouchableOpacity key={i} onPress={() => toast(el.name)}>
                //   <View style={{ width: 55, height: 55, borderRadius: 55 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke'}}>
                //     <Image source={el.icon} style={{ width: 30, height: 30 }} />
                //   </View>
                // </TouchableOpacity>
                // <Text style={{textAlign: "center", margin: 2}}>test</Text>
                //   </View>
              )
            }
            </View>
          </View>
          
        </View>
        <View>

        </View>
        <Text>Service</Text>
      {/* </ScrollView> */}
    </View>
            </ImageBackground>
  )
}