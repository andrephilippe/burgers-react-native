import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#000000',
        color: '#FFFFFF'
    },
    background: {
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        zIndex: -1
    },
});