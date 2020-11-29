import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	SearchResult
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='Welcome' headerMode>
			<Stack.Screen name="SearchResult" component={SearchResult} />
			</Stack.Navigator>
	)
}

export default Auth;