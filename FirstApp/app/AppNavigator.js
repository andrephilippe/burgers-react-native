import { createStackNavigator } from 'react-navigation';
import Menu from './screens/menu/Menu';
import Welcome from './screens/welcome/Welcome';
import Order from './screens/order/Order';

const AppNavigator = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        Menu: { screen: Menu },
        Order: { screen: Order }
    }, {
        initialRouteName: 'Welcome'
    }
);

export default AppNavigator