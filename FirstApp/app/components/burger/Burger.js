// @flow
import React from 'react';
import { View, Text, Image, Alert, TouchableNativeFeedback } from 'react-native'
import Styles from './BurgerStyles';
import Background from '../common/background/Background';

type Props = { ingredients: String, price: Number, name: String };
class Burger extends React.Component<Props>{

    renderIngredients() {
        const { ingredients } = this.props;
        return ingredients.map((igrendient, index) => {
            const { align, img } = igrendient;
            return (
                <Image key={index} style={
                    {
                        ...Styles.burgerIngredient,
                        marginBottom: align.marginBottom,
                        zIndex: ingredients.length - (index - 1)
                    }
                } source={img} />
            )
        })
    }

    render() {
        const { name, price } = this.props;
        return (
            <TouchableNativeFeedback onPress={() => Alert.alert('Ok')}>
                <View style={Styles.container}>
                    <View style={Styles.burgerText}>
                        <Text style={Styles.burgerTitle}>{name}</Text>
                        <Text style={Styles.burgerPrice}>
                            {price ? `R$${price}` : ''}
                        </Text>
                    </View>
                    <View style={Styles.burgerIngredients}>
                        {this.renderIngredients()}
                    </View>
                    {/* <Background image={require('../../assets/bg3.png')} /> */}
                </View>
            </TouchableNativeFeedback>
        )
    }

}

export default Burger;