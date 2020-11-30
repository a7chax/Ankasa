import React from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import {Button} from 'react-native-paper';

const Result = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.idn}>IDN</Text>
      <Text style={styles.time2}>12.33</Text>

      <Text style={styles.jpn}>JPN</Text>
      <Text style={styles.time}>15.21</Text>
      <Text style={styles.airplane}>{props.airplane}</Text>
      <Image
        style={{marginTop: 30, left: '30%', position: 'absolute'}}
        source={require('../../../assets/illustration/ankasa02.png')}
      />

      <Text style={styles.terminal}>{props.terminal}</Text>

      <Text style={styles.gate}>Gate 221</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
};

const SearchResult = () => {
  // today
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return (today = dd + '/' + mm + '/' + yyyy);
  };
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{flex: 1, backgroundColor: '#F8F8F8', borderRadius: 30}}>
        <View style={styles.jumbotron}>
          <Image
            style={styles.image}
            source={require('../../../assets/illustration/ankasa.png')}></Image>

          <Image
            style={{position: 'absolute', left: 30, top: 30}}
            source={require('../../../assets/illustration/btnback.png')}></Image>

          <Text style={styles.padding}></Text>
          <Text style={styles.getData}>{getDate()}</Text>
          <Text style={styles.fromText}>From</Text>

          <Text style={styles.medanText}>Medan</Text>

          <Text style={styles.indonesiaText}>Indonesia</Text>

          <Image
            style={{position: 'absolute', left: '48%', top: '65%'}}
            source={require('../../../assets/illustration/switch.png')}></Image>

          <Text style={styles.toText}>To</Text>

          <Text style={styles.tokyoText}>Tokyo</Text>

          <Text style={styles.japanText}>Japan</Text>

          <View style={{flex: 1, flexDirection: 'row', marginLeft: 15}}>
            <View style={{width: '50%', height: '50%'}}>
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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.flight}>6 flight found</Text>

        <Text style={styles.filterText}>Filter</Text>
        <Image
          source={require('../../../assets/illustration/filter.png')}
          style={styles.filterImage}
        />
      </View>
      <View>
        <Result
          airplane="Garuda Indonesia"
          price="$ 214,00"
          terminal="Terminal A"
        />
        <Result airplane="Airasia" price="$ 145,00" terminal="Terminal B" />
        <Result airplane="LionAir" price="$ 145,00" terminal="Terminal B" />
      </View>
    </ScrollView>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  jumbotron: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#2395FF',
    width: '100%',
    height: '75%',
    marginBottom: 50,
  },
  container: {
    padding: 60,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#E6E6E6',
  },
  image: {
    // resizeMode: 'cover',
    // opacity: 1,
    left: '-0.47%',
    right: '17.33%',
    top: '0%',
    bottom: '71.55%',
  },
  padding: {
    marginRight: '5%',
    right: 0,
    marginTop: 30,
    position: 'absolute',
    width: 70,
    borderRadius: 6,
    padding: '2%',

    backgroundColor: '#fff',
    opacity: 0.4,
  },
  jpn: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
    left: '40%',
    color: '#000000',
    fontSize: 28,
    position: 'absolute',
  },
  filterImage: {
    right: '0%',
    // right: 30,
    right: '8%',
    position: 'absolute',
    marginTop: 20,
  },
  getData: {
    position: 'absolute',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    marginRight: '5%',
    right: 0,
    marginTop: 30,
  },
  airplane: {
    position: 'absolute',
    left: '10%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 85,
  },
  time2: {
    position: 'absolute',
    left: '10%',
    fontSize: 12,
    marginTop: 60,
  },
  fromText: {
    position: 'absolute',
    marginTop: 130,
    marginLeft: '8%',
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  medanText: {
    position: 'absolute',
    marginTop: 150,
    marginLeft: '8%',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  idn: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20,
    left: '10%',
    color: '#000000',
    fontSize: 28,
    position: 'absolute',
  },
  time: {
    position: 'absolute',
    left: '40%',
    fontSize: 12,
    marginTop: 60,
  },
  indonesiaText: {
    position: 'absolute',
    marginTop: 180,
    marginLeft: '8%',
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  toText: {
    position: 'absolute',
    marginTop: 130,
    marginLeft: '10%',
    fontSize: 12,
    right: '0%',
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  tokyoText: {
    position: 'absolute',
    marginTop: 150,
    marginLeft: '10%',
    fontSize: 16,
    color: '#fff',
    right: '0%',
    fontFamily: 'Poppins-SemiBold',
  },
  japanText: {
    position: 'absolute',
    marginTop: 180,
    marginLeft: '10%',
    right: '0%',
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
  passenger: {
    fontFamily: 'Lato-Regular',
    left: '8%',
    fontSize: 12,
    top: 20,
  },
  child: {
    fontFamily: 'Lato-Regular',
    left: '8%',
    fontSize: 16,
    top: 30,
  },
  class: {
    fontFamily: 'Lato-Regular',
    left: '8%',
    fontSize: 12,
    top: 20,
  },
  flight: {
    fontFamily: 'Poppins-Light',
    left: 30,
    color: '#979797',
    marginTop: 20,
    width: '50%',
  },
  economy: {
    fontFamily: 'Lato-Regular',
    left: '8%',
    fontSize: 16,
    top: 30,
  },
  filterText: {
    fontFamily: 'Poppins-Semibold',
    color: '#000000',
    right: '0%',
    marginLeft: '20%',
    position: 'absolute',
    marginTop: 20,
  },
  price: {
    position: 'absolute',
    marginRight: '6%',
    right: '0%',
    fontSize: 12,
    marginTop: 90,
    color: '#2395FF',
    fontFamily: 'Poppins-SemiBold',
  },
  gate: {
    position: 'absolute',
    marginRight: '6%',
    right: '0%',
    fontSize: 12,
    marginTop: 60,
  },
  terminal: {
    fontFamily: 'Poppins-Semibold',
    color: '#9F9F9F',
    right: '0%',
    marginLeft: '15%',
    position: 'absolute',
    marginTop: 20,
  },
});
