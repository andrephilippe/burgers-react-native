// @flow
import React from 'react';
import { View, FlatList } from 'react-native';
import Styles from './MenuStyles';
import Burger from '../../components/burger/Burger';
import { burgers } from '../../resourcers/mockers';
import Background from '../../components/common/background/Background';

class Menu extends React.Component {

  static navigationOptions = { header: null };

  renderBurgers() {
    return <FlatList
      style={Styles.menuFlatList}
      data={burgers}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        const { ingredients, price, name } = item;
        return (
          <Burger name={name} ingredients={ingredients} price={price} />
        )
      }} />
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.menuItems}>
          {this.renderBurgers()}
        </View>
        <Background image={require('../../assets/bg2.png')} />
      </View>
    )
  }

}

export default Menu;