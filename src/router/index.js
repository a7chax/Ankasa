import React from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Auth from './Auth';
import User from './User';

const Stack = createStackNavigator();

function Routes() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  const {isLogin} = useSelector((state) => state.Auth);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLogin ? 'User' : 'Auth'} headerMode>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
