import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        width: '100%',
        alignItems: 'center'
    },
    menuItems: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    menuFlatList: {
        width: '100%'
    }
});