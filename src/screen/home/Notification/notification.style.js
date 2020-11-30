import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	makeColumn : {
		flexDirection : 'column',
		
		alignSelf : 'stretch',
		marginHorizontal : 30
	},	
	textLarge : {
		fontFamily : 'Poppins-SemiBold',
		fontSize : 36,
		color : '#000000',
		marginBottom : 23
	},	
	boxNotifActive : {
		backgroundColor : '#edf4fa',
		borderWidth : 2, 
		borderColor : '#2395FF', 
		borderRadius : 13,
		marginBottom : 16
	},
	boxNotif : {
		borderWidth : 2, 
		borderColor : '#D7D7D7', 
		borderRadius : 13,
		marginBottom : 16
	},

	notifTitleActive : {
		fontFamily : 'Lato-Bold',
		fontSize : 16,
		color : '#2395FF'
	},
	notifTitle : {
		fontFamily : 'Lato-Bold',
		fontSize : 16,
		color : '#000000'
	},	
	innerNotifPos : {
		marginHorizontal : 26,
		marginVertical : 16
	},
	notifDesc : {
		marginTop : 10,
		marginBottom : 15,
		fontFamily : 'Lato-Regular',
		fontSize : 14,
		lineHeight : 18,
		color : '#6B6B6B'
	},
	notifDate : {
		fontFamily : 'Lato-Regular',
		fontSize : 12,
		lineHeight : 14,
		textAlign : 'left'
	}
})