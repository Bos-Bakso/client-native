import React from 'react';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import Container from './Navigator'
import {Provider} from 'react-redux'
import store from './redux/store'

YellowBox.ignoreWarnings(['Warning'])
export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

