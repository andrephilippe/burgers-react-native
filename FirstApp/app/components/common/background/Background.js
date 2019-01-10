import React from 'react';
import Styles from './BackgroundStyles';
import { Image, View } from 'react-native';

const Background = props => {
    const { image } = props;
    return <Image source={image} style={Styles.container} />
}

export default Background
