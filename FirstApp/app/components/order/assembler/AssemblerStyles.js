import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent'
    },
    itemIngredients: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingBottom: '12%'
    },
    itemIngredient: {
        width: '60%',
        resizeMode: 'contain'
    },
    ingredients: {
        position: 'absolute',
        bottom: 0,
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
        flexDirection: 'row'
    },
    ingredient: {
        height: 40,
        width: 90,
        resizeMode: 'contain',
        marginLeft: 10,
        marginRight: 10
    }
});