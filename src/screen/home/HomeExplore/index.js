import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {useSelector, useDispatch} from 'react-redux';
import {getDestination} from '../../../redux/actions/Destination';
import {ActivityIndicator} from 'react-native-paper';
import {GetProfile} from '../../../redux/actions/Profiles';

const {width} = Dimensions.get('screen');

const HomeExplore = (props) => {
  const [loading, setLoading] = React.useState(true);

  const {token} = useSelector((state) => state.Auth);
  const {destination} = useSelector((state) => state.Destination);
  const dispatch = useDispatch();

  const gotoNotif = () => {
    props.navigation.navigate('Notification')
  }

  const gotoChat = () => {
   navigation.navigate('Chat')
  }

  React.useEffect(() => {
    LoadProfile();
  }, []);

  const LoadProfile = () => {
    const callbackHandler = (err, res) => {
      if (err) setLoading(false);

      return LoadDestination();
    };

    dispatch(GetProfile(token, callbackHandler));
  };

  const LoadDestination = () => {
    const callbackHandler = (err, res) => {
      setLoading(false);

      if (err) return false;
    };

    const data = {limit: 10};
    dispatch(getDestination(data, callbackHandler));
  };

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ActivityIndicator size="small" color="#2395FF" />
      </View>
    );
  }

  const AppBar = () => (
    <View style={[styles.appBar]}>
      <Text style={[styles.appBarTitle]}>Explore</Text>

      <View style={[styles.appBarRight]} onPress={() => gotoChat()}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            name="mail"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>


        

<TouchableOpacity activeOpacity={0.6} onPress={() => gotoNotif()}>
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

  const gotoSearch = () => {
    props.navigation.push('SearchFlight');
  };

  const SearchBox = () => (
    <View style={[styles.searchBox]}>
      <Icons name="search" size={28} color="#A3A3A3" />
      <TouchableOpacity onPress={() => gotoSearch()}>
        <TextInput
          editable={false}
          onChangeText={(text) => console.log(text)}
          placeholder="Where you want to go?"
          style={{width: '91%', marginLeft: 8}}
        />
      </TouchableOpacity>
    </View>
  );

  const Content = () => (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.title, {color: 'black', fontSize: 18}]}>
          Trending destination
        </Text>

        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.title, {color: '#2395FF'}]}>View All</Text>
        </TouchableOpacity>
      </View>

      <Carousel
        style={{width: '100%'}}
        layout="stack"
        layoutCardOffset={24}
        data={destination}
        centerContent={true}
        renderItem={_renderCarousel}
        renderToHardwareTextureAndroid={true}
        sliderWidth={width / 1.2}
        itemWidth={width / 1.5}
      />

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.title, {color: 'black', fontSize: 18}]}>
          Top 10 destinations
        </Text>

        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.title, {color: '#2395FF'}]}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
        {destination.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate('SearchFlight', item)}
            style={{marginBottom: 10, marginHorizontal: 5}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 85,
                width: 85,
                marginBottom: 4,
                borderWidth: 4,
                borderColor: '#2395FF',
                borderRadius: 50,
              }}>
              <Image
                source={{
                  uri:
                    item.photo ??
                    'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={{width: 70, height: 70, borderRadius: 50}}
              />
            </View>

            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                textAlign: 'center',
                color: 'black',
              }}>
              {item.city}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );

  const _renderCarousel = ({item, index}) => {
    return (
      <View style={[styles.cardContainer]}>
        <Image
          source={{
            uri:
              item.photo ??
              'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: '100%', height: width / 2, borderRadius: 20}}
        />

        <View style={{marginTop: 18}}>
          <Text style={[styles.cardTitle(14)]}>{item.city}, </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={[styles.cardTitle(24)]}>{item.name}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.navigation.navigate('SearchFlight', item)}
              style={{
                backgroundColor: 'rgba(35, 149, 255, 0.1)',
                padding: 8,
                borderRadius: 100,
              }}>
              <Icons name="chevron-right" size={24} color="#2395FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={[styles.container]}>
      <AppBar />
      <SearchBox />
      <Content />
    </ScrollView>
  );
};

export default HomeExplore;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 28,
  },
  appBar: {
    marginTop: 20 + StatusBar.currentHeight,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarRight: {
    flexDirection: 'row',
  },
  appBarTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: 'black',
  },
  searchBox: {
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
    paddingVertical: 2,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  cardContainer: {
    elevation: 4,
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  cardTitle: (size) => ({
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: size,
  }),
});
