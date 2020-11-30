import {StyleSheet, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp } from "react-native-responsive-fontsize";

export default StyleSheet.create({
	textinit: {
		color :'black'
	},
	makeColumn : {
		flexDirection : 'column',
		alignItems : 'center',
		alignSelf : 'stretch'
	},
	boxTicket : {
		marginBottom : 15,
	    height:hp(36),
	    width:wp(90),
	    backgroundColor:"white",
	    borderRadius:15,
	    elevation:4,
	    shadowColor: '#000',
	    shadowOffset: { width: 0, height: 2 },
	    shadowOpacity: 0.5,
	    shadowRadius: 5,
	},
	dateTicket : {
		fontFamily : 'Poppins-Regular',
		fontWeight : 'normal',
		fontSize : 14,
		lineHeight: 22,
		color : '#000000'
	},
	ineerCardPos : {
		flex : 1,
		flexDirection : 'column',
		marginHorizontal : 21,
		marginVertical : 20,
	},
	destinationText : {
		fontFamily : 'Poppins-SemiBold',
		fontSize : 20,
		color : '#000000'
	},
	planeText : {
		fontFamily : 'Poppins-Regular',
		fontSize : 14,
		lineHeight : 22
	},
	horizontalLine : {
		borderBottomColor: '#E6E6E6',
		borderBottomWidth: 2,
		paddingTop : 20
	},
	statusPostion :{
		flexDirection : 'row',
		justifyContent : 'space-between',
		marginHorizontal : 20,
	},
	textStatus : {
		fontFamily : 'Poppins-SemiBold',
		fontSize : 14,
		lineHeight : 39,
		color : '#7A7A7A',
	},
	boxStatus : {
		backgroundColor : '#FF7F23',
		borderRadius : 6
	},
	statusDesc : {
		marginVertical : 7,
		marginHorizontal : 22,
		fontFamily : 'Poppins-SemiBold',
		fontSize : 14,
		color : '#FFFFFF'
	}

})
