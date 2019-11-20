import React from 'react'
import {useSelector} from 'react-redux'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import toast from '../helpers/toast'
import axios from 'axios'
import shareLoc from '../helpers/shareLoc'
import AppLink from 'react-native-app-link'
import db from '../config/firebase'



export default function ButtonServis(props) {
    let token = useSelector(state => state.loginAcc.token)
    const _handlePressDocs = () => {
        const url = "http://m.me/satubosbakso.satubosbakso"
        const appName = "messenger"
        const appStoreId = "454638411"
        const appStoreLocale = "id"
        const playStoreId = "com.facebook.orca"
        AppLink.maybeOpenURL(url, 
          { appName, appStoreId, appStoreLocale, playStoreId }
          ).then(() => {
          // do stuff
        })
        .catch((err) => {
          console.log(err)
          // handle error
        });
        // WebBrowser.openBrowserAsync('http://docs.expo.io');
      };

    let notif = (type) => {
        shareLoc().then(data => {
            if (type === "Urgent"){
                _handlePressDocs()

                
            } else {
                axios({
                    url: 'http://35.185.180.235/service/',
                    method: 'post',
                    data : {
                        problem: type,
                        latitude: data.latitude,
                        longitude: data.longitude
                    }, 
                    headers:{
                        token : token
                    } })
                    .then(() => {
                        let random = Math.floor(Math.random()* 1000000000000000000)
                        db.collection('triggerNotif').doc('basoNotif').set({count: random})
                        toast("request received, please wait for a response from BosBaso")
                    }) 
                    .catch(err => console.log(err))
            }
            
        }).catch(err => toast("Plase enable location for this app"))
}

    return (
        <View style={{ width: 78, height: 84, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 2, marginHorizontal: 4, paddingHorizontal: 4}}>
            <TouchableOpacity onPress={
                () => notif(props.name)
            }>
                <View style={{ width: 55, height: 55, borderRadius: 55 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke', borderWidth: .5, borderColor: '#d8d8d8' }}>
                    <Image source={props.icon} style={{ width: 30, height: 30 }} />
                </View>
            </TouchableOpacity>
            <Text style={{ textAlign: "center", margin: 2 }}>{props.name}</Text>
        </View>
    )
}