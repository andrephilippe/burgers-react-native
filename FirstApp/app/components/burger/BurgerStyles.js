import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        height: 100,
        marginTop: 3,
        borderBottomLeftRadius: 100
    },
    burgerText: {
        flex: 0.7,
        paddingRight: 30
    },
    burgerTitle: {
        fontSize: 22,
        color: '#444444',
        textAlign: 'right'
    },
    burgerPrice: {
        fontSize: 32,
        color: '#444444',
        textAlign: 'right'
    },
    burgerIngredients: {
        flex: 0.3,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 30
    },
    burgerIngredient: {
        width: '130%',
        resizeMode: 'contain'
    }
});