import React, {useEffect, Fragment, useState, useRef} from 'react';
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
  StatusBar,
  Picker,
  TouchableNativeFeedback,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
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
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import styles from './searchflight.style.js';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import moment from 'moment';
import {GetCity} from '../../../redux/actions/Booking';
import {GetProfile} from '../../../redux/actions/Profiles';

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
  const todayMoment = moment();
  const tomorrow = new Date();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [roundTrip, setRoundTrip] = useState(true);
  const [child, setChild] = useState(0);
  const [adult, setAdult] = useState(1);
  const [classSuite, setClassSuite] = useState('1');
  const [departDate, setDepartDate] = useState(todayMoment);
  const [returnDate, setReturnDate] = useState(
    todayMoment.clone().add(1, 'days'),
  );

  const [tujuan, setTujuan] = useState('');
  const [asal, setAsal] = useState('');

  const refRBSheetDepart = useRef();
  const refRBSheetReturn = useRef();
  const refRBSheetAsal = useRef();
  const refRBSheetTujuan = useRef();

  let controller;

  const setGoto = (city) => {
    setTujuan(city);
  };

  const setFromto = (city) => {
    setAsal(city);
  };

  function formatDateView(param) {
    const dateString = param;
    const dateObj = new Date(dateString);
    const momentObj = moment(dateObj);
    const momentString = momentObj.format('dddd, D MMMM YYYY');

    return momentString;
  }
  const departDateView = formatDateView(departDate);
  const returnDateView = formatDateView(returnDate);

  const {data} = useSelector((s) => s.Profiles);
  const {token} = useSelector((s) => s.Auth);
  const Booking = useSelector((s) => s.Booking);

  const searchResult = () => {
    props.navigation.navigate('SearchResult', {
      ...props.route.params,
      departure_at: moment(departDate).format(),
      depart: departDateView,
      asal: asal,
      child: child,
      adult: adult,
      classSuite: classSuite,
    });
  };

  useEffect(() => {
    dispatch(
      GetCity(() => {
        setLoading(false);
      }),
    );

    return () => {};
  }, []);

  const onPress = () => {};

  const kembali = () => {
    props.navigation.goBack('Home');
  };

  var radio_props = [
    {label: 'Economy', value: '1'},
    {label: 'Business', value: '2'},
    {label: 'First Class', value: '3'},
  ];

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
      <StatusBar
        translucent
        animated
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#fff'}}>
          <View style={style.jumbotron}>
            <Image
              source={{uri: props.route.params.photo}}
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
            <View style={{padding: 15, marginTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <TouchableNativeFeedback onPress={() => kembali()}>
                    <Image
                      style={{left: 15, top: 20}}
                      source={require('../../../assets/illustration/btnback.png')}
                    />
                  </TouchableNativeFeedback>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Image
                    style={{position: 'absolute', right: '0%', top: 20}}
                    source={require('../../../assets/illustration/fullScreen.png')}
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
              <View>
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
                <TouchableNativeFeedback
                  onPress={() => refRBSheetAsal.current.open()}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 20,
                      top: 40,
                      fontSize: 20,
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000000',
                    }}>
                    {asal == '' ? setAsal(data.city) : asal}
                  </Text>
                </TouchableNativeFeedback>
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
              </View>

              <Image
                source={require('../../../assets/illustration/switch2.png')}
                style={{position: 'absolute', left: '50%', top: '50%'}}
              />

              <View>
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

                <TouchableNativeFeedback
                // onPress={() => refRBSheetTujuan.current.open()}
                >
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
                    {props.route.params.city}
                  </Text>
                </TouchableNativeFeedback>

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
                  {props.route.params.name}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
              marginHorizontal: 25,
            }}>
            <Button
              style={roundTrip ? styles.buttonActive : styles.buttonNonActive}
              onPress={() => setRoundTrip(true)}>
              <Text
                style={
                  roundTrip
                    ? styles.textButtonActive
                    : styles.textButtonNonActive
                }>
                One Way
              </Text>
            </Button>

            <Button
              style={!roundTrip ? styles.buttonActive : styles.buttonNonActive}
              onPress={() => setRoundTrip(false)}>
              <Text
                style={
                  !roundTrip
                    ? styles.textButtonActive
                    : styles.textButtonNonActive
                }>
                Round trip
              </Text>
            </Button>
          </View>

          {roundTrip ? (
            <>
              <View style={{marginHorizontal: 25, marginTop: 20}}>
                <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                  Departure
                </Text>
              </View>

              <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
                <TouchableOpacity
                  onPress={() => refRBSheetDepart.current.open()}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000000',
                      padding: 10,
                      borderRadius: 6,
                      borderColor: '#DDDDDD',
                      borderWidth: 1,
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    {departDateView}
                  </Text>
                  <Image
                    style={{
                      position: 'absolute',
                      right: '0%',
                      top: 15,
                      right: 30,
                    }}
                    source={require('../../../assets/illustration/iconright.png')}
                  />
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={{marginHorizontal: 25, marginTop: 20}}>
                <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                  Departure
                </Text>
              </View>

              <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
                <TouchableOpacity
                  onPress={() => refRBSheetDepart.current.open()}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000000',
                      padding: 10,
                      borderRadius: 6,
                      borderColor: '#DDDDDD',
                      borderWidth: 1,
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    {departDateView}
                  </Text>
                  <Image
                    style={{
                      position: 'absolute',
                      right: '0%',
                      top: 15,
                      right: 30,
                    }}
                    source={require('../../../assets/illustration/iconright.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{marginHorizontal: 25, marginTop: 20}}>
                <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                  Return Date
                </Text>
              </View>

              <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
                <TouchableOpacity
                  onPress={() => refRBSheetReturn.current.open()}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      color: '#000000',
                      padding: 10,
                      borderRadius: 6,
                      borderColor: '#DDDDDD',
                      borderWidth: 1,
                      marginLeft: 20,
                      marginRight: 20,
                    }}>
                    {returnDateView}
                  </Text>
                  <Image
                    style={{
                      position: 'absolute',
                      right: '0%',
                      top: 15,
                      right: 30,
                    }}
                    source={require('../../../assets/illustration/iconright.png')}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}

          <View style={{flex: 1, marginHorizontal: 25}}>
            <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
              How many person?
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 35,
              position: 'relative',
              marginTop: 15,
            }}>
            <DropDownPicker
              items={[
                {
                  label: '',
                  value: 0,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      0 Child
                    </Text>
                  ),
                },
                {
                  label: '',
                  value: 1,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      1 Child
                    </Text>
                  ),
                },
                {
                  label: '',
                  value: 2,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      2 Child
                    </Text>
                  ),
                },
              ]}
              defaultValue={child}
              containerStyle={{height: 50, width: 160}}
              dropDownStyle={{backgroundColor: '#ffffff'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              arrowColor="#2395FF"
              onChangeItem={(item) => setChild(item.value)}
            />

            <DropDownPicker
              items={[
                {
                  label: '',
                  value: 1,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      1 Adult
                    </Text>
                  ),
                },
                {
                  label: '',
                  value: 2,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      2 Adult
                    </Text>
                  ),
                },
                {
                  label: '',
                  value: 3,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      3 Adult
                    </Text>
                  ),
                },
                {
                  label: '',
                  value: 4,
                  icon: () => (
                    <Text
                      style={{
                        fontFamily: 'Lato-Bold',
                        fontSize: 14,
                        color: '#000000',
                      }}>
                      4 Adult
                    </Text>
                  ),
                },
              ]}
              defaultValue={adult}
              containerStyle={{height: 50, width: 160}}
              dropDownStyle={{backgroundColor: '#ffffff'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              arrowColor="#2395FF"
              onChangeItem={(item) => setAdult(item.value)}
            />
          </View>

          <View style={{marginTop: 20, marginHorizontal: 25}}>
            <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
              Which class do you want?
            </Text>
          </View>

          <View styles={{marginTop: 50, marginHorizontal: 25}}>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 35,
                marginVertical: 20,
              }}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2395FF'}
              animation={true}
              buttonStyle={{color: 'black'}}
              buttonSize={12}
              labelStyle={{
                fontFamily: 'Lato-Bold',
                fontSize: 14,
                color: '#000000',
                marginRight: 15,
              }}
              buttonOuterSize={25}
              onPress={(value) => setClassSuite(value)}
            />
          </View>

          <RBSheet
            ref={refRBSheetDepart}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View style={{alignItems: 'center'}}>
              <DatePicker
                mode={'date'}
                date={departDate}
                onDateChange={setDepartDate}
              />
            </View>
          </RBSheet>

          <RBSheet
            ref={refRBSheetReturn}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View style={{alignItems: 'center'}}>
              <DatePicker
                mode={'date'}
                date={returnDate}
                onDateChange={setReturnDate}
              />
            </View>
          </RBSheet>

          <RBSheet
            ref={refRBSheetAsal}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={720}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View style={{flexDirection: 'column'}}>
              <TextInput
                style={{
                  borderColor: '#adadad',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginHorizontal: 20,
                  marginBottom: 20,
                  marginTop: 20,
                }}></TextInput>
              <View
                style={{
                  borderColor: '#a1a1a1',
                  borderBottomWidth: 1,
                  paddingTop: 5,
                }}
              />
              <ScrollView>
                {Booking.data.map((item, index) => {
                  return (
                    <TouchableNativeFeedback
                      key={index}
                      onPress={() => setFromto(item.name)}>
                      <View
                        style={{
                          borderColor: '#a1a1a1',
                          borderBottomWidth: 1,
                          height: 70,
                          paddingTop: 5,
                        }}
                        key={item.id}>
                        <View
                          style={{
                            flexDirection: 'column',
                            marginHorizontal: 20,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lato-Bold',
                              fontSize: 14,
                              color: 'black',
                              lineHeight: 26,
                            }}>
                            {item.name}, Indonesia
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lato-Regular',
                              fontSize: 17,
                              color: 'black',
                              lineHeight: 26,
                              marginBottom: 10,
                            }}>
                            International Airport
                          </Text>
                        </View>
                      </View>
                    </TouchableNativeFeedback>
                  );
                })}
              </ScrollView>
            </View>
          </RBSheet>

          <RBSheet
            ref={refRBSheetTujuan}
            closeOnDragDown={true}
            closeOnPressMask={true}
            height={720}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View style={{flexDirection: 'column'}}>
              <TextInput
                style={{
                  borderColor: '#adadad',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginHorizontal: 20,
                  marginBottom: 20,
                  marginTop: 20,
                }}></TextInput>
              <View
                style={{
                  borderColor: '#a1a1a1',
                  borderBottomWidth: 1,
                  paddingTop: 5,
                }}
              />
              <ScrollView>
                {Booking.data.map((item, index) => {
                  return (
                    <TouchableNativeFeedback
                      key={index}
                      onPress={() => setGoto(item.name)}>
                      <View
                        style={{
                          borderColor: '#a1a1a1',
                          borderBottomWidth: 1,
                          height: 70,
                          paddingTop: 5,
                        }}
                        key={item.id}>
                        <View
                          style={{
                            flexDirection: 'column',
                            marginHorizontal: 20,
                          }}>
                          <Text
                            style={{
                              fontFamily: 'Lato-Bold',
                              fontSize: 14,
                              color: 'black',
                              lineHeight: 26,
                            }}>
                            {item.name}, Indonesia
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Lato-Regular',
                              fontSize: 17,
                              color: 'black',
                              lineHeight: 26,
                              marginBottom: 10,
                            }}>
                            International Airport
                          </Text>
                        </View>
                      </View>
                    </TouchableNativeFeedback>
                  );
                })}
              </ScrollView>
            </View>
          </RBSheet>

          <View style={{flex: 1, padding: 15}}>
            <TouchableOpacity onPress={() => searchResult()}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: '#fff',
                  backgroundColor: '#2395FF',
                  padding: 10,
                  borderRadius: 10,
                  borderColor: '#DDDDDD',
                  borderWidth: 1,
                  marginLeft: 20,
                  marginRight: 20,
                  textAlign: 'center',
                }}>
                SEARCH FLIGHT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default SearchFlight;
