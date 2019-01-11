// @flow
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styles from './MenuItemStyles';
import { withNavigation } from 'react-navigation';
import { setItem } from '../../../redux/actions/assemblerActions';

type Props = { ingredients: String, name: String };
class MenuItem extends React.Component<Props>{

    handleSelectItem(item) {
        const { navigation, setItem } = this.props;
        setItem(item, () => {
            navigation.navigate('Order');
        });
    }

    renderIngredients() {
        const { item } = this.props;
        const { ingredients } = item;
        if (!ingredients) {
            return null;
        }
        return ingredients.map((igrendient, index) => {
            const { align, img } = igrendient;
            return (
                <Image key={index} style={
                    {
                        ...Styles.ingredient,
                        marginBottom: align.marginBottom,
                        zIndex: ingredients.length - (index - 1)
                    }
                } source={img} />
            )
        })
    }

    render() {
        const { item } = this.props;
        const { name, price, ingredients } = item;
        return (
            <TouchableOpacity onPress={this.handleSelectItem.bind(this, item)}>
                <View style={Styles.container}>
                    <View style={Styles.text}>
                        <Text style={Styles.title}>{name}</Text>
                        <Text style={Styles.price}>
                            {price ? `R$${price}` : ''}
                        </Text>
                    </View>
                    {
                        ingredients ?
                            <View style={Styles.ingredients}>
                                {this.renderIngredients()}
                            </View>
                            : null
                    }
                </View>
            </TouchableOpacity>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
    setItem
}, dispatch)

export default connect(null, mapDispatchToProps)(withNavigation(MenuItem));