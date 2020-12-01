import React, {Fragment, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-paper';
import {NavigationWhite, Navigation} from '../../../components/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './flightdetail.style';
import {PlaneBig} from '../../../assets/';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Facilities} from '../../../components';
import {
  GetDetailFlight,
  postTransfer,
} from '../../../redux/actions/DetailFlight';
import {GetMyBooking} from '../../../redux/actions/MyBooking';
import {useDispatch, useSelector} from 'react-redux';

function FlightDetail(props) {
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const {data} = useSelector((state) => state.DetailFlight);
  // const { items } = route.params;

  const kembali = () => {
    props.navigation.goBack('SearchResult');
  };

  const {
    adult,
    asal,
    child,
    classSuite,
    id,
    roundTrip,
    departure_at,
  } = props.route.params;

  const berasal = asal.substring(0, 3);

  const SubmitBooking = () => {
    const data = {
      id_class: id,
      departure_at,
      adult,
      child,
      type: roundTrip ? 0 : 1,
      from: asal,
    };

    postTransfer(data, token, (err, res) => {
      if (err) return console.log(res);
      dispatch(
        GetMyBooking(token, (err2) => {
          props.navigation.navigate('Home', {screen: 'MyBooking'});
        }),
      );
    });
  };

  function ticketPrice(params) {
    if (params == 'Economy') {
      let price = 14500 * adult + 1200 * child;
      return price;
    } else if (params == 'Bussiness') {
      let price = 15500 * adult + 1300 * child;
      return price;
    }

    if (params == 'First Class') {
      let price = 17500 * adult + 2000 * child;
      return price;
    }
  }

  const getDetailFlight = () => {
    setLoading(true);
    const callbackHandler = (err, res) => {
      setLoading(false);

      if (err) return false;
    };
    dispatch(GetDetailFlight(props.route.params.id, callbackHandler));
  };

  useEffect(() => {
    getDetailFlight();
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
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
    <Fragment>
      <StatusBar />
      <ScrollView style={{backgroundColor: '#FFFFFF'}}>
        <View style={{zIndex: 2, position: 'relative'}}>
          <Image
            source={{
              uri:
                'https://trello-attachments.s3.amazonaws.com/5fbf5d2183cb926b6cc3ed80/5fbf9db5112762381793143d/52756e740075b2e8523aa319aa3fc9d0/vector_02.png',
            }}
            style={styles.planeBackground}
            resizeMode="contain"
          />
        </View>

        <View style={styles.backgroundFlight} />

        <View style={{position: 'absolute', zIndex: 2, marginTop: 20}}>
          <NavigationWhite onPress={() => kembali()} />
        </View>

        <View style={styles.makeColumn}>
          <View style={styles.boxFlight}>
            <View style={[styles.innerBox, {marginTop: 30}]}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.destinationText}>
                    {asal.substr(0, 5)}
                  </Text>
                  <Text style={[styles.estimated, {textAlign: 'left'}]}>
                    12:33
                  </Text>
                </View>

                <View style={{marginTop: 12}}>
                  <Icon name="plane-departure" size={20} color="#979797" />
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.destinationText}>
                    {data?.city ? data.city.substr(0, 5) : ''}
                  </Text>
                  <Text style={[styles.estimated, {textAlign: 'right'}]}>
                    12:33
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: null,
                    height: 90,
                    flex: 1,
                    alignSelf: 'flex-start',
                    marginRight: 120,
                  }}>
                  <Image
                    source={{
                      uri: data?.air_photo,
                    }}
                    style={{width: null, height: 70}}
                    resizeMode="contain"
                  />
                </View>

                <View style={{flexDirection: 'column', marginTop: 10}}>
                  <AirbnbRating
                    starContainerStyle={{marginBottom: 7}}
                    showRating={false}
                    selectedColor={'#FF7F23'}
                    count={4}
                    defaultRating={data?.air_star}
                    size={18}
                    isDisabled={true}
                  />
                  <Text style={styles.textReview}>
                    {data?.air_review} review
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  marginTop: 10,
                }}>
                <View style={{flexDirection: 'column', flexBasis: 60}}>
                  <Text style={styles.detailTitle}>Code</Text>
                  <Text style={styles.detailSubtitle}>{data?.id}</Text>
                </View>

                <View style={{flexDirection: 'column', flexBasis: 65}}>
                  <Text style={styles.detailTitle}>Class</Text>
                  <Text>
                    {classSuite == 1
                      ? 'Economy'
                      : classSuite == 2
                      ? 'Business'
                      : 'First Class'}
                  </Text>
                </View>

                <View style={{flexDirection: 'column', flexBasis: 55}}>
                  <Text style={styles.detailTitle}>Terminal</Text>
                  <Text style={styles.detailSubtitle}>{data?.terminal}</Text>
                </View>

                <View style={{flexDirection: 'column', flexBasis: 60}}>
                  <Text style={styles.detailTitle}>Gate</Text>
                  <Text style={styles.detailSubtitle}>{data?.gate}</Text>
                </View>
              </View>
            </View>

            <View style={[styles.innerBox, {marginTop: 25}]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 15,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'rgba(35, 149, 255, 0.18)',
                      width: 38,
                      height: 38,
                      borderRadius: 100 / 2,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 5,
                        color: '#2395FF',
                        fontSize: 18,
                        fontFamily: 'Poppins-Bold',
                      }}>
                      {child}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 10,
                      marginTop: 7,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Child
                  </Text>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'rgba(35, 149, 255, 0.18)',
                      width: 38,
                      height: 38,
                      borderRadius: 100 / 2,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 5,
                        color: '#2395FF',
                        fontSize: 18,
                        fontFamily: 'Poppins-Bold',
                      }}>
                      {adult}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 10,
                      marginTop: 7,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Adult{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={{marginLeft: 30}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 16,
                color: '#000000',
              }}>
              Facilities
            </Text>
          </View>

          <ScrollView
            horizontal={true}
            style={{marginTop: 15, marginLeft: 15}}
            showsHorizontalScrollIndicator={false}>
            <Facilities />
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 35,
              marginHorizontal: 25,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 14,
                  lineHeight: 42,
                }}>
                Total you’ll pay
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 24,
                  color: '#2395FF',
                }}>
                $ {data?.price}
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.makeColumn, {marginTop: 15, marginBottom: 14}]}>
          <Button style={styles.buttonBooking} onPress={SubmitBooking}>
            <Text style={styles.textButtonBooking}>BOOK FLIGHT</Text>
          </Button>
        </View>
      </ScrollView>
    </Fragment>
  );
}

export default FlightDetail;
