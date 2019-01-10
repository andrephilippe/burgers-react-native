import React from 'react';
import { View, Image } from 'react-native';
import Styles from './AppHeaderStyles';

class AppHeader extends React.Component{

    render(){
        return (
            <View style={Styles.container}>
                <Image style={Styles.logo} source={require('../../assets/logo.png')} />
            </View>
        )
    }

}

export default AppHeader