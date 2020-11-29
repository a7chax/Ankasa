import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Button} from 'react-native-paper';
import {ButtonWelcome, ButtonSignIn, ButtonSignUp} from '../../../components';

const Register = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <Image source={require('../../../assets/illustration/vector02.png')} />
        <Text style={styles.Text1}>Ankasa</Text>
      </View>

      <View>
        <Text style={styles.Text2}>Register</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.inputItem}>
          <TextInput
            placeholder="Full Name"
            autoCapitalize={'none'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
            returnKeyType="next"
            underlineColorAndroid="#fff"
          />
        </View>

        <View style={styles.inputItem}>
          <TextInput
          fontFamily= 'Lato-Regular'
            placeholder="Email"
            autoCapitalize={'none'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
            returnKeyType="next"
            underlineColorAndroid="#fff"
          />
        </View>

        <View style={styles.inputItem}>
          <TextInput
            placeholder="Password"
            autoCapitalize={'none'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
            returnKeyType="next"
            underlineColorAndroid="#fff"
          />
          <Image
            style={{position: 'absolute',right: '0%'}}
            source={require('../../../assets/illustration/eye.png')}
          />
        </View>

        <View style={{marginTop: 60}}>
          <ButtonSignUp
          fontFamily='Poppins-SemiBold'
            title="Sign Up"
            mode="contained"
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{marginLeft: '10%', marginTop: '8%'}}
          source={require('../../../assets/illustration/checkbox.png')}
        />
        <Text style={{marginLeft: '3%', marginTop: '8%', fontFamily: 'Lato-Regular'}}>
          Accept terms and condition
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <Image
          style={{marginTop: '10%'}}
          source={require('../../../assets/illustration/divider.png')}
        />
        <Text style={{margin: '4%', fontFamily: 'Lato-Regular'}}>Already have an account?</Text>

        <View style={{marginTop: 20}}>
        <TouchableOpacity 
          disabled={loading}
          loading={loading}
          onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={styles.signin}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
  nav: {marginLeft: '10%', marginTop: '10%', flexDirection: 'row'},
  Text1: {fontFamily: 'Poppins-SemiBold', fontSize: 24, marginLeft: 10},
  Text2: {
    marginLeft: '10%',
    marginTop: '15%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
  },
  signin: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#2395FF',
    textAlign: 'center',
    borderRadius: 10,
    paddingLeft: 125,
    paddingRight: 125,
    color: '#2395FF',
    padding: 6,
  },
  inputItem: {
    //  padding: 5,
    //  borderWidth: 1,
    //  borderColor: '#333',
    //  marginVertical: 5,
    fontFamily: 'Lato-Regular',
    marginTop: '6%',
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D2C2FF',
    overflow: 'hidden',
  },
});
