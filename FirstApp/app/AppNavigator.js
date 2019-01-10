import { createStackNavigator } from 'react-navigation';
import Menu from './screens/menu/Menu';
import Welcome from './screens/welcome/Welcome';

const AppNavigator = createStackNavigator(
    {
        Welcome: { screen: Welcome },
        Menu: { screen: Menu }
    }, {
        initialRouteName: 'Welcome'
    }
);

export default AppNavigator