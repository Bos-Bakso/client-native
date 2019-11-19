import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity , Image} from 'react-native';
import icon from '../assets/icons/ban.png'

export default class App extends Component {
    constructor(props) {
        super()
        this.animated = new Animated.Value(0);

        var range = 1, snapshot = 80, radius = 100;
        /// translateX
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateX = this.animated.interpolate({ inputRange, outputRange });

        /// translateY
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateY = this.animated.interpolate({ inputRange, outputRange });
    }

      animate() {
        this.animated.setValue(0)
        Animated.timing(this.animated, {
          toValue: 1,
          duration: 2000,
        }).start();
      }

      render() {
        this.animate() 
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];
        return (
          <View style={styles.container}>
            <Animated.View style={[{ transform }]} >
            <View style={{backgroundColor: 'whitesmoke', width:60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={icon} style={{width: 50, height: 50}} />
            </View>
            
            </Animated.View>
            <View style={{backgroundColor: 'whitesmoke', width:100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={icon} style={{width: 80, height: 0}} />
            </View>
          </View>
        );
      }
    }

    // define your styles
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
      },
      btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
      }
    });