import React from 'react';
import { View, Text, Button } from 'react-native';
import Styles from './WelcomeStyles';
import Swiper from 'react-native-swiper';
import Background from '../../components/common/background/Background';

class Home extends React.Component {

    static navigationOptions = { header: null };

    handleContinue() {
        const { navigation } = this.props;
        navigation.navigate('Menu')
    }

    render() {
        return (
            <View style={Styles.container} >
                <Swiper showsButtons={true}>
                    <View style={Styles.slide}>
                        <Text style={Styles.bannerText}>Que tal montar o seu próprio Lanche?</Text>
                        <Background image={require('../../assets/slide1.jpg')} />
                    </View>
                    <View style={Styles.slide}>
                        <Text style={Styles.bannerText}>Aqui é do seu jeito!</Text>
                        <Background image={require('../../assets/slide2.jpg')} />
                    </View>
                </Swiper>
                <Button onPress={this.handleContinue.bind(this)} title="CONTINUAR" color="#2bb12a" style={Styles.buttonBottom} />
            </View>
        );
    }

}

export default Home;