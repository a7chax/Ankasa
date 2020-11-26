import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import Routes from './src/router';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native'
import { Provider } from 'react-redux';
import configureStore from './src/redux/store'
import {Provider as PaperProvider  } from 'react-native-paper'
import {PersistGate} from 'redux-persist/integration/react'
import 'react-native-gesture-handler';


const App = () => {
  const {store, persistor} = configureStore();

  useEffect(() => {SplashScreen.hide()},[])
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
            <Routes />  
        </PaperProvider>
      </PersistGate>
    </Provider>
  )
}

export default App