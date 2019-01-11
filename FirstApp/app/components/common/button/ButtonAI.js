import React from 'react';
import Styles from './ButtonAIStyles';
import { TouchableOpacity, Text } from 'react-native';

const ButtonAI = props => {
    const { onPress, underlayColor, title, customStyle } = props;
    return <TouchableOpacity
        style={{ ...Styles.container, ...customStyle }}
        onPress={onPress.bind(this)}
        underlayColor={underlayColor}>
        <Text style={Styles.title}>{title}</Text>
    </TouchableOpacity>
}

export default ButtonAI
