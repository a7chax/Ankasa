import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	MyBooking

} from '../screen/';



const Stack = createStackNavigator();


function User() {
	return(
		<Stack.Navigator initialRouteName='MyBooking' headerMode>			
			<Stack.Screen name="MyBooking" component={MyBooking} />			
		</Stack.Navigator>
	)
}

export default User