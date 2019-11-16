import React from 'react'
import {useSelector} from 'react-redux'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import toast from '../helpers/toast'
import axios from 'axios'
import shareLoc from '../helpers/shareLoc'



export default function ButtonServis(props) {
    let token = useSelector(state => state.loginAcc.token)
    let notif = (type) => {
        shareLoc().then(data => {
            if (type === "Urgent"){
                console.log('pindah page')
                // disini yaa nuck

                
            } else {
                axios({
                    url: 'http://34.87.107.88/service/',
                    method: 'post',
                    data : {
                        problem: type,
                        latitude: data.latitude,
                        longitude: data.longitude
                    }, 
                    headers:{
                        token : token
                    } })
                    .then(() => toast("request received, please wait for a response from BosBaso")) 
                    .catch(err => console.log(err))
            }
            
        }).catch(err => toast("Plase enable location for this app"))
}

    return (
        <View style={{ width: 78, height: 78, alignItems: 'center', justifyContent: 'flex-start', marginVertical: 2, marginHorizontal: 4, padding: 4 }}>
            <TouchableOpacity onPress={
                () => notif(props.name)
            }>
                <View style={{ width: 55, height: 55, borderRadius: 55 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                    <Image source={props.icon} style={{ width: 30, height: 30 }} />
                </View>
            </TouchableOpacity>
            <Text style={{ textAlign: "center", margin: 2 }}>{props.name}</Text>
        </View>
    )
}