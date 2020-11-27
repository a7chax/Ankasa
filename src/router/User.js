import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	MyBooking,
	Notification
} from '../screen/';



const Stack = createStackNavigator();


function User() {
	return(
		<Stack.Navigator initialRouteName='Notification' headerMode>			
			<Stack.Screen name="MyBooking" component={MyBooking} />			
			<Stack.Screen name="Notification" component={Notification} />			
		</Stack.Navigator>
	)
}

export default User