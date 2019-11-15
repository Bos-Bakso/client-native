import React from 'react'
import {View, Image } from 'react-native'
import * as Animatable from "react-native-animatable";
import bakso from '../assets/baksos.png'
import styleg from '../styleGlobal';

export default function baksoFly(props){
    return (
        <View>
            <View style={{alignItems: 'center'}}>
            <Animatable.View style={{width: 200, height: 105, top: 20, }} animation="slideInDown" iterationCount={2.6} direction="alternate">
                <Image source={bakso} style={{width: 200, height: 130}} />
            </Animatable.View>

            </View>
      </View>
    )
}