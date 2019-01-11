import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#666666'
    },
    logo: {
        marginTop: Platform.OS === 'ios' ? 30 : 0,
        width: '60%',
        resizeMode: 'contain'
    }
});