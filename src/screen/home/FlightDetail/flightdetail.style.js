import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as fp} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  navigateDis: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 31,
    marginTop: 31,
    marginBottom: 23,
  },
  textTitle: {
    color: '#2395FF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: fp(3),
    lineHeight: hp(5.3),
  },
  pageTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 45,
  },
  backgroundFlight: {
    backgroundColor: '#2395FF',
    width: wp(100),
    height: hp(30),
    position: 'absolute',
    zIndex: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  planeBackground: {
    marginRight: 83,
    width: null,
    height: hp(30),
    flex: 1,
    position: 'relative',
    zIndex: 2,
  },
  boxFlight: {
    bottom: 130,
    borderRadius: 12,
    position: 'relative',
    marginBottom: -90,
    zIndex: 2,
    backgroundColor: '#FFFFFF',
    width: wp(85),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  makeColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 40,
  },
  innerBox: {
    flexDirection: 'column',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  destinationText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#000000',
  },
  estimated: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#6B6B6B',
  },
  textReview: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    lineHeight: 30,
    textAlign: 'center',
  },
  detailTitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    lineHeight: 22,
    color: '#A5A5A5',
  },
  detailSubtitle: {
    fontFamily: 'Lato-Regular',
    color: '#595959',
    fontSize: 14,
    lineHeight: 22,
  },
  horizontalLine: {
    borderColor: '#E6E6E6',
    borderBottomWidth: 2,
    marginTop: 30,
  },
  buttonBooking: {
    backgroundColor: '#2395FF',
    width: wp(90),
    height: hp(8),
    borderRadius: 12,
    shadowColor: '#2395FF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 2,
    shadowRadius: 8.65,

    elevation: 4,
  },
  textButtonBooking: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 50,
  },
});
