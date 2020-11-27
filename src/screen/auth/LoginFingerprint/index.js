import React,{Fragment, useState} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback		
} from 'react-native'
import {Button, Text} from 'react-native-paper'	
import styles from './loginfingerprint.style.js'
import {Navigation} from '../../../components/'

const LoginFingerprint = (props) => {
	const [fingerprint, setFingerprint] = useState('')


	return(
		<Fragment>
			<ScrollView  style={{backgroundColor : 'white'}}>
				<Navigation/>
				<View>
					<Text style={styles.textInit}> Ini pageFingerprint</Text>
				</View>
			</ScrollView>
		</Fragment>		
	)
}

export default LoginFingerprint