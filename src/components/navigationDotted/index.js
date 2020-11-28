import React,{useState} from 'react'
import {View, Text, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './navigationdotted.style.js'


function NavigationDotted(props){
	const {onPress, pageTitle, dotAction} = props

	return(
		<View style={styles.navigateDis}>
			<View style ={{flexDirection : 'row'}}>
				<TouchableNativeFeedback onPress={onPress}>
			 		<Icon name="chevron-left" size={25} color="white" />
			 	</TouchableNativeFeedback>

			 	<View style={{marginLeft : 37}}>
			 		<Text style={styles.pageTitle}>{pageTitle}</Text>
			 	</View>
			</View>

			<View>
				<TouchableNativeFeedback onPress={dotAction}>
					<Icon name="dots-vertical" size={25} color="white"/>
				</TouchableNativeFeedback>
			</View>
		</View>
	)
}

export default NavigationDotted