import {StyleSheet, Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	navigateDis : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-between',
		marginHorizontal : 31,
		marginVertical : 31
	},
	textTitle : {
		color : '#2395FF',
		fontFamily : 'Poppins-SemiBold',
		fontSize : fp(3),
		lineHeight : hp(5.3)
	}
})