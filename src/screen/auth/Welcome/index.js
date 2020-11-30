import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {ButtonWelcome, ButtonSignIn} from '../../../components';

const Welcome = (props) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../../assets/illustration/welcome-screen.png')}
        />
        <Text style={styles.text1}>Get Started</Text>
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Text>

        <View style={{marginTop: 60}}>
          <ButtonWelcome
            title="Create My Account"
            mode="contained"
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>

        <View style={{marginTop: 20}}>
          <ButtonSignIn
            title="Sign In"
            // mode="outlined"
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  text1: {fontFamily: 'Poppins-SemiBold', fontSize: 36},
  text2: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 14,
    lineHeight: 22,
    width: 285,
    height: 66,
  },
});