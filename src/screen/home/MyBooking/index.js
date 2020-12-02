import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Button} from 'react-native-paper';
import {MobileNavigation} from '../../../components/';
import styles from './mybooking.style.js';
import {TicketBackgroundSmall} from '../../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {GetMyBooking} from '../../../redux/actions/MyBooking';
import moment from 'moment';

function MyBooking({navigation}) {
  const {data} = useSelector((s) => s.MyBooking);
  const {token} = useSelector((s) => s.Auth);
  const [loading, setLoading] = useState(true);
  // const {username, city} = data;
  const dispatch = useDispatch();

  const VIEWABILITY_CONFIG = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  const gotoNotif = () => {
    navigation.navigate('Notification');
  };

  const gotoChat = () => {
    navigation.navigate('Chat');
  };

  React.useEffect(() => {
    LoadBooking();
  }, []);

  const LoadBooking = () => {
    setLoading(true);
    const callbackHandler = (err) => {
      setLoading(false);
      if (err) return false;
      // console.log(data);
      // console.log('data');
    };
    dispatch(GetMyBooking(token, callbackHandler));
  };

  const AppBar = () => (
    <View style={[styles.appBar]}>
      <Text style={[styles.appBarTitle]}>My Booking</Text>

      <View style={[styles.appBarRight]}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => gotoChat()}>
          <Icons
            name="mail"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}
          activeOpacity={0.6}>
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

  function formatDateView(param) {
    const dateString = param;
    const dateObj = new Date(dateString);
    const momentObj = moment(dateObj);
    const momentString = momentObj.format('dddd, D MMMM YYYY');

    return momentString;
  }

  const renderItem = ({item}) => {
    const bertujuan = item.destination.substring(0, 3);
    const berasal = item.from.substring(0, 3);
    return (
      <>
        <View style={styles.makeColumn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailBooking', {id: item.id})}
            style={styles.boxTicket}>
            <View style={styles.ineerCardPos}>
              <View>
                <Text style={styles.dateTicket}>
                  {formatDateView(item.departure_at)}
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 6}}>
                <View>
                  <Text style={styles.destinationText}>{item.from}</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                  <Icon name="plane-departure" size={25} color="#979797" />
                </View>

                <View>
                  <Text style={styles.destinationText}>{item.city}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.planeText}>
                  {item.airport_name}, {item.terminal}-{item.gate}
                </Text>
              </View>
            </View>

            <View style={styles.statusPostion}>
              <View style={{marginVertical: 20}}>
                <Text style={styles.textStatus}>Status</Text>
              </View>

              <View style={{marginVertical: 20}}>
                <View
                  style={[
                    styles.boxStatus,
                    {
                      backgroundColor:
                        item.status === 0 ? '#FF7F23' : '#4FCF4D',
                    },
                  ]}>
                  <Text style={styles.statusDesc}>
                    {item.status === 0 ? 'Waiting for payment' : 'Success'}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <AppBar />

      <FlatList
        refreshControl={
          <RefreshControl
            colors={['#9Bd35A', '#689F38']}
            refreshing={loading}
            onRefresh={LoadBooking}
          />
        }
        ListEmptyComponent={() => <Text>Kosong Bro</Text>}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MyBooking;
