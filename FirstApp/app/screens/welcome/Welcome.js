import React from 'react';
import { View, Text } from 'react-native';
import styles from './WelcomeStyles';
import Swiper from 'react-native-swiper';
import Background from '../../components/common/background/Background';
import ButtonAI from '../../components/common/button/ButtonAI';
import SwiperDot from '../../components/common/swiper-dot/SwiperDot';
import SwiperActiveDot from '../../components/common/swiper-active-dot/SwiperActiveDot';

class Home extends React.Component {

    static navigationOptions = { header: null };

    handleContinue() {
        const { navigation } = this.props;
        navigation.navigate('Menu')
    }

    render() {
        return (
            <View style={styles.container} >
                <Swiper
                    dot={<SwiperDot />}
                    activeDot={<SwiperActiveDot />}
                    showsButtons={true}>
                    <View style={styles.slide}>
                        <View style={styles.bannerTextView}>
                            <Text style={styles.bannerText}>Que tal montar o seu próprio Lanche?</Text>
                        </View>
                        <Background image={require('../../assets/slide1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.bannerTextView}>
                            <Text style={styles.bannerText}>Aqui é do seu jeito!</Text>
                        </View>
                        <Background image={require('../../assets/slide2.jpg')} />
                    </View>
                </Swiper>
                <ButtonAI customStyle={styles.buttonBottom} title="CONTINUAR" underlayColor="#2bb12a" onPress={this.handleContinue.bind(this)} />
            </View>
        );
    }

}

export default Home;