import React from 'react'
import {View, Image, Text} from 'react-native'
import {useSelector} from 'react-redux'

export default function LineRank(props) {
    const me = useSelector(state => state.loginAcc._id)
    const rank = props.rank
    const image = props.image
    const username= props.username
    // console.log(props)
    if (rank)
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row',}}>
          <View style={{width: '25%', padding: 8}}>
                  <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 40, margin: 6 }} />
                </View>
                <View style={{justifyContent: 'center', padding: 8, width:'50%', marginLeft: 8}}>
                  <Text>{username}</Text>
                </View>
                <View style={{width: '24%', backgroundColor: '#e0e3e5', borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontWeight: '600', fontSize: 28}}>#{rank}</Text>
                </View>
        </View>
    )
}