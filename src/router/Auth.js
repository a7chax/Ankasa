import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	Login,
	LoginFingerprint,
	ForgotPassword
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='ForgotPassword' headerMode>			
      		<Stack.Screen name="Login" component={Login} />			
      		<Stack.Screen name="LoginFingerprint" component={LoginFingerprint} />	
      		<Stack.Screen name="ForgotPassword" component={ForgotPassword} />	
		</Stack.Navigator>
	)
}

export default Auth;