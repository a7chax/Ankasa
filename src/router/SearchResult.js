import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	SearchResult,
	SearchFlight
} from '../screen'


const Stack = createStackNavigator();


function Auth() {
	return(
		<Stack.Navigator initialRouteName='SearchFlight' headerMode>
			<Stack.Screen name="SearchResult" component={SearchResult} />
			
			<Stack.Screen name="SearchFlight" component={SearchFlight}/>
			</Stack.Navigator>
	)
}

export default Auth;