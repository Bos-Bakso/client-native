import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { service, deleteService } from '../../redux/actions/getService'
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import db from '../../config/firebase'
import styleg from '../../styleGlobal'
import LineService from '../../components/LineService'
import axios from 'axios'

export default function SHome(props) {
    const dispatch = useDispatch()
    const [notification, setNotification] = useState(null)
    const [tokenNotif, setTokenNotif] = useState(null)
    const username = useSelector(state => state.loginAcc.username)
    const image = useSelector(state => state.loginAcc.image)
    const token = useSelector(state => state.loginAcc.token)
    const tasks = useSelector(state => state.serviceTask.tasks)

    const sendPushNotification = async() => {
        // ${tasks[0].tukangBaksoId.username} ${tasks[0].problem}
        let message = 
            {
                to: tokenNotif,
                sound: 'default',
                title: 'Help Me',
                body: `need help for ` ,
                data: { data: 'goes here' },
              };
        
        const response = await axios({
            url:'https://exp.host/--/api/v2/push/send',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Accept-encoding': 'gzip, deflate',
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(message),
          })
          console.log(response);
    } 

    const registerForPushNotificationsAsync = async () => {
        const { status} = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        )

        console.log(status);
        if (status !== 'granted') {
          const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
          );
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
        setTokenNotif(token)
   
        
    }

    // useEffect(() => {
    //     Notifications.addListener((notification)=>{
    //         setNotification(notification)
    //     });
    //     registerForPushNotificationsAsync()
    //     dispatch(service({ token: token }))
    // }, [token])

    useEffect(() => {
        db.collection('triggerNotif').onSnapshot(async function(querySnapshot) {
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< SNAP');
            await dispatch(service({ token: token }))
            console.log(tasks);
            // sendPushNotification()
        });
    }, [])

    // const tasks = [{
    //     _id: 1,
    //     type: "Medice",
    //     username: "lala"
    // }, {
    //     _id: 2,
    //     type: "Medice",
    //     username: "lili",
    // }, {
    //     _id: 3,
    //     type: "Medice",
    //     username: "lulu",
    // }]
    if (tasks) {
        return (
            <>
                <View style={{ ...styleg.safearea, height: '100%' }}>
                    <ScrollView>
                        <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
                            <View style={{ width: '92%', height: 225, backgroundColor: 'green', margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={{ uri: image }} style={{ width: 143, height: 143, borderRadius: 143 / 2 }} />
                                <Text style={{fontSize: 24, fontWeight: '600', marginTop: 4}}>{username}</Text>
                            </View>

                            <View style={{ width: '92%' }}>
                                {
                                    tasks.map((el, i) =>
                                        <View key={i} style={{ height: 65, width: '100%', flexDirection: 'row', marginVertical: 5, borderRadius: 10 }}>
                                            <LineService type={el.problem} user={el.tukangBaksoId} key={i} navigation={props.navigation} id={el._id} />
                                        </View>)
                                }
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    } else {
        return <></>
    }
}