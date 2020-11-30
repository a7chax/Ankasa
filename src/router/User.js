import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
	MyBooking,
	Notification,
	DetailBooking,
	FlightDetail
} from '../screen/';



const Stack = createStackNavigator();


function User() {
	return(
		<Stack.Navigator initialRouteName='FlightDetail' headerMode>			
			<Stack.Screen name="MyBooking" component={MyBooking} />			
			<Stack.Screen name="Notification" component={Notification} />			
			<Stack.Screen name="DetailBooking" component={DetailBooking} />			
			<Stack.Screen name="FlightDetail" component={FlightDetail} />
		</Stack.Navigator>
	)
}

export default User