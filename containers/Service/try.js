import React, {useState, useEffect} from 'react'
import { Image,View, StyleSheet, TouchableOpacity,Text, AsyncStorage, Alert, Modal, ActivityIndicator,StatusBar} from 'react-native'
// import * as Font from 'expo-font';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

function Rooms(props){
    const [notification, setNotification] = useState(null)
    const temp = 21


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
          console.log(token);
     
          
      };

    useEffect(()=>{
        if(temp >= 27){
            sendPushNotification()
        }
    },[temp])


    const sendPushNotification = async () => {
       
    }

    const sendKnockNotif = async () => {
  
    }
 
    

    useEffect(()=>{
        Notifications.addListener((notification)=>{
            setNotification(notification)
        });
        registerForPushNotificationsAsync()
    },[])









    // const shakeListener =  () => {
    //     DeviceMotion.addListener((data)=>{
    //         if(data.acceleration["x"] > 10){
    //             if(!modalVisible && !change){
    //                     Alert.alert(
    //                         'Scan Barcode',
    //                         'Do you really want to Scan a Barcode?',
    //                         [
    //                           {
    //                             text: 'Cancel',
    //                             onPress: () => {setchange(true)},
    //                             style: 'cancel',
    //                           },
    //                           {text: 'OK', onPress: () => {setModalVisible(true)}},
    //                         ],
    //                         {cancelable: false},
    //                       );
    //             }
    //         }
    //     })
    // }



    


    // const getName = async() => {
    //     let name = await AsyncStorage.getItem('name')
    //     setMyName(name)
    // }

    const getPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        setCameraPermission(status === 'granted')
    }

    useEffect(()=>{
        // getName()
        getPermission()
    },[])
    
    useEffect(()=>{
        // Font.loadAsync({
        //   'neo-sans-medium': require('../../assets/NeoSansMedium.otf'),
        // }).then(()=>{
        //   setFont(true)
        // })
      },[])

      useEffect(()=>{
      },[])
       
      useEffect(()=>{
        
      },[])


    const removeAll = async () => {
        await AsyncStorage.removeItem('token') 
        await AsyncStorage.removeItem('name')
        dispatch(setSuccess(false))
        props.navigation.navigate('LandingPage')
    }


 

    return(
        <>
       </>
    )


}

const styles = StyleSheet.create({
    load:{
        flex:1,
        backgroundColor:"#f9f9f9",
        justifyContent:"center",
        alignItems:"center"
    },
    container: {
        flex:1,
        backgroundColor:"#f9f9f9",
        // marginTop:20
    },
    upBox: {
        height: "20%",
        // backgroundColor:"blue",
        padding: 20,
        justifyContent:"flex-end"
    },
    rooms: {
        height: "50%",
        width:"100%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "space-around",
        alignItems:"center"
    },
    downBox:{
        height:"30%",
        width:"100%",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "space-around",
        alignItems:"center"
    },
    sensorz:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:"28%", 
        height: 150,
        backgroundColor:"white",
        borderRadius: 5,
        padding:10,
        justifyContent:"space-between"
    },
    roomz:{
        overflow:"hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        width:"42%", 
        height: 250,
        backgroundColor:"white",
        borderRadius: 5,
        justifyContent:"flex-end",
    }
})

export default Rooms