import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Styles from './AppStyles';
import AppHeader from './components/app-header/AppHeader';
import AppNavigator from './AppNavigator';

export default class App extends Component {

  render() {
    return (
      <View style={Styles.container}>
        <AppHeader />
        <AppNavigator />
        <Image style={Styles.background} source={require('./assets/bg.jpg')} />
      </View >
    )
  }

}