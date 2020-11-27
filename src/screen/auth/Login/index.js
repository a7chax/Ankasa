
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-paper';
import {ButtonWelcome, ButtonSignIn, ButtonSignUp} from '../../../components';

const Login = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState(false);

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
            placeholder="Username"
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
            style={{marginLeft: '65%'}}
            source={require('../../../assets/illustration/eye.png')}
          />
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
        <Text
          style={styles.Text3}>
          Tap here for reset
        </Text>

        <Image
          style={{marginTop: '10%'}}
          source={require('../../../assets/illustration/divider.png')}
        />
        <Text style={{margin: '4%', fontSize: 14}}>or sign in with</Text>

        <View style={{flexDirection: 'row'}}>
          {/* <Button backgroundColor="pink" mode="outlined" onPress={() => console.log('Pressed')}> */}
          <Image
            style={{margin: '5%'}}
            source={require('../../../assets/illustration/google.png')}></Image>
          {/* </Button> */}

          {/* <Button  color="#4175DF" mode="outlined" onPress={() => console.log('Pressed')}> */}

          <Image
            style={{margin: '5%'}}
            source={require('../../../assets/illustration/facebook.png')}></Image>
          {/* </Button> */}
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
