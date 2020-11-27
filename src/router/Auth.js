import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	Login,
	Welcome,
	Register
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='Welcome' headerMode>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />			
      		<Stack.Screen name="Register" component={Register} />			
		</Stack.Navigator>
	)
}

export default Auth;