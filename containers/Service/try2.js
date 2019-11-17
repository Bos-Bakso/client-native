import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo';

async function getToken() {
    // console.log( Permissions.NOTIFICATIONS, '<<<<<<');
  // Remote notifications do not work in simulators, only on device
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

//   if (!Constants.isDevice) {
//     return;
//   }
//   let { status } = await Permissions.getAsync(
//       Permissions.NOTIFICATIONS,
//       );
//       if (status !== 'granted') {
//         const { status } = await Permissions.askAsync(
//             Permissions.NOTIFICATIONS
//           );
//     return;
//   }
//   let value = await Notifications.getExpoPushTokenAsync();
//   console.log('Our token', value);
//   /// Send this to a server
//   let token = await Notifications.getExpoPushTokenAsync();
//   console.log(token);
}

export default class SHome extends React.Component {
  componentDidMount() {
    getToken();

    this.listener = Notifications.addListener(this.handleNotification);
  }

  componentWillUnmount() {
    this.listener && this.listener.remove();
  }

  handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Expo Notifications Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
