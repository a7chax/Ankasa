import React,{Fragment, useState,useEffect} from 'react'
import {
	ScrollView,
	View,
	TextInput,
	ToastAndroid,
	TouchableNativeFeedback,
	Text,
	DeviceEventEmitter,
	Platform		
} from 'react-native'
import {Button} from 'react-native-paper'	
import FingerprintScanner from 'react-native-fingerprint-scanner';
import styles from './loginfingerprint.style.js'
import {Navigation} from '../../../components/'
import {FingerPrintIcon} from '../../../assets'


const LoginFingerprint = (props) => {
	const [fingerprint, setFingerprint] = useState('')
	const [status, setStatus] = useState('Scan your finger here');







	const goBack = () => {
		props.navigation.goBack('Login')
	}


	useEffect(() => {
		DeviceEventEmitter.addListener('FINGERPRINT_SCANNER_AUTHENTICATION', msg => {
			setStatus('authentication failed')
		})

		scan().then(success => {
			success ? 
				setStatus('Authenticate success') : console.log(success)
		})
	}, [])


	async function scan(){
		return await NativeModules.ReactNativeFingerPrintScanner.authenticate();
	}

	return(
		<Fragment>
			<ScrollView  style={{backgroundColor : '#FFFFFF'}}>
				<Navigation onPress={() => goBack()} pageTitle={'Regular Login'}/>

				<View style={styles.makeColumn}>

					<View>
						<Text style={styles.textLarge}>Touch ID</Text>
					</View>

					<View>
						<Text style={styles.textParagraph}>Authenticate using app’s Touch ID instead of tentering your password</Text>
					</View>

					<View style={styles.fingerprint}>						
						<FingerPrintIcon/>
					</View>


						<Button style={styles.proceedButton}><Text style={styles.textButton}>{status}</Text></Button>
				</View>
			</ScrollView>			
		</Fragment>		
	)
}




export default LoginFingerprint