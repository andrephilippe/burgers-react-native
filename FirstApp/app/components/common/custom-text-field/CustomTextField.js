import React from 'react';
import { View, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { compose } from 'recompose';
import { handleTextInput, withNextInputAutoFocusInput } from 'react-native-formik';
import { TextInputMask } from 'react-native-masked-text'
import styles from './CustomTextFieldStyles';

class CustomTextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    renderWithMask() {
        const { label, onChangeText, mask, maskType, textColor, baseColor } = this.props;
        const { value } = this.state;
        return (
            <TextInputMask
                type={maskType}
                onChangeText={value => { onChangeText(value); this.setState({ value }) }}
                value={value}
                customTextInput={Hoshi}
                customTextInputProps={{
                    label,
                    borderColor: baseColor,
                    labelStyle: {...styles.defaultLabel, color: textColor ? textColor : '#EEEEEE' },
                    inputStyle: {...styles.defaultInput, color: textColor ? textColor : '#FFFFFF' }
                }}
            />
        )
    }

    renderTextField() {
        const { label, onChangeText, textColor, baseColor } = this.props;
        const { value } = this.state;
        return (
            <Hoshi
                label={label}
                onChangeText={value => { onChangeText(value); this.setState({ value }) }}
                value={value}
                labelStyle={{...styles.defaultLabel, color: textColor ? textColor : '#EEEEEE' }}
                inputStyle={{...styles.defaultInput, color: textColor ? textColor : '#FFFFFF' }}
                borderColor={baseColor}
            />
        )
    }

    render() {
        const { maskType, errors, name } = this.props;
        return (
            <View style={styles.container}>
                {maskType ? this.renderWithMask() : this.renderTextField()}
                <Text style={styles.error}>{errors[name]}</Text>
            </View>
        )
    }

}

export default compose(handleTextInput, withNextInputAutoFocusInput)(CustomTextField)