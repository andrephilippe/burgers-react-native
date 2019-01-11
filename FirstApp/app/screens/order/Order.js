import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Image } from 'react-native';
import styles from './OrderStyles';
import Assembler from '../../components/order/assembler/Assembler';
import Cart from '../../components/order/cart/Cart';
import Identify from '../../components/order/identify/Identify';
import SwiperDot from '../../components/common/swiper-dot/SwiperDot';
import SwiperActiveDot from '../../components/common/swiper-active-dot/SwiperActiveDot';

class Order extends React.Component {

    static navigationOptions = { header: null };

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    dot={<SwiperDot />}
                    activeDot={<SwiperActiveDot />}
                    paginationStyle={styles.pagination}
                    horizontal={true}
                    loop={false}>
                    <View style={styles.slide}>
                        <Assembler />
                    </View>
                    <View style={styles.slide}>
                        <Cart />
                    </View>
                    <View style={styles.slide}>
                        <Identify />
                    </View>
                </Swiper>
                <Image source={require('../../assets/bg.jpg')} style={styles.background} />
            </View>
        )
    }

}

export default Order