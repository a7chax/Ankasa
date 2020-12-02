import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import styles from './notification.style.js';
import {Navigation} from '../../../components/';
import {useSelector, useDispatch} from 'react-redux';
import {getNotif} from '../../../redux/actions/DetailBooking';
import moment from 'moment';

function Notification({navigation}) {
  const clearNotification = () => {};
  const [loading, setLoading] = useState(false);

  const {token} = useSelector((state) => state.Auth);
  const {dataNotif} = useSelector((state) => state.DetailBooking);

  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getNotif(token, (res) => setLoading(false)));

    // console.log(dataNotif)
  }, []);

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size="small" color="#2395FF" />
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 20}}>
        <Navigation
          onPress={() => goBack()}
          pageTitle={'Clear'}
          pageTitleEvent={() => clearNotification()}
        />
      </View>

      <View style={styles.makeColumn}>
        <View>
          <Text style={styles.textLarge}>Notifications</Text>
        </View>

        {dataNotif.length ? null : (
          <Text style={{fontSize: 19}}>Data tidak ditemukan</Text>
        )}
        {dataNotif.map((item, index) => {
          return (
            <View key={index} style={styles.boxNotif}>
              <View style={styles.innerNotifPos}>
                <View>
                  <Text style={styles.notifTitle}>{item.title}</Text>
                </View>
                <View>
                  <Text style={styles.notifDesc}>{item.description}</Text>
                </View>
                <View>
                  <Text style={styles.notifDate}>{item.created_at}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
export default Notification;
