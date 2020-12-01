import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Icons2 from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import {useSelector, useDispatch} from 'react-redux';
import {GetProfile} from '../../../redux/actions/Profiles';

const {width} = Dimensions.get('screen');

const HomeProfile = ({navigation}) => {
  const {data} = useSelector((s) => s.Profiles);
  const {token} = useSelector((s) => s.Auth);
  const [loading, setLoading] = useState(true);
  const {username, city} = data;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const callbackHandler = (err) => {
      setLoading(false);

      if (err) return false;
      // navigation.replace('HomeProfile');
      console.log(data);
      console.log('data');
    };
    dispatch(GetProfile(token, callbackHandler));
  }, []);

  const onLogout = () => {
    dispatch({type: 'AUTHLOGOUT'});
    navigation.replace('Auth');
  };

  const AppBar = () => (
    <View style={[styles.appBar]}>
      <Text style={[styles.appBarTitle]}>Profile</Text>

      <View style={[styles.appBarRight]}>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.title, {color: '#2395FF', fontSize: 18}]}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const Profile = () => (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 110,
          width: 110,
          marginBottom: 5,
          borderWidth: 3,
          borderColor: '#2395FF',
          borderRadius: 55,
        }}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1542931287-023b922fa89b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={{width: 95, height: 95, borderRadius: 50}}
        />
      </View>

      <Text style={[styles.title, {fontSize: 20, color: 'black'}]}>
        {username}
      </Text>

      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
        {city}, Indonesia
      </Text>
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
        <Text style={[styles.title, {color: 'black'}]}>Cards</Text>

        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.title, {color: '#2395FF'}]}>+ Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{zIndex: 1999}}>
        {[1, 2, 3].map((value, key) => (
          <View
            key={key}
            style={{
              marginBottom: 10,
              paddingHorizontal: 22,
              paddingVertical: 12,
              width: width / 1.6,
              borderRadius: 10,
              backgroundColor: '#2395FF',
              elevation: 8,
              margin: 2,
            }}>
            <Text
              style={{
                letterSpacing: 1.5,
                fontFamily: 'Poppins-Bold',
                color: 'white',
              }}>
              4441 1235 5512 5551
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'white'}}>X Card</Text>
              <Text style={{color: 'white'}}>$ 1,440.2</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            padding: 8,
            marginVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icons2 name="star" size={24} color="#979797" />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: 'black',
              paddingLeft: 15,
            }}>
            My Review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            padding: 8,
            marginVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icons2 name="cog" size={24} color="#979797" />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: 'black',
              paddingLeft: 15,
            }}>
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            padding: 8,
            marginVertical: 2,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onLogout}>
          <Icons2 name="sign-out" size={24} color="#F24545" />
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#F24545',
              paddingLeft: 15,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <ScrollView style={[styles.container]}>
      <AppBar />
      <Profile />
      <Content />
    </ScrollView>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 28,
  },
  appBar: {
    marginTop: 20,
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
