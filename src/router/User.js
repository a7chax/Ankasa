import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Notification,
  DetailBooking,
  SearchFlight,
  SearchResult,
  FlightDetail,
  EditProfile,
} from '../screen/';
import Home from './Home';

const Stack = createStackNavigator();

function User() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="SearchFlight" component={SearchFlight} />
      <Stack.Screen name="DetailBooking" component={DetailBooking} />
      <Stack.Screen name="FlightDetail" component={FlightDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default User;
