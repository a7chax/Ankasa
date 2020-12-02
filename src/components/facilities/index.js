import React, {Fragment, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function Snack() {
  return (
    <View
      style={{
        backgroundColor: '#6DDA6B',
        borderRadius: 10,
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
        <Icon name="hamburger" size={23} color="white" />

        <View style={{marginHorizontal: 30, marginTop: 3}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: 'white',
            }}>
            Snack
          </Text>
        </View>
      </View>
    </View>
  );
}

export function Wifi() {
  return (
    <View
      style={{
        backgroundColor: '#7861D7',
        borderRadius: 10,
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
        <Icon name="wifi" size={23} color="white" />

        <View style={{marginHorizontal: 30, marginTop: 3}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: 'white',
            }}>
            Wifi
          </Text>
        </View>
      </View>
    </View>
  );
}

export function RestRoom() {
  return (
    <View
      style={{
        backgroundColor: '#E45D32',
        borderRadius: 10,
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
        <Icon name="restroom" size={23} color="white" />

        <View style={{marginHorizontal: 30, marginTop: 3}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: 'white',
            }}>
            RestRoom
          </Text>
        </View>
      </View>
    </View>
  );
}

export function Fridge() {
  return (
    <View
      style={{
        backgroundColor: '#ebbd05',
        borderRadius: 10,
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
        <Icon name="tv" size={23} color="white" />

        <View style={{marginHorizontal: 30, marginTop: 3}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: 'white',
            }}>
            Media Player
          </Text>
        </View>
      </View>
    </View>
  );
}

export function VirtualReality() {
  return (
    <View
      style={{
        backgroundColor: '#42c5f5',
        borderRadius: 10,
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', marginVertical: 15, marginLeft: 20}}>
        <Icon name="vr-cardboard" size={23} color="white" />

        <View style={{marginHorizontal: 30, marginTop: 3}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              color: 'white',
            }}>
            Virtual Reality
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function Facilities(props) {
  const {classType} = props;
  return (
    <>
      {classType == 1 ? (
        <>
          <Snack />
          <Wifi />
        </>
      ) : classType == 2 ? (
        <>
          <Snack />
          <Wifi />
          <RestRoom />{' '}
        </>
      ) : (
        <>
          <Snack />
          <Wifi />
          <RestRoom />
          <Fridge />
          <VirtualReality />
        </>
      )}
    </>
  );
}
