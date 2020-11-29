import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Modal,
  TouchableOpacity,
  Keyboard,
  ToastAndroid,
  BackHandler,
  TouchcableOpacity,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paragraph,
  Portal,
  Title,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AuthLogout} from '../../redux/actions/Auth';
import {RectButton} from 'react-native-gesture-handler';
const style = StyleSheet.create({
  jumbotron: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.81)',
    width: '100%',
    height: 280,
    marginBottom: 50,
  },
});

const SearchFlight = (props) => {
  const dispatch = useDispatch();

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{backgroundColor: '#fff'}}>
        <View style={style.jumbotron}>
          <Image
            source={require('../../assets/illustration/destinasi.png')}
            style={{
              width: '100%',
              height: 280,
              resizeMode: 'cover',
              position: 'absolute',
              opacity: 0.5,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          />
          <View style={{padding: 15}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  style={{left: 15, top: 20}}
                  source={require('../../assets/illustration/btnback.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Image
                  style={{position: 'absolute', right: '0%', top: 20}}
                  source={require('../../assets/illustration/fullScreen.png')}
                />
              </View>
            </View>
            <View style={{marginVertical: 15}}>
              <Text
                style={{
                  top: 90,
                  fontFamily: 'Poppins-SemiBold',
                  left: '2%',
                  fontSize: 24,
                  fontFamily: 'Poppins-Bold',
                  color: '#fff',
                }}>
                Destinations
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '96%',
            height: 100,
            padding: 15,
            top: 210,
            left: '2%',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              borderRadius: 12,
              width: '100%',
              height: 100,
            }}>
            <Text
              style={{
                position: 'absolute',
                left: 20,
                top: 20,
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                color: '#979797',
              }}>
              From
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: 20,
                top: 40,
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
                color: '#000000',
              }}>
              Medan
            </Text>
            <Text
              style={{
                position: 'absolute',
                left: 20,
                top: 70,
                fontSize: 12,
                fontFamily: 'Lato-Regular',
                color: '#979797',
              }}>
              Indonesia
            </Text>
            <Image
              source={require('../../assets/illustration/switch2.png')}
              style={{position: 'absolute', left: '50%', top: '50%'}}
            />
            <Text
              style={{
                position: 'absolute',
                top: 20,
                right: '0%',
                fontSize: 12,
                right: 20,
                fontFamily: 'Lato-Regular',
                color: '#979797',
              }}>
              To
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: 40,
                fontSize: 20,
                right: '0%',
                right: 20,
                fontFamily: 'Poppins-SemiBold',
                color: '#000000',
              }}>
              Tokyo
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: 70,
                fontSize: 12,
                right: '0%',
                right: 20,
                fontFamily: 'Lato-Regular',
                color: '#979797',
              }}>
              Japan
            </Text>
          </View>
        </View>

        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            top: 10,
            padding: 15,
          }}>
          <View style={{width: '50%', height: '50%'}}>
            <Text
              style={{
                backgroundColor: '#2395FF',
                textAlign: 'center',
                color: '#fff',
                fontFamily: 'Poppins-SemiBold',
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 6,
                fontSize: 14,
                padding: 10,
                left: 10,
              }}>
              One Way
            </Text>
          </View>

          <View style={{width: '50%'}}>
            <Text
              style={{
                backgroundColor: '#F0F0F0',
                textAlign: 'center',
                color: '#595959',
                fontFamily: 'Poppins-SemiBold',
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 6,
                fontSize: 14,
                padding: 10,
                right: 10,
              }}>
              Round Trip
            </Text>
          </View>
        </View>

        <View style={{flex: 1, padding: 15}}>
          <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
            Departure
          </Text>
        </View>

        <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#6B6B6B',
                padding: 10,
                borderRadius: 6,
                borderColor: '#DDDDDD',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 20,
              }}>
              Monday, 20 July 2020
            </Text>
            
          <Image style={{position:'absolute', right: '0%', top: 15, right: 30}} 
          source={require('../../assets/illustration/iconright.png')} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, padding: 15}}>
          <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
            How many person?
          </Text>
        </View>

        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 15,
          }}>
          <View style={{width: '50%', height: '50%'}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Poppins-SemiBold',
                borderColor: '#DDDDDD',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 6,
                fontSize: 14,
                padding: 10,
                left: 10,
              }}>
              2 Child
            </Text>

            
          <Image style={{position:'absolute', right: '0%', top: 15, right: 20}} 
          source={require('../../assets/illustration/iconright.png')} />
          </View>

          <View style={{width: '50%'}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Poppins-SemiBold',
                marginLeft: 20,
                marginRight: 20,
                borderColor: '#DDDDDD',
                borderWidth: 1,
                borderRadius: 6,
                fontSize: 14,
                padding: 10,
                right: 10,
              }}>
             4 Adult
            </Text>
            
          <Image style={{position:'absolute', right: '0%', top: 15, right: 40}} 
          source={require('../../assets/illustration/iconright.png')} />
          </View>
        </View>

        <View style={{flex: 1, padding: 15}}>
          <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
          Which class do you want?
          </Text>
        </View>

        <View
          style={{
            // flex: 1,
            flexDirection: 'row',
            backgroundColor: '#fff',
            padding: 15,
          }}>

              
          <Image style={{top:10}} 
          source={require('../../assets/illustration/radiobtn.png')} />
          <View style={{width: '40%', height: '50%'}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Poppins-SemiBold',
               
                marginRight: 20,
                borderRadius: 6,
                fontSize: 14,
                padding: 10,
              }}>
              Bussiness
            </Text>
          </View>

          
          <Image style={{top:10, right: 40}} 
          source={require('../../assets/illustration/radiobtn.png')} />
          

          <View style={{width: '40%'}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Poppins-SemiBold',
                marginRight: 20,
                
                fontSize: 14,
                padding: 10,
                right: 40,
              }}>
             4 Adult
            </Text>
          </View>
          <Image style={{top:10, right: 70}} 
          source={require('../../assets/illustration/radiobtn.png')} />

          <View style={{width: '40%'}}>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Poppins-SemiBold',
                marginRight: 20,
                
                fontSize: 14,
                padding: 10,
                right: 60,
              }}>
             First Class
            </Text>
          </View>
        </View>

        <View style={{flex: 1, padding: 15}}>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#fff'
                , backgroundColor: '#2395FF',
                padding: 10,
                borderRadius: 10,
                borderColor: '#DDDDDD',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 20,
                textAlign:'center'
              }}>
              SEARCH FLIGHT
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default SearchFlight;
