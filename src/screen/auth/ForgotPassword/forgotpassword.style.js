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
    marginBottom: 35,
  },
  inputEmail: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(210, 194, 255, 0.68)',
    width: wp(87),
    marginBottom: 27,
  },
  buttonSend: {
    width: wp(87),
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#2395FF',
  },
  textButtonSend: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: hp(8),
  },
  textParagraph: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
    marginTop: 18,
  },
});
