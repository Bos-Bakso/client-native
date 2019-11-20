import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styleg from '../../styleGlobal';
import OnProgress from '../../components/OnProgress'
import bgLog from '../../assets/wal/wal.jpg'

export default function Swork(props) {
    const detail = props.navigation.state.params
    const done = () => {
        // console.log(detail, '<<<<<<<<')
        props.navigation.navigate('SHome')
    }

    return (
        <View style={styleg.safearea}>
            <ImageBackground style={{ width: '100%', height: '100%', alignItems: 'center' }} source={bgLog}>
                <OnProgress user={detail.user.image} icon={detail.icon} />
                <TouchableOpacity onPress={() => done()} style={{ ...styleg.buttonGreen, width: 130, padding: 10 }}>
                    <Text style={{ fontSize: 24 }}>Finish</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'whitesmoke', width: '92%', borderRadius: 10, marginVertical: 35, alignItems: 'center', padding: 10}}>
                    <Text style={{ fontSize: 23, margin: 10, fontWeight: 'bold' , margin: 10}}>@{detail.user.username}</Text>
                    <View style={{ flexDirection: 'row', margin: 7 , alignItems: 'baseline'}}>
                        <Text style={{ fontSize: 18 }}>Need help for</Text>
                        <Text style={{ fontWeight: '700', fontSize: 20, margin: 4 }}>{detail.type}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}