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
	makeColumn : {
		flexDirection : 'column',
		alignItems : 'center',
		alignSelf : 'stretch'
	},			
	boxBooking : {
		marginTop  : 30,
		marginBottom  : 62,
		borderRadius : 12,
		backgroundColor:'#FFFFFF',
		width : wp(90)
	},
	innerBox : {
		marginTop : 30,
		marginBottom : 15,
	},
	destinationText : {
		fontFamily : 'Poppins-SemiBold',
		fontSize : 20,
		color : '#000000'
	},		
	boxStatus : {
		backgroundColor : '#4FCF4D',	
		borderRadius : 6,
		width : wp(40),
	},
	statusDesc : {
		textAlign : 'center',
		marginVertical : 9,		
		fontFamily : 'Poppins-SemiBold',
		fontSize : 14,
		color : '#FFFFFF'
	},
	horizontalLine : {
		borderColor : '#E6E6E6',
	    borderWidth: 2,
	    borderBottomWidth : 2,
	    borderStyle : 'dashed',
		borderRadius : 15
	},
	textTitle : {
		textAlign :'left',
		fontFamily : 'Lato-Regular',
		fontSize : 12,
		color: '#A5A5A5',
		lineHeight : 22
	},
	textSub : {
		textAlign :'left',
		fontFamily : 'Lato-SemiBold',
		fontSize : 14,
		color: '#595959',
		lineHeight : 22		
	}		


})