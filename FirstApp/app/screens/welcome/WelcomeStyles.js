import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    slide: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    bannerTextView: {
        borderRadius: 30,
        marginBottom: 50,
        overflow: 'hidden',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    bannerText: {
        color: '#000000',
        fontSize: 17,
        padding: 20,
        backgroundColor: 'transparent'
    },
    buttonBottom: {
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        borderRadius: 0,
        borderWidth: 0,
        borderTopWidth: 1,
        borderTopColor: '#000000'
    }
});