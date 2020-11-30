
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import React, { Component } from 'react';
import Svg from 'react-native-svg';
const { width } = Dimensions.get('window')

const TicketBackgroundSmall = () => {
  
    console.log("width", width)
    return (
      <>
      <View >
        <View style={{ width, height: 100, backgroundColor: 'cyan' }} />
        <View style={{ width, height: 500, backgroundColor: 'gray', alignItems: 'center' }} >
        <Svg.Polygon

        />
          <Text>I am text</Text>
        </View>
      </View>
      </>
    );
  
}



export default TicketBackgroundSmall


