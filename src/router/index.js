import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth'
import User from './User'

const Stack = createStackNavigator();

function Routes(){
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="User" headerMode>				
				<Stack.Screen name="Auth" component={Auth}/>
				<Stack.Screen name="User" component={User}/>
			</Stack.Navigator>
		</NavigationContainer>
		)
}

export default Routes