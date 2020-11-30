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
import {Button} from 'react-native-paper';
import {ButtonWelcome, ButtonSignIn, ButtonSignUp} from '../../../components';

const Login = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secure, setSecure] = React.useState(true);

  const inputPassword = React.useRef();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <Image source={require('../../../assets/illustration/vector02.png')} />
        <Text style={styles.Text1}>Ankasa</Text>
      </View>

      <View>
        <Text style={styles.Text2}>Login</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={styles.inputItem}>
          <TextInput
            style={{width: '100%'}}
            placeholder="Username"
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

        <View style={{marginTop: '8%'}}>
          <ButtonSignUp
            title="Sign In"
            mode="contained"
            disabled={loading}
            loading={loading}
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>

        <Text style={{margin: '2%'}}>Did you forgot your password?</Text>
        <Text style={styles.Text3}>Tap here for reset</Text>

        <Image
          style={{marginTop: '10%'}}
          source={require('../../../assets/illustration/divider.png')}
        />
        <Text style={{margin: '4%', fontSize: 14}}>or sign in with</Text>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#2395FF',
              alignItems: 'center',
              borderRadius: 6,
              paddingLeft: 30,
              paddingRight: 30,
              color: '#2395FF',
              right: 20,
              padding: 15,
            }}>
            <TouchableOpacity>
              <Image
                style={{}}
                source={require('../../../assets/illustration/google.png')}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#2395FF',
              alignItems: 'center',
              borderRadius: 6,
              paddingLeft: 30,
              paddingRight: 30,
              color: '#2395FF',
              padding: 15,
            }}>
            <TouchableOpacity>
              <Image
                style={{}}
                source={require('../../../assets/illustration/facebook.png')}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#2395FF',
              alignItems: 'center',
              borderRadius: 6,
              paddingLeft: 30,
              paddingRight: 30,
              color: '#2395FF',
              padding: 15,
              left: 20,
            }}>
            <TouchableOpacity>
              <Image
                style={{}}
                source={require('../../../assets/illustration/finger.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
  Text3: {
    textDecorationLine: 'underline',
    textDecorationColor: '#2395FF',
    color: '#2395FF',
    margin: '1%',
  },
  inputItem: {
    //  padding: 5,
    //  borderWidth: 1,
    //  borderColor: '#333',
    //  marginVertical: 5,
    marginTop: '6%',
    flexDirection: 'row',
    width: '75%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D2C2FF',
    overflow: 'hidden',
  },
});
