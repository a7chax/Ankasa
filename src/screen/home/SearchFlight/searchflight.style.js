import {StyleSheet, Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	buttonActive : { 
		backgroundColor: '#2395FF', 
		borderRadius: 10 , 
		width : wp(43),
		height : hp(6)
	},
	buttonNonActive : {
		backgroundColor: '#F0F0F0',
		borderRadius: 10 ,
		width : '47%',
		height :50 
	},
	textButtonActive : {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 14,
		color: '#fff',
		lineHeight : 35
	},
	textButtonNonActive : {
		fontFamily: 'Poppins-SemiBold',
	 	fontSize: 14,	
	  	color: '#595959',
	   	lineHeight : 35
	}
})