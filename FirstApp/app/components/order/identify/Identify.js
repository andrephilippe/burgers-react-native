import React from 'react';
import Styles from './IdentifyStyles';
import KeyboardSpacer from "react-native-keyboard-spacer";
import { View, Alert, ScrollView, Platform } from 'react-native';
import IdentifyForm from './IdentifyForm';

class Identify extends React.Component {

    onSubmit(event) {
        Alert.alert(event.email);
    }

    render() {
        return (
            <View style={Styles.container}>
                <ScrollView style={{marginBottom: 40}}>
                    <IdentifyForm handleSubmit={this.onSubmit.bind(this)} />
                    {Platform.OS === "ios" && <KeyboardSpacer />}
                </ScrollView>
            </View>
        )
    }

}

export default Identify