import React from 'react'
import {
	ScrollView,
	View,
	Text
} from 'react-native'
import styles from './notification.style.js'
import {Navigation} from '../../../components/'

function Notification({navigation}){

	const clearNotification = () => {

	}

	const goBack = () => {
		navigation.goBack()
	}

	return(
		<ScrollView style={{backgroundColor : '#FFFFFF'}}>

			<View style={{marginTop : 20}}>
				<Navigation onPress={() => goBack()} pageTitle={'Clear'} pageTitleEvent={() => clearNotification()}/>
			</View>


			<View style={styles.makeColumn}>
				<View>
					<Text style={styles.textLarge}>Notifications</Text>
				</View>

				<View style={styles.boxNotifActive}>
					<View style={styles.innerNotifPos}>
						<View>
							<Text style={styles.notifTitleActive}>Congratulations</Text>
						</View>
						<View>
							<Text style={styles.notifDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</Text>
						</View>
						<View>
							<Text style={styles.notifDate}>1 June 2020, 12:33 AM</Text>
						</View>
					</View>
				</View>

				<View style={styles.boxNotif}>
					<View style={styles.innerNotifPos}>
						<View>
							<Text style={styles.notifTitle}>Congratulations</Text>
						</View>
						<View>
							<Text style={styles.notifDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....</Text>
						</View>
						<View>
							<Text style={styles.notifDate}>1 June 2020, 12:33 AM</Text>
						</View>
					</View>
				</View>

			</View>
		</ScrollView>
	)

export default Notification;
