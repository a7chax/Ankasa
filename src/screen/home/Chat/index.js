import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import styles from './Chat.component';
import ArrowLeft from '../../../assets/illustration/arrow-left-white.svg';
import ArrowRight from '../../../assets/illustration/send.svg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment'
import {useSelector, useDispatch} from 'react-redux'
import {getChat, getChatReceiver} from '../../../redux/actions/Chat.js'

export default function Chat({navigation}) {
  const [chat, setChat] = useState('');
  const [chatSender, setChatSender] = useState({})
  const [chatReceiver, setChatReceiver] = useState('')


	function dynamicDate(date){
  		if(date == "2020-12-01 22:04:01"){
  			const today = moment(date).format('HH : mm'); 			
  			return today
  		} else {
  			const today = moment().format('dddd, D MMM yy')
  			return today
  		}  		 	
	}
 
	
	console.log(dynamicDate('2020-14-01 22:04:01'))


 	const sekarang =  dynamicDate('2020-14-01 22:04:01')

 	const dispatch = useDispatch()

 	const {token} = useSelector(s => s.Auth)

 	const data = useSelector(s => s.Chat)

	useEffect(() => {
		dispatch(getChat(token, 7,3))
		dispatch(getChatReceiver(token, 3,7))
		setChatSender(data.data)
		// setChatReceiver(data.dataReceiver)
		// data.data.map((item, index) => {
		// 	setChatSender({})
		// })
		// console.log(chatReceiver, 'ini data terima')
		
		console.log(data.data[0],' ini datanya')
	},[])

  


  const onSubmit = () => {};
  return (
  	<>
	  <StatusBar backgroundColor="#2395FF" barStyle="light-content" />
	  	
		<View style={styles.topBarContent}>		  
		 	<View style={styles.customerService}>		
		 		<TouchableOpacity onPress={() => navigation.goBack()}>		
					<Icon name='chevron-left' size={22} style={{lineHeight : 25}} color={'#fcfcfc'}/>
				</TouchableOpacity>
				<Text style={styles.topBarText}>Customer Service</Text>
				<TouchableOpacity>
					<Icon name='ellipsis-v' size={22} style={{lineHeight : 25}} color={'#fcfcfc'}/>
				</TouchableOpacity>
		  	</View>
		</View>  	

	<ScrollView style={styles.colorContainer}>

	  
	  	<View style={{marginHorizontal : 20, marginVertical : 20,}}>	

{/* 	  		{ chatSender.map((item, index )=> { */}
{/*  */}
{/* 				function dynamicDate(date){ */}
{/* 			  		if(date == "2020-12-01 22:04:01"){ */}
{/* 			  			const today = moment(date).format('HH : mm'); 			 */}
{/* 			  			return today */}
{/* 			  		} else { */}
{/* 			  			const today = moment().format('dddd, D MMM yy') */}
{/* 			  			return today */}
{/* 			  		}  		 	 */}
{/* 				}	  			 */}
{/* 	  			return( */}
{/* 	  				<> */}
{/* 					 <View style={{paddingRight : '30%',paddingVertical : 3}}> */}
{/* 					  	<View style={styles.chatReceiver}> */}
{/* 							<View style={{marginHorizontal : 10, marginTop : 10,marginBottom : 5}}> */}
{/* 								<Text style={styles.receiverText}>Hi, Ask me anythinadf!</Text> */}
{/* 								<View style={{marginTop : 3}}> */}
{/* 									<Text style={{textAlign : 'right', color : '#707070'}}>{sekarang}</Text> */}
{/* 								</View> */}
{/* 							</View> */}
{/* 					  	</View> */}
{/* 					 </View> */}
{/* 					 			 			 			 		 */}
{/* 					<View style={{paddingLeft : '30%',paddingVertical : 3}}> */}
{/* 						<View style={styles.chatSent}> */}
{/* 							<View style={{ */}
{/* 								marginHorizontal : 10,  */}
{/* 								marginTop : 10, */}
{/* 								marginBottom : 5 }}> */}
{/* 								<Text style={styles.senderText}>{item.message}</Text> */}
{/* 								<View style={{marginTop : 3}}> */}
{/* 									<Text style={{textAlign : 'right', color : '#ededed'}}>{dynamicDate(item.created_at)}</Text> */}
{/* 								</View>                         */}
{/* 							</View> */}
{/* 						</View> */}
{/* 					</View>	 */}
{/* 				</> */}
{/* 	  			) */}
{/* 	  		}) */}
{/* 	  		} */}

		






	  	</View>


	</ScrollView>
	  	<View style={styles.chatContainer}>

			<TextInput
		    	multiline={true}
		    	numberOfLines={2}				
			  	style={styles.input}
			  	placeholder="Type your message"
			  	autoCapitalize="none"
			  	onChangeText={(text) => setChat(text)}
			  	value={chat}
			  	returnKeyType="send"
			/>
			<TouchableOpacity onPress={onSubmit} style={styles.button}>
			  <Icon name='telegram-plane' size={40} color={'#2395FF'}/>
			</TouchableOpacity>
	  </View>	
	</>
  );
}
