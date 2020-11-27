import React,{useState} from 'react'
import {View, Text, TouchableNativeFeedback} from 'react-native'
import styles from './mobilenavigation.style.js'
import Icon from 'react-native-vector-icons/Feather'

function MobileNavigation(){
	return(
		<View style={styles.postionBetween}>
			<View>
				<Text style={styles.textLarge}>My Booking</Text>	
			</View>

			<View style={{flexDirection : 'row', lineHeight : '50',marginTop : 5}}>
				<View style={{marginRight : 20}}>
					<View style={{width : 20, height : 20, borderRadius : 360, borderWidth : 4,backgroundColor : '#2395FF', borderColor: 'white', borderWidth: 2, left: 23 }} />						
					<View style={{position : 'relative', bottom :20}}>
						<Icon name='mail' size={36} color={'#595959'}/>												
					</View>

				</View>
				<View>
					<Icon name='bell' size={36}/>
				</View>
			</View>
			
		</View>
	)
}

export default MobileNavigation