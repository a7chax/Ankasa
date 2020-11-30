import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Notification, DetailBooking} from '../screen/';
import Home from './Home';

const Stack = createStackNavigator();

function User() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="DetailBooking" component={DetailBooking} />
    </Stack.Navigator>
  );
}

export default User;
