import {StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as fp} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  makeColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  textLarge: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
    color: '#000000',
    lineHeight: 54,
    marginBottom: 19,
  },
  textParagraph: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#595959',
    paddingHorizontal: 80,
    marginBottom: 48,
  },
  proceedButton: {
    borderWidth: 1,
    borderColor: '#2395FF',
    width: wp(90),
    height: hp(9),
    borderRadius: 10,
    marginBottom: 60,
  },
  textButton: {
    color: '#2395FF',
    fontFamily: 'Poppins-Bold',
    fontSize: fp(3),
    lineHeight: hp(7),
  },
  fingerprint: {
    marginBottom: 48,
  },
});
