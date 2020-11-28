import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../screen';

import Icons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Booking"
      tabBarOptions={{
        activeTintColor: '#2395FF',
        tabStyle: {
          marginBottom: 10,
        },
        style: {
          height: 70,
          paddingHorizontal: 28,
        },
      }}>
      <Tab.Screen
        name="Booking"
        component={Profile}
        options={{
          tabBarLabel: 'My Booking',
          tabBarIcon: ({color}) => (
            <Icons name="calendar-outline" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: '#2395FF',
                height: 55,
                width: 55,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 55,
                marginTop: 22,
              }}>
              <Icons name="compass" color="#fff" size={28} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icons name="person-circle-outline" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
