import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    ingredientsHeader: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF'
    },
    ingredientsHeaderText:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center'
    },
    ingredientsBody: {
        flex: 0.7,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 30
    },
    ingredientRow: {
        flexDirection: 'row',
        height: 35
    },
    ingredientBodyText: {
        color: '#FFFFFF',
        fontSize: 18
    },
    ingredientsBottom: {
        flex: 0.15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 30
    },
    ingredientBottomText: {
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'left'
    }
});