import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth'

const Stack = createStackNavigator();

function Routes(){
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Auth" headerMode>				
				<Stack.Screen name="Auth" component={Auth}/>
			</Stack.Navigator>
		</NavigationContainer>
		)
}

export default Routes