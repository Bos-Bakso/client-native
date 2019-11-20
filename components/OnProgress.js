import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Button, TouchableOpacity ,ImageBackground, Image} from 'react-native';

export default class OnProgress extends Component {
    constructor(props) {
        super(props)
        this.animated = new Animated.Value(0);
        this.icon = props.icon
        this.user = props.user
        var range = 1, snapshot = 170, radius = 135;
        var inputRange = [], outputRange = [];
          for (var i=0; i<=snapshot; ++i) {
              var value = i/snapshot;
              var move = Math.sin(value * Math.PI * 2) * radius;
              inputRange.push(value);
              outputRange.push(move);
          }
          this.translateX = this.animated.interpolate({ inputRange, outputRange });
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
        Animated.loop(Animated.timing(this.animated, {
          toValue: 1,
          duration: 2000,
        })).start()
      }
      render() {
        this.animate() 
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];
        return (
          <View style={{...styles.container, width:'100%', height: 365}}>
            <Animated.View style={[{ transform }]}>
            <View style={{backgroundColor: 'whitesmoke', width:65, height: 65, borderRadius: 65/2, justifyContent: 'center', alignItems: 'center', margin: 15}}>
              <Image source={this.icon} style={{width: 40, height: 40}} />
            </View>
            </Animated.View>
            <Image source={{uri:this.user}} style={{backgroundColor: 'whitesmoke', width:185, height: 185, borderRadius: 185/2, justifyContent: 'center', alignItems: 'center', position: 'absolute', margin: 5}}>
            </Image>
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
      }
    });