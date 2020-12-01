import React, {useEffect, useState, Fragment} from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  Modal,
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getSearchFlight} from '../../../redux/actions/Booking';

const SearchResult = (props) => {
  const [loading, setloading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  // today
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return (today = dd + '/' + mm + '/' + yyyy);
  };

  const kembali = () => {
    props.navigation.goBack('SearchFlight');
  };

  const {token} = useSelector((s) => s.Auth);
  const {searchData} = useSelector((s) => s.Booking);
  const dispatch = useDispatch();

  let {adult, asal, child, depart, tujuan, classSuite} = props.route.params;

  const gotoDetail = (id) => {
    props.navigation.navigate('FlightDetail', {
      ...props.route.params,
      id,
      adult: adult,
      asal: asal,
      child: child,
      classSuite: classSuite,
      depart: depart,
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

  const price = ticketPrice(classSuite);

  const berasal = asal.substring(0, 3);
  useEffect(() => {
    setloading(true);
    dispatch(
      getSearchFlight(
        props.route.params.classSuite,
        props.route.params.id,
        (res) => {
          console.log(props.route.params.classSuite);
          console.log(res.data.data);
          setloading(false);
        },
      ),
    );

    console.log(
      searchData,
      '                    ini search data                  ',
    );

    return () => {};
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
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#F8F8F8', borderRadius: 30}}>
        <View style={styles.jumbotron}>
          <Image
            style={styles.image}
            source={require('../../../assets/illustration/ankasa.png')}></Image>

          <TouchableNativeFeedback onPress={() => kembali()}>
            <Icon
              name="chevron-left"
              size={25}
              color="white"
              style={{position: 'relative', bottom: 200, marginLeft: 25}}
            />
          </TouchableNativeFeedback>

          <Text style={styles.padding}></Text>
          <Text style={styles.getData}>{depart}</Text>
          <Text style={styles.fromText}>From</Text>

          <Text style={styles.medanText}>{asal}</Text>

          <Text style={styles.indonesiaText}>Indonesia</Text>

          <Image
            style={{position: 'absolute', left: '48%', top: '65%'}}
            source={require('../../../assets/illustration/switch.png')}></Image>

          <Text style={styles.toText}>To</Text>

          <Text style={styles.tokyoText}>{props.route.params.city}</Text>

          <Text style={styles.japanText}>{props.route.params.name}</Text>

          <View style={{flex: 1, flexDirection: 'row', marginLeft: 15}}>
            <View style={{width: '50%', height: '50%'}}>
              <Text style={styles.passenger}>Passengger</Text>

              <Text style={styles.child}>
                {child} Child {adult} Adults
              </Text>
            </View>
            <View>
              <Text style={styles.class}>Class</Text>

              <Text style={styles.economy}>
                {classSuite == 1
                  ? 'Economy'
                  : classSuite == 2
                  ? 'Business'
                  : 'First Class'}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.flight}>{searchData.length} flight found</Text>

        <Text style={styles.filterText}>Filter</Text>
        <Image
          source={require('../../../assets/illustration/filter.png')}
          style={styles.filterImage}
        />
      </TouchableOpacity>
      <View
        style={{flexDirection: 'column', marginHorizontal: 25, marginTop: 25}}>
        {searchData == undefined || searchData == '' ? (
          <>
            <View>
              <Text>Data tidak ditemukan</Text>
            </View>
          </>
        ) : (
          searchData.map((item, index) => {
            return (
              <TouchableNativeFeedback
                key={index}
                onPress={() => gotoDetail(item.id)}>
                <View>
                  <View
                    style={{
                      borderColor: 'black',
                      borderWidth: 0.5,
                      borderRadius: 12,
                      width: '100%',
                      marginBottom: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 25,
                        marginVertical: 25,
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontFamily: 'Poppins-SemiBold',
                                fontSize: 28,
                                color: '#000000',
                                marginBottom: -5,
                              }}>
                              {asal.substr(0, 3)}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Poppins-Regular',
                                color: '#6B6B6B',
                              }}>
                              12:33
                            </Text>
                          </View>

                          <Icon
                            name="plane-departure"
                            size={15}
                            style={{marginHorizontal: 15, marginTop: 15}}
                          />

                          <View style={{flexDirection: 'column'}}>
                            <Text
                              style={{
                                fontFamily: 'Poppins-SemiBold',
                                fontSize: 28,
                                color: '#000000',
                                marginBottom: -5,
                              }}>
                              {item?.city.substr(0, 3)}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Poppins-Regular',
                                color: '#6B6B6B',
                              }}>
                              12:33
                            </Text>
                          </View>
                        </View>

                        <View style={{marginTop: 20}}>
                          <Text
                            style={{
                              fontFamily: 'Poppins-Regular',
                              fontSize: 16,
                              color: '#595959',
                            }}>
                            {item.air_name}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          marginTop: 6,
                        }}>
                        <View style={{flexDirection: 'column'}}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                textAlign: 'right',
                                fontSize: 12,
                                fontFamily: 'Poppins-Regular',
                              }}>
                              Terminal :
                            </Text>
                            <Text
                              style={{
                                textAlign: 'right',
                                fontSize: 12,
                                fontFamily: 'Poppins-SemiBold',
                              }}>
                              {' '}
                              {item.terminal}
                            </Text>
                          </View>

                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Poppins-Regular',
                              }}>
                              Gate :
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'Poppins-SemiBold',
                              }}>
                              {' '}
                              {item.gate}
                            </Text>
                          </View>
                        </View>
                        <View>
                          <Text
                            style={{
                              textAlign: 'right',
                              fontFamily: 'Poppins-SemiBold',
                              fontSize: 16,
                              color: '#2395FF',
                            }}>
                            $ {item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          })
        )}
      </View>

      {/* modal update */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalFade}
          onPress={() => setModalVisible(false)}></TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.scrollTit}>
            {/* <Text style={styles.textModals}>Filter</Text> */}
          </View>
          <ScrollView>
            <View style={styles.viewList}>
              <Text style={styles.textModalTitle}>Maskapai</Text>
              <View style={styles.modalsCard}>
                <TouchableOpacity style={styles.buttonModal}>
                  <Text style={styles.textModal}>ASC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                  <Text style={styles.textModal}>DESC</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.viewList}>
              <Text style={styles.textModalTitle}>Price</Text>
              <View style={styles.modalsCard}>
                <View style={styles.inputModal}>
                  <TextInput style={styles.inputText} placeholder="Min" />
                  <TextInput style={styles.inputText} value="-" />
                  <TextInput style={styles.inputText} placeholder="Max" />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonInput}>
              <Text style={styles.textModals}>Filter</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default SearchResult;
