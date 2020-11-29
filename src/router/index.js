import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth'
import SearchResult from './SearchResult'


const Stack = createStackNavigator();

function Routes(){
	return(
		<NavigationContainer>
			<Stack.Navigator initialRouteName="SearchResult" headerMode>				
				<Stack.Screen name="Auth" component={Auth}/>
				<Stack.Screen name="SearchResult" component={SearchResult}/>
			
			</Stack.Navigator>
		</NavigationContainer>
		)
}

export default Routes