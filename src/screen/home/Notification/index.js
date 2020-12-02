import React,{useEffect, useState} from 'react'
import {
	ScrollView,
	View,
	Text
} from 'react-native'
import styles from './notification.style.js'
import {Navigation} from '../../../components/'
import {useSelector, useDispatch} from 'react-redux';
import {getNotif} from '../../../redux/actions/DetailBooking'
import moment from 'moment';

function Notification({navigation}){

	const clearNotification = () => {

	}


	const {token} = useSelector((state) => state.Auth);
	const {dataNotif} = useSelector((state) => state.DetailBooking);

	const dispatch = useDispatch()

	const goBack = () => {
		navigation.goBack()
	}

	useEffect(() => {	
		dispatch(getNotif(token))

		// console.log(dataNotif)
	}, [])

	return(
		<ScrollView style={{backgroundColor : '#FFFFFF'}}>

			<View style={{marginTop : 20}}>
				<Navigation onPress={() => goBack()} pageTitle={'Clear'} pageTitleEvent={() => clearNotification()}/>
			</View>


			<View style={styles.makeColumn}>
				<View>
					<Text style={styles.textLarge}>Notifications</Text>
				</View>


					{ dataNotif == '' || dataNotif == undefined ? 
						(
						<View style={styles.boxNotif}>
							<View style={styles.innerNotifPos}>
								<View>
									<Text style={styles.notifTitle}>{dataNotif.title}</Text>
								</View>
								<View>
									<Text style={styles.notifDesc}>{dataNotif.description}</Text>
								</View>
								<View>
									<Text style={styles.notifDate}>{dataNotif.created_at}</Text>
								</View>
							</View>
						</View>		
						):
						
						<Text style={{fontSize : 19}}>Data tidak ditemukan</Text> || dataNotif.map(item => {
							return(
								<View style={styles.boxNotif}>
									<View style={styles.innerNotifPos}>
										<View>
											<Text style={styles.notifTitle}>{dataNotif.title}</Text>
										</View>
										<View>
											<Text style={styles.notifDesc}>{dataNotif.description}</Text>
										</View>
										<View>
											<Text style={styles.notifDate}>{dataNotif.created_at}</Text>
										</View>
									</View>
								</View>		
							)
						})

						

					}
					
				


			</View>
		</ScrollView>
	)
}
export default Notification;