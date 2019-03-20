import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';

export default createStackNavigator({
	Login: { screen: Login },
	Signup: { screen: Signup },
	Chat: { screen: Chat }
});
