import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import {ButtonWelcome, ButtonSignIn, ButtonSignUp} from '../../../components';

const Register = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [secure, setSecure] = React.useState(true);
  const inputEmail = React.useRef();
  const inputPassword = React.useRef();

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
            style={{width: '100%'}}
            autoCapitalize={'none'}
            onChangeText={(text) => setUsername(text)}
            onSubmitEditing={() => inputEmail.current.focus()}
            returnKeyType="next"
            underlineColorAndroid="#fff"
          />
        </View>

        <View style={styles.inputItem}>
          <TextInput
            ref={(input) => (inputEmail.current = input)}
            style={{width: '100%'}}
            fontFamily="Lato-Regular"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize={'none'}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => inputPassword.current.focus()}
            returnKeyType="next"
            underlineColorAndroid="#fff"
          />
        </View>

        <View style={styles.inputItem}>
          <TextInput
            style={{width: '90%'}}
            ref={(input) => (inputPassword.current = input)}
            placeholder="*******"
            autoCapitalize={'none'}
            onChangeText={(text) => setPassword(text)}
            returnKeyType="done"
            underlineColorAndroid="#fff"
            secureTextEntry={secure}
          />

          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={{position: 'absolute', right: '0%'}}>
            <Image source={require('../../../assets/illustration/eye.png')} />
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 40}}>
          <ButtonSignUp
            fontFamily="Poppins-SemiBold"
            title="Sign Up"
            mode="contained"
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: '10%',
          alignItems: 'center',
        }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          color="#2395FF"
          uncheckedColor="#2395FF"
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text
          style={{
            marginLeft: '3%',
            fontFamily: 'Lato-Regular',
          }}>
          Accept terms and condition
        </Text>
      </View>

      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Image source={require('../../../assets/illustration/divider.png')} />
        <Text style={{fontFamily: 'Lato-Regular', marginVertical: 10}}>
          Already have an account?
        </Text>

        <View style={{marginTop: 10}}>
          <TouchableOpacity
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signin}>Sign In</Text>
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
