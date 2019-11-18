import React from 'react'
import {View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styleg from '../../styleGlobal';

export default function Swork(props){
    const detail = props.navigation.state.params
    const done = () => {
        console.log(detail)
        props.navigation.navigate('SHome')
    }
    
    return (
        <View style={{...styleg.safearea, alignItems: 'center', height: '100%', width: '100%'}}>
            <Image source={detail.icon} style={{width: 160, height: 160}}/>
            <TouchableOpacity onPress={()=> done()} style={styleg.buttonGreen}>
                <Text>Finish</Text>
            </TouchableOpacity>
        </View>
    )
}