import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default styles = StyleSheet.create({
    safearea: {
      marginTop: Constants.statusBarHeight
    },
    buttonGreen: {
        backgroundColor: '#8ec725', 
        paddingHorizontal: 6,
        paddingVertical: 10,
        margin: 3, 
        alignItems: 'center', 
        borderRadius: 10, 
    },
    buttonOrange: {
        backgroundColor: 'orange', 
        paddingHorizontal: 6,
        paddingVertical: 10,
        margin: 3, 
        alignItems: 'center', 
        borderRadius: 10, 
    }
  })
  