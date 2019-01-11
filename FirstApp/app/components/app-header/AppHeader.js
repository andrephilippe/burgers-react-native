import React from 'react';
import { View, Image } from 'react-native';
import styles from './AppHeaderStyles';

class AppHeader extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </View>
        )
    }

}

export default AppHeader