import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	Login,
	LoginFingerprint
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='LoginFingerprint' headerMode>			
      		<Stack.Screen name="Login" component={Login} />			
      		<Stack.Screen name="LoginFingerprint" component={LoginFingerprint} />	
		</Stack.Navigator>
	)
}

export default Auth;