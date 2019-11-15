import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Navigator'
import {Provider} from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

