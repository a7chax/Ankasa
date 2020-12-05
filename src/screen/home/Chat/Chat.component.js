import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  colorContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    resizeMode: 'cover',
  },
  topBar: {
    
  },
  topBarContent: {
    backgroundColor: '#2395FF',         
    borderBottomWidth : 0.1,
    borderColor : 'black',
    width: '100%',
  },
  customerService: {
  	paddingTop : 25,
    flexDirection: 'row',
    justifyContent : 'space-between', 
    margin : 25
    
  },
  profPic: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  topBarText: {
    fontWeight: 'bold',
    fontFamily : 'Poppins-SemiBold',
    color: '#fcfcfc',
    fontSize: 19,
    marginHorizontal : 5
  },
  chatReceiver: {
    backgroundColor: '#e6e6e6',

    borderBottomLeftRadius : 12,
    borderBottomRightRadius : 12,
    borderTopRightRadius : 12,
    marginRight: 'auto',
  },  
  chatSent: {
    backgroundColor: '#2395FF',

    borderBottomLeftRadius : 12,
    borderBottomRightRadius : 12,
    borderTopLeftRadius : 12,
    marginLeft: 'auto',
  },
  input: {
    backgroundColor: 'white',
    borderBottomWidth : 0.9,
    borderRightWidth : 0.9,
    borderLeftWidth : 0.9,
    fontSize: 17,
    borderRadius: 30,
    
    paddingHorizontal : 25,
    width: '85%',
  },
  receiverText :{
  	fontFamily : 'Poppins-Regular',	
	textAlign : 'left',
	color : 'black'
  },
  senderText : {
  	fontFamily : 'Poppins-Regular',	
	textAlign : 'left',
	color : 'white'  	
  },
  chatContainer: {
    
    borderWidth : 0.9,
    borderColor : 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto',
    
    paddingHorizontal: 10,
  },
  button: {
  	marginRight : 10,
      
  },
  submitButton: {
    alignSelf: 'center',
    
  },
});
