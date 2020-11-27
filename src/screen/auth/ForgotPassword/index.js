import React,{Fragment, useState,useEffect} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback,
	Text,
} from 'react-native'
import {Button} from 'react-native-paper'
import {Navigation} from '../../../components/'
import styles from './forgotpassword.style.js'


function ForgotPassword(props){
	const [email, setEmail] = useState('')

	const backTo = (props) => {
		props.navigation.goBack('Login')		
	}
	return(
		<ScrollView style={{backgroundColor : '#FFFFFF'}}>
			<Navigation onPress={() => backTo()}/>
			<View style={styles.makeColumn}>
				<View>
					<Text style={styles.textLarge}>Forgot Password</Text>
				</View>

				<View>
					<View>
					<TextInput
						style={styles.inputEmail}
						placeholder='Email'
					/>
					</View>
				</View>

				<View>
					<Button style={styles.buttonSend}><Text style={styles.textButtonSend}>Send</Text></Button>
				</View>

				<View>
					<Text style={styles.textParagraph}>
						You’ll get message soon on your email
					</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default ForgotPassword