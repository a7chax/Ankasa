import React from 'react';
import { TouchableOpacity, TextInput, Modal, Text, ScrollView, View, Image } from 'react-native';
import styles from './style'

const Result = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.idn}>IDN</Text>
      <Text style={styles.time2}>12.33</Text>

      <Text style={styles.jpn}>JPN</Text>
      <Text style={styles.time}>15.21</Text>
      <Text style={styles.airplane}>{props.airplane}</Text>
      <Image
        style={{ marginTop: 30, left: '30%', position: 'absolute' }}
        source={require('../../../assets/illustration/ankasa02.png')}
      />

      <Text style={styles.terminal}>{props.terminal}</Text>

      <Text style={styles.gate}>Gate 221</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const SearchResult = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // today
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return (today = dd + '/' + mm + '/' + yyyy);
  };
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: '#F8F8F8', borderRadius: 30 }}>
        <View style={styles.jumbotron}>
          <Image
            style={styles.image}
            source={require('../../../assets/illustration/ankasa.png')}></Image>

          <Image
            style={{ position: 'absolute', left: 30, top: 30 }}
            source={require('../../../assets/illustration/btnback.png')}></Image>

          <Text style={styles.padding}></Text>
          <Text style={styles.getData}>{getDate()}</Text>
          <Text style={styles.fromText}>From</Text>

          <Text style={styles.medanText}>Medan</Text>

          <Text style={styles.indonesiaText}>Indonesia</Text>

          <Image
            style={{ position: 'absolute', left: '48%', top: '65%' }}
            source={require('../../../assets/illustration/switch.png')}></Image>

          <Text style={styles.toText}>To</Text>

          <Text style={styles.tokyoText}>Tokyo</Text>

          <Text style={styles.japanText}>Japan</Text>

          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 15 }}>
            <View style={{ width: '50%', height: '50%' }}>
              <Text style={styles.passenger}>Passengger</Text>

              <Text style={styles.child}>2 Child 4 Adults</Text>
            </View>
            <View>
              <Text style={styles.class}>Class</Text>

              <Text style={styles.economy}>Economy</Text>
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
      <View>
        <Result
          airplane="Garuda Indonesia"
          price="$ 214,00"
          terminal="Terminal A"
        />
        <Result airplane="Airasia" price="$ 145,00" terminal="Terminal B" />
        <Result airplane="LionAir" price="$ 145,00" terminal="Terminal B" />
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
                  <TextInput style={styles.inputText} placeholder="Min"/>
                  <TextInput style={styles.inputText} value="-"/>
                  <TextInput style={styles.inputText} placeholder="Max"/>
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
