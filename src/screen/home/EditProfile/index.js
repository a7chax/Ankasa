import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { GetProfile } from '../../../redux/actions/Profiles';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../../redux/actions/EditProfile'
import Icons from 'react-native-vector-icons/Feather'

const EditProfile = (props) => {
  const [phoneNumber, setPhoneNumber] = useState([])
  const [email, setEmail] = useState([])
  const [username, setUsername] = useState([])
  const [city, setCity] = useState([])
  const [address, setAddress] = useState([])
  const [postcode, setPostcode] = useState([])


  const dispatch = useDispatch();
  const { token } = useSelector((s) => s.Auth);
  const { data } = useSelector((s) => s.Profiles);

  const submitEdit = () => {
    let data = {
      username: username,
      postcode: postcode,
      address: address
    }

    dispatch(editProfile(data, token))
    ToastAndroid.show('Success edit profile', ToastAndroid.SHORT)
    props.navigation.goBack('Profile')

    const callbackHandler = (err) => {


      if (err) return false;
      // navigation.replace('HomeProfile');
    };
    dispatch(GetProfile(token, callbackHandler));
  }



  useEffect(() => {
    const callbackHandler = (err) => {

      if (err) return false;
      // navigation.replace('HomeProfile');
    };
    dispatch(GetProfile(token, callbackHandler));


    console.log('data edit profile', data)

    setPhoneNumber(data.phone)
    setEmail(data.email)
    setUsername(data.username)
    setCity(data.city)
    setAddress(data.address)
    setPostcode(data.postcode)




  }, [])


  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View
        style={styles.ankasa}>
        <TouchableOpacity onPress={() => props.navigation.pop()} style={{ flexDirection: 'row' }}>
          <Icons name="chevron-left" size={28} color="#000" />
          <Text style={{ marginLeft: 10, fontSize: 18, fontFamily: "Poppins-SemiBold" }}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25 }}>
        <Text
          style={styles.profileText}>
          P R O F I L E
        </Text>
        <Text
          style={styles.ankasaText2}>
          Profile
        </Text>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25 }}>
        <Text
          style={styles.Textsama2}>
          Username
        </Text>
        <View style={styles.inputItem}>
          <TextInput
            value={username}
            style={{ width: '90%' }}
            autoCapitalize={'none'}
            onChangeText={(text) => setUsername(text)}
            returnKeyType="next"
          />
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25 }}>
        <Text
          style={styles.Textsama2}>
          City
        </Text>
        <View style={styles.inputItem}>
          <TextInput
            editable={false}
            value={city}
            style={{ width: '90%', color: 'gray' }}
            autoCapitalize={'none'}
            onChangeText={(text) => setCity(text)}
            returnKeyType="next"

          // underlineColorAndroid="#fff"
          // secureTextEntry={secure}
          />
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25 }}>
        <Text
          style={styles.Textsama2}>
          Address
        </Text>
        <View style={styles.inputItem}>
          <TextInput
            value={address}
            style={{ width: '90%' }}
            placeholder="Medan"
            autoCapitalize={'none'}
            onChangeText={(text) => setAddress(text)}
            returnKeyType="done"
          />
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 25 }}>
        <Text
          style={styles.Textsama2}>
          Post Code
        </Text>
        <View style={styles.inputItem}>
          <TextInput
            value={postcode}
            style={{ width: '90%' }}
            placeholder="5555"
            autoCapitalize={'none'}
            onChangeText={(text) => setPostcode(text)}
            returnKeyType="done"

          // underlineColorAndroid="#fff"
          // secureTextEntry={secure}
          />
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25, paddingBottom: 30 }}>
        <View style={{ width: '50%', position: 'absolute', right: '0%' }}>
          <TouchableOpacity onPress={() => submitEdit()}>
            <Text
              style={styles.button}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: '#fff', padding: 25 }}></View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  inputItem: {
    //  padding: 5,
    //  borderWidth: 1,
    //  borderColor: '#333',
    //  marginVertical: 5,
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 7,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D2C2FF',
    overflow: 'hidden',
  },
  ankasa: { paddingTop: 50, marginHorizontal: 25 },
  ankasaText: {
    top: 15,
    left: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
  },
  profileText: {
    top: 15,
    left: 10,
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#2395FF',
  },
  Textsama: {
    left: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  Textsama2: {
    left: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#9B96AB',
  },
  ankasaText2: {
    top: 15,
    left: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  button: {
    backgroundColor: '#2395FF',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    right: 5,
  }
});
