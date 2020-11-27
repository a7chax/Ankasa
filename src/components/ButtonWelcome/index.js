import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'

export default function ButtonWelcome({title,active,onPress}) {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.button(active)}>
                <Text style={styles.btnTitle(active)}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: (active) => ({
        backgroundColor: active ? '#2395FF' : '#2395FF',
        paddingVertical:12,
        padding: 80,
        borderRadius:10,
        shadowOpacity:0.01,
        elevation:0.01,
        shadowColor:'rgba(35, 149, 255, 0.3)'
    }),
    btnTitle: (active) => ({
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        color: active ? '#fff' : '#fff'
    })
})