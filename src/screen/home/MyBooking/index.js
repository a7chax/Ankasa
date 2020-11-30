import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {MobileNavigation} from '../../../components/';
import styles from './mybooking.style.js';
import {TicketBackgroundSmall} from '../../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';

function MyBooking() {
  const AppBar = () => (
    <View style={[styles.appBar]}>
      <Text style={[styles.appBarTitle]}>Explore</Text>

      <View style={[styles.appBarRight]}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            name="mail"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            name="bell"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <AppBar />

      <View style={styles.makeColumn}>
        <View style={styles.boxTicket}>
          <View style={styles.ineerCardPos}>
            <View>
              <Text style={styles.dateTicket}>Monday, 20 July ‘20 - 12:33</Text>
            </View>

            <View
              style={{flexDirection: 'row', marginTop: 10, marginBottom: 6}}>
              <View>
                <Text style={styles.destinationText}>IDN</Text>
              </View>
              <View style={{marginHorizontal: 20}}>
                <Icon name="plane-departure" size={25} color="#979797" />
              </View>

              <View>
                <Text style={styles.destinationText}>IDN</Text>
              </View>
            </View>

            <View>
              <Text style={styles.planeText}>Garuda Indonesia, AB-221</Text>
            </View>
          </View>

          <View style={styles.horizontalLine}></View>

          <View style={styles.statusPostion}>
            <View style={{marginVertical: 20}}>
              <Text style={styles.textStatus}>Status</Text>
            </View>

            <View style={{marginVertical: 20}}>
              <View style={styles.boxStatus}>
                <Text style={styles.statusDesc}>Waiting for payment</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MyBooking;
