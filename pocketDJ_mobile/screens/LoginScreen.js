import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import styles from '../styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  return(
    <View>
      <Image 
    source={require('../assets/mixer.png')}
    style={styles.mixer}
    />
    <View style={styles.loginContainer}>
      <Text style={styles.header}>Login to your account</Text>
      
      <Text>Email Address</Text>
      <TextInput style={styles.textInput}
        defaultValue={email}
        onChangeText={email=>{setEmail(email)}}
        />
      <Text>Password</Text>
      <TextInput style={styles.textInput}
        defaultValue={password}
        onChangeText={pwd=>{setPassword(password)}}
        />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Pick your mood')}>
        <Text>Log in</Text>
        </TouchableOpacity>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.links}>Register Now</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default LoginScreen;