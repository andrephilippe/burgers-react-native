import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Provider } from 'react-redux';
import styles from './AppStyles';
import AppHeader from './components/app-header/AppHeader';
import AppNavigator from './AppNavigator';
import store from './redux/store';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <AppHeader />
          <AppNavigator />
          <Image style={styles.background} source={require('./assets/bg.jpg')} />
        </Provider>
      </View >
    )
  }

}