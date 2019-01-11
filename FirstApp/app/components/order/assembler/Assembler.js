import React from 'react';
import { Animated, Easing, ScrollView, TouchableWithoutFeedback, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './AssemblerStyles';
import { ingredients } from '../../../resourcers/mockers';

class Assembler extends React.Component {

    constructor(props) {
        super(props);
        this.margins = [];
        this.state = {
            expand: false
        }
    }

    handlePressItem() {
        const { expand } = this.state;
        this.animatedMargin(!expand);
        this.setState({ expand: !expand });
    }

    animatedMargin(expand) {
        const { item } = this.props;
        const { ingredients } = item;
        Animated.parallel([
            this.margins.map((item, index) => (
                Animated.timing(item, {
                    toValue: expand ? -40 : ingredients[index].align.marginBottom,
                    duration: 1000,
                    easing: Easing.elastic(),
                    delay: 0
                }).start()
            ))
        ])
    }

    renderItemIngredients() {
        const { item } = this.props;
        const { ingredients } = item;

        if (!ingredients) {
            return null;
        }

        return ingredients.map((igrendient, index) => {
            const { align, img } = igrendient;
            return (
                <Animated.Image key={index} style={
                    {
                        ...styles.itemIngredient,
                        marginBottom: this.margins[index] ? this.margins[index] : align.marginBottom,
                        zIndex: ingredients.length - (index - 1)
                    }
                } source={img} />
            )
        })
    }

    renderIngredients() {
        return <FlatList
            data={ingredients}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({ item }, index) => (<Image key={index} style={styles.ingredient} source={item.img} />)} />
    }

    render() {
        return (
            <View style={styles.container} >
                <ScrollView contentContainerStyle={{ flexGrow: 1}}>
                    <TouchableWithoutFeedback style={styles.itemIngredients} onPress={this.handlePressItem.bind(this)}>
                        <View style={styles.itemIngredients}>
                            {this.renderItemIngredients()}
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
                {/* <View style={styles.ingredients}>
                    {this.renderIngredients()}
                </View> */}
            </View>
        )
    }

    componentWillMount() {
        const { item } = this.props;
        const { ingredients } = item;
        if (!ingredients) {
            return;
        }
        this.margins = ingredients.map(({ align }) => (
            new Animated.Value(align.marginBottom)
        ));
    }

}

const mapStateToProps = state => ({
    item: state.assembler.item
})

export default connect(mapStateToProps)(Assembler)