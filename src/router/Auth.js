import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	Login
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='Login' headerMode>			
      		<Stack.Screen name="Login" component={Login} />			
		</Stack.Navigator>
	)
}

export default Auth;