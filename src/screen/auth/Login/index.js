import React,{Fragment, useState} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback		
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './login.style.js'


const Login = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return(
		<Fragment>
			<ScrollView>
				<View>
					<Text style={styles.textInit}> Ini login</Text>
				</View>
			</ScrollView>
		</Fragment>
	)
}


export default Login