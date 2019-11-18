import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {deleteService} from '../redux/actions/getService'
import {useDispatch, useSelector} from 'react-redux'
import ban from '../assets/icons/ban.png'
import battery from '../assets/icons/battery.png'
import medice from '../assets/icons/medice.png'
import police from '../assets/icons/police.png'
import food from '../assets/icons/sauce.png'
import mechine from '../assets/icons/teknik.png'
import userIcon from '../assets/icons/user.png'

export default function LineServer(props) {
    const token = useSelector(state => state.loginAcc.token)
    const dispatch = useDispatch()
    const type = props.type
    const user = props.user
    const [once, setOnce] = useState(true)
    const [icon, setIcon] = useState(null)
    useEffect(() => {
        if (once) {
            if (type === "Medice") {
                setIcon(medice)
            } else if (type === "Service") {
                setIcon(mechine)
            } else if (type === "Tire Issue" || type === "Ban Issue") {
                setIcon(ban)
            } else if (type === "Edit Profile") {
                setIcon(userIcon)
            } else if (type === "Low Battery") {
                setIcon(battery)
            } else if (type === "Police Issue") {
                setIcon(police)
            } else if (type === "Less Ingredient") {
                setIcon(food)
            }
        }
        setOnce(false)
    }, [once, type])

    const working = async() => {
        const payload = {
            username : props.username,
            type: type, 
            icon : icon
        }
        await dispatch(deleteService({id :props.id, token: token}))
        props.navigation.navigate('SWork',payload)
    }


    return (
        <View style={{ width: '100%', height: 65, flexDirection: 'row'}}>
            <View style={{ width: '18%', height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                    <Image source={icon} style={{ width: 35, height: 35 }} />
                </View>
            </View>
            <View style={{ backgroundColor: 'yellow', width: '62%' }}>
                <Text> Description </Text>
            </View>
            <View style={{ backgroundColor: 'red', width: '20%' }}>
                <TouchableOpacity onPress={() => working()}>
                    <View>
                        <Text>Take It</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}