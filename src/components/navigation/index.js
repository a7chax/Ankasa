import React,{useState} from 'react'
import {View, Text, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './navigation.style.js'


function Navigation(props){
	const {backTo, pageTitle} = props

	return(
		<View style={styles.navigateDis}>
			<View>
			 	<Icon name="chevron-left" size={30} color="black" />
			</View>

			<View>
				<Text style={styles.textTitle}>Regular Login</Text>
			</View>
		</View>
	)
}

export default Navigation