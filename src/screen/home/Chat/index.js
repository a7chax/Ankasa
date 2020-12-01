import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './Chat.component';
import ArrowLeft from '../../../assets/illustration/arrow-left-white.svg';
import ArrowRight from '../../../assets/illustration/send.svg';

export default function Chat({navigation}) {
  const [chat, setChat] = useState('');

  const onSubmit = () => {};
  return (
    <View style={styles.colorContainer}>
      <StatusBar backgroundColor="#2395FF" barStyle="light-content" />
      <View style={styles.topBar}>
        <View style={styles.topBarContent}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            {/* Gambar Panah */}
            <ArrowLeft width={28} height={28} />
          </TouchableOpacity>
          {/* Profil Customer Service */}
          <View style={styles.customerService}>
            {/* <Image source={require('../../../assets/illustration/user.png')} style={styles.profPic} /> */}
            <Text style={styles.topBarText}>Customer Service</Text>
          </View>
        </View>
      </View>

      <View style={styles.botChat}>
        <Text style={styles.chatText}>Hi, Ask me anything!</Text>
      </View>

      <View style={styles.chatSent}>
        <Text style={styles.chatText}>Yahahahayyu</Text>
      </View>

      <View style={styles.chatContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          autoCapitalize="none"
          onChangeText={(text) => setChat(text)}
          value={chat}
          returnKeyType="send"
        />
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <ArrowRight height={28} width={28} style={styles.submitButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
