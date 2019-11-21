import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { deleteService } from '../redux/actions/getService'
import { useDispatch, useSelector } from 'react-redux'
import ban from '../assets/icons/ban.png'
import battery from '../assets/icons/battery.png'
import medice from '../assets/icons/medice.png'
import police from '../assets/icons/police.png'
import food from '../assets/icons/sauce.png'
import mechine from '../assets/icons/teknik.png'
import gas from '../assets/icons/gas.png'
import hand from '../assets/icons/ok.png'

export default function LineServer(props) {
    const token = useSelector(state => state.loginAcc.token)
    const dispatch = useDispatch()
    const type = props.type
    const user = props.user
    const icon = () => {
        if (type === "Medice") {
            return medice
        } else if (type === "Service") {
            return mechine
        } else if (type === "Tire Issue" || type === "Ban Issue") {
            return ban
        } else if (type === "Gas Issue") {
            return gas
        } else if (type === "Low Battery") {
            return battery
        } else if (type === "Police Issue") {
            return police
        } else if (type === "Less Ingredient") {
            return food
        }
    }
    // useEffect(() => {
    //     if (once) {
        // }
    //     setOnce(false)
    // }, [once, type])

    const working = () => {
        const payload = {
            user: user,
            type: type,
            icon: icon()
        }
        // console.log(user.username, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        dispatch(deleteService({ id: props.id, token: token }))
        //  console.log(props.id);
        props.navigation.navigate('SWork', payload)
    }
        return (
            <View style={{ width: '100%', height: 65, flexDirection: 'row' }}>
                <View style={{ width: '22%', height: 65, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e2e1e8' , borderBottomLeftRadius: 6, borderTopLeftRadius: 6}}>
                    <View style={{ width: 50, height: 50, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                        <Image source={icon()} style={{ width: 35, height: 35 }} />
                    </View>
                </View>
                <View style={{ backgroundColor: 'whitesmoke', width: '62%', padding: 5 }}>
                    <Text style={{ fontWeight: '600' }}>{type}</Text>
                    <Text>for @{user.username} </Text>
                </View>
                <View style={{ backgroundColor: '#8ec725', width: '17%' ,  borderBottomRightRadius: 6, borderTopRightRadius: 6, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => working()} activeOpacity={1}>
                        <Image source={hand} style={{width: 55, height: 55}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )


}