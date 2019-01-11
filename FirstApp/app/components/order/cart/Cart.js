import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './CartStyles';

class Cart extends React.Component {

    getTotalPrice(){
        const { item } = this.props;

        if (!item.ingredients) {
            return '00,00';
        }

        const price = item.ingredients.reduce((val, ingredient) => {
            const { price } = ingredient;
            return val + price;
        }, 0);

        return price.toFixed(2).replace('.', ',');
    }

    renderIngredients() {
        const { item } = this.props;

        if (!item.ingredients) {
            return null;
        }

        return item.ingredients.map((ingredient, index) => {
            const { name, price } = ingredient;
            return (
                <View key={index} style={styles.ingredientRow}>
                    <Text style={{ ...styles.ingredientBodyText, flex: 0.8 }}>{index + 1}. {name}</Text>
                    <Text style={{ ...styles.ingredientBodyText, flex: 0.2, textAlign: 'right' }}>R${price.toFixed(2)}</Text>
                </View>
            )
        })
    }

    renderIngredientsTotal() {
        return (
            <View style={styles.ingredientRow}>
                <Text style={{ ...styles.ingredientBottomText, flex: 0.5 }}>TOTAL</Text>
                <Text style={{ ...styles.ingredientBottomText, flex: 0.5, textAlign: 'right' }}>R${this.getTotalPrice()}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ingredientsHeader}>
                    <Text style={styles.ingredientsHeaderText}>INGREDIENTES</Text>
                </View>
                <View style={styles.ingredientsBody}>
                    {this.renderIngredients()}
                </View>
                <View style={styles.ingredientsBottom}>
                    {this.renderIngredientsTotal()}
                </View>
            </View>
        )
    }

}

const mapStateToProps = state => ({
    item: state.assembler.item
})

export default connect(mapStateToProps)(Cart)