import React,{useState} from 'react'
import {View, Text, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './navigation.style.js'


function Navigation(props){
	const {onPress, pageTitle} = props

	return(
		<View style={styles.navigateDis}>
			<View>
				<TouchableNativeFeedback onPress={onPress}>
			 		<Icon name="chevron-left" size={25} color="black" />
			 	</TouchableNativeFeedback>
			</View>

			<View>
				<Text style={styles.textTitle}>{pageTitle}</Text>
			</View>
		</View>
	)
}

export default Navigation