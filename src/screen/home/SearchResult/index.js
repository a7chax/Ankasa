import React, { useEffect, useState, Fragment } from 'react';
import { TouchableOpacity, TouchableNativeFeedback, TextInput, Modal, Text, ScrollView, View, Image } from 'react-native';
import styles from './style'
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getSearchFlight } from '../../../redux/actions/Booking'





const SearchResult = (props) => {

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
    props.navigation.goBack('SearchFlight')
  }

  const { token } = useSelector((s) => s.Auth);
  const { searchData } = useSelector((s) => s.Booking);
  const dispatch = useDispatch();

  let { adult, asal, child, depart, tujuan, classSuite } = props.route.params


  const gotoDetail = () => {
    props.navigation.navigate('FlightDetail', { adult: adult, asal: asal, child: child, tujuan: tujuan, classSuite: classSuite })
  }

  const berasal = asal.substring(0, 3)
  const bertujuan = tujuan.substring(0, 3)
  useEffect(() => {
    dispatch(getSearchFlight(tujuan, token))

    console.log(searchData, '                    ini search data                  ')

    return () => {

    };
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: '#F8F8F8', borderRadius: 30 }}>
        <View style={styles.jumbotron}>
          <Image
            style={styles.image}
            source={require('../../../assets/illustration/ankasa.png')}></Image>

          <TouchableNativeFeedback onPress={() => kembali()}>
            <Icon name="chevron-left" size={25} color="white" style={{ position: 'relative', bottom: 200, marginLeft: 25 }} />
          </TouchableNativeFeedback>

          <Text style={styles.padding}></Text>
          <Text style={styles.getData}>{depart}</Text>
          <Text style={styles.fromText}>From</Text>

          <Text style={styles.medanText}>{asal}</Text>

          <Text style={styles.indonesiaText}>Indonesia</Text>

          <Image
            style={{ position: 'absolute', left: '48%', top: '65%' }}
            source={require('../../../assets/illustration/switch.png')}></Image>

          <Text style={styles.toText}>To</Text>

          <Text style={styles.tokyoText}>{tujuan}</Text>

          <Text style={styles.japanText}>Indonesia</Text>

          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15 }}>
            <View style={{ width: '50%', height: '50%' }}>
              <Text style={styles.passenger}>Passengger</Text>

              <Text style={styles.child}>{child} Child {adult} Adults</Text>
            </View>
            <View>
              <Text style={styles.class}>Class</Text>


              <Text style={styles.economy}>{classSuite}</Text>

            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true)
        }}
        style={{ flex: 1, flexDirection: 'row' }}
      >
        <Text style={styles.flight}>6 flight found</Text>

        <Text style={styles.filterText}>Filter</Text>
        <Image
          source={require('../../../assets/illustration/filter.png')}
          style={styles.filterImage}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', marginHorizontal: 25, marginTop: 25 }}>

        {searchData == undefined || searchData == '' ?
          (
            <>
              <View>
                <Text>Data tidak ditemukan</Text>
              </View>
            </>
          ) : searchData.map(item => {

            const bertujuanlagi = tujuan.substring(0, 3)
            return (
              <>
                <TouchableNativeFeedback onPress={() => gotoDetail()}>
                  <View>
                    <View style={{ borderColor: 'black', borderWidth: 0.5, borderRadius: 12, width: '100%', marginBottom: 15 }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginVertical: 25 }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 28, color: '#000000', marginBottom: -5 }}>{berasal}</Text>
                              <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#6B6B6B' }}>12:33</Text>
                            </View>

                            <Icon name='plane-departure' size={15} style={{ marginHorizontal: 15, marginTop: 15 }} />

                            <View style={{ flexDirection: 'column' }}>
                              <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 28, color: '#000000', marginBottom: -5 }}>{bertujuanlagi}</Text>
                              <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#6B6B6B' }}>12:33</Text>
                            </View>
                          </View>

                          <View style={{ marginTop: 20 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#595959' }}>Garuda Indonesia</Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 6 }}>

                          <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                              <Text style={{ textAlign: 'right', fontSize: 12, fontFamily: 'Poppins-Regular' }}>Terminal :</Text>
                              <Text style={{ textAlign: 'right', fontSize: 12, fontFamily: 'Poppins-SemiBold' }}> A</Text>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                              <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Gate :</Text>
                              <Text style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold' }}> A</Text>
                            </View>
                          </View>
                          <View>
                            <Text style={{ textAlign: 'right', fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#2395FF' }}>$ 214,00</Text>
                          </View>
                        </View>
                      </View>

                    </View>
                  </View>
                </TouchableNativeFeedback>
              </>
            )
          })

        }





      </View>

      {/* modal update */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableOpacity style={styles.modalFade} onPress={() => setModalVisible(false)}>
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.scrollTit}>
            {/* <Text style={styles.textModals}>Filter</Text> */}
          </View>
          <ScrollView>
            <View style={styles.viewList}>
              <Text style={styles.textModalTitle}>Maskapai</Text>
              <View style={styles.modalsCard}>
                <TouchableOpacity style={styles.buttonModal}>
                  <Text style={styles.textModal}>
                    ASC
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonModal}>
                  <Text style={styles.textModal}>
                    DESC
                  </Text>
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
              <Text style={styles.textModals}>
                Filter
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </Modal>

    </ScrollView>
  );
};

export default SearchResult;
