// @flow
import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './MenuStyles';
import { burgers } from '../../resourcers/mockers';
import Background from '../../components/common/background/Background';
import MenuItem from '../../components/menu/item/MenuItem';

class Menu extends React.Component {

  static navigationOptions = { header: null };

  renderItems() {
    return <FlatList
      style={Styles.menuFlatList}
      data={burgers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (<MenuItem item={item} />)} />
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.menuItems}>
          {this.renderItems()}
        </View>
        <Background image={require('../../assets/bg2.png')} />
      </View>
    )
  }

}

export default Menu;