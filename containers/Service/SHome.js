import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { logoutMe } from '../../redux/actions/postLogin'
import { service, deleteService } from '../../redux/actions/getService'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import db from '../../config/firebase'
import styleg from '../../styleGlobal'
import LineService from '../../components/LineService'
import axios from 'axios'
import bgLog from '../../assets/wal/wal.jpg'
import Constants from 'expo-constants'



export default function SHome(props) {
    const dispatch = useDispatch()
    let kodeunik = false
    const username = useSelector(state => state.loginAcc.username)
    const isLogin = useSelector(state => state.loginAcc.isLogin)
    const image = useSelector(state => state.loginAcc.image)
    const token = useSelector(state => state.loginAcc.token)
    const tasks = useSelector(state => state.serviceTask.tasks)
    const [expoPushToken, setTokenN] = useState("")

    const registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
            const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Permissions.askAsync(
                    Permissions.NOTIFICATIONS
                );
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let tokenN = await Notifications.getExpoPushTokenAsync();
            setTokenN(tokenN);
        } else {
            // alert('Must use physical device for Push Notifications');
        }
    };

    const logoutNow = () => {
        props.navigation.navigate("Login")
        dispatch(logoutMe())
    }

    sendPushNotification = async () => {
        let lasttask = tasks[0]
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Abang Bakso Need Help',
            body: `${lasttask.tukangBasoId.username} need help for ${lasttask.problem}`,
            data: { data: 'goes here' },
        };
        const response = await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
        const data = response._bodyInit;
        // console.log(`Status & Response ID-> ${JSON.stringify(data)}`);
    };


    useEffect(() => {
        db.collection('triggerNotif').onSnapshot(function (querySnapshot) {
            querySnapshot.forEach(doc => {
                if (!kodeunik) {
                    registerForPushNotificationsAsync()
                    kodeunik = doc.data().count
                }
            })
            if (kodeunik) {
                sendPushNotification()
            }
            dispatch(service({ token: token }))
        });
    }, [])

    if (tasks) {
        return (
            <View style={styleg.safearea}>
                <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center' }} source={bgLog}>
                    <ScrollView style={{ width: '100%'}}>
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
                            <View style={{ width: '92%', height: 235, borderRadius: 10, backgroundColor: 'whitesmoke', margin: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', paddingTop: 6 }}>
                                <Image source={{ uri: image }} style={{ width: 143, height: 143, borderRadius: 143 / 2, marginTop: 18 }} />
                                <Text style={{ fontSize: 24, fontWeight: '600', margin: 5 }}>{username}</Text>
                                <TouchableOpacity activeOpacity={1} onPress={() => {logoutNow()}} style={{ marginTop: 14, width: '100%', height: 38, padding: 2, backgroundColor: '#cc4355', justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 14 }}>Logout</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '92%', marginVertical: 20 }}>
                                {
                                    tasks.map((el, i) =>
                                        <View key={i} style={{ height: 65, width: '100%', flexDirection: 'row', marginVertical: 5, borderRadius: 10 }}>
                                            <LineService type={el.problem} user={el.tukangBasoId} key={i} navigation={props.navigation} id={el._id} />
                                        </View>)
                                }
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    } else {
        return <></>
    }
}