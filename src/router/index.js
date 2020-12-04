import React from 'react';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import Auth from './Auth';
import User from './User';

const Stack = createStackNavigator();

function Routes() {
  React.useEffect(() => {
    SplashScreen.hide();

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate(remoteMessage.data.type);
    });    
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
