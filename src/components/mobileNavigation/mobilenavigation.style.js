import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	postionBetween: {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-between',
		marginHorizontal : 25,
		marginVertical : 36
	},
	textLarge : {
		fontFamily : 'Poppins-SemiBold',
		fontSize : 36,
		color : '#000000',
		lineHeight : 54,
	},	
})