import React, {Fragment, useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
  Text,
  DeviceEventEmitter,
  Platform,
  BackHandler,
} from 'react-native';
import {Button} from 'react-native-paper';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import styles from './loginfingerprint.style.js';
import {Navigation} from '../../../components/';
import {FingerPrintIcon} from '../../../assets';

const LoginFingerprint = (props) => {
  const [fingerprint, setFingerprint] = useState('');
  const [status, setStatus] = useState('Scan your finger here');

  useEffect(() => {
    const backHandle = BackHandler.addEventListener('hardwareBackPress', () =>
      BackHandler.exitApp(),
    );

    if (Platform.Version < 23) {
      fingerLegacy();
    } else {
      FingerprintScanner.authenticate({title: 'Open app'})
        .then(() => {
          setStatus('Success');
        })
        .catch((error) => {
          BackHandler.exitApp();
        });
    }

    return () => {
      backHandle.remove();
      FingerprintScanner.release();
    };
  }, []);

  const fingerLegacy = () => {
    FingerprintScanner.authenticate({
      onAttempt: handleAuthenticationAttemptedLegacy,
    })
      .then(() => {
        setStatus('Success');
      })
      .catch((error) => {
        console.log(error.biometric, error.message);
      });
  };

  const handleAuthenticationAttemptedLegacy = (error) => {
    console.log(error.message);
  };

  return (
    <Fragment>
      <ScrollView style={{backgroundColor: '#FFFFFF'}}>
        <Navigation
          onPress={() => BackHandler.exitApp()}
          pageTitle={'Regular Login'}
        />

        <View style={styles.makeColumn}>
          <View>
            <Text style={styles.textLarge}>Touch ID</Text>
          </View>

          <View>
            <Text style={styles.textParagraph}>
              Authenticate using app’s Touch ID instead of tentering your
              password
            </Text>
          </View>

          <View style={styles.fingerprint}>
            <FingerPrintIcon />
          </View>

          <Button style={styles.proceedButton}>
            <Text style={styles.textButton}>{status}</Text>
          </Button>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default LoginFingerprint;
