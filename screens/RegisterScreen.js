import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 
import { useState } from 'react';
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-auth'
const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //function to handle registration logic
    const handleRegister = async() => {
        if  (email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
            Alert.alert('Attention!', 'Please enter all the fields.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Password do not match');
            return;
        }
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            Alert.alert('Success', 'Registration successful!');
            navigation.navigate('Login');
          })
          .catch(error => {
            if(error.code == 'auth/email-already-in-use'){
              Alert.alert('Error', 'Email Address is Already in Use!');
            }
            else if(error.code == 'auth/invalid-email'){
              Alert.alert('Error', 'Email Addres is Invalid!');
            }
            else if(warn.code == 'auth/password-does-not-meet-the-requirements'){
              Alert.alert('Password does not meet the requirements');
            }
            console.error(error);
            
          });
    }

    return (
    <LinearGradient 
      colors={['#FFFFFF', '#00FF00']} // White to Green gradient
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
							source = {require('../assets/hydroponic.png')}
							style={styles.image}
						/>
						<Text style={styles.text}>
							{"REGISTER"}
						</Text>
						<Text style={styles.text2}>
							{"Create your account"}
						</Text>
						<View style={styles.view}>
							<TextInput 
							style={styles.text3}
							placeholder='Email'
                value={email}
                onChangeText={setEmail}
				/>
						</View>
						<View style={styles.view}>
							<TextInput style={styles.text3}
							placeholder='Password'
							secureTextEntry
                			value={password}
                			onChangeText={setPassword}
							/>
						</View>
						<View style={styles.view2}>
							<TextInput style={styles.text3}
							placeholder='Confirm password'
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
						/>
						</View>
						<Pressable style={styles.button} onPress={handleRegister}>
						<View style={styles.view3}>
							<Text style={styles.text4}>
								{"Register"}
							</Text>
						</View>
						</Pressable>
              </View>
              </LinearGradient>
    )
};
const styles = StyleSheet.create({
  container: {
		flex: 1,
	},
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    image: {
      width: 50,
      height: 50,
      left:235,
      top: 19,
      marginBottom: 116,
      marginHorizontal: 21,
    },
    text: {
      alignItems: "center",
      color: "#000000",
      fontSize: 24,
      marginBottom: 32,
      marginLeft: 140,
      top: 5,
      left: -70,
    },
    text2: {
      color: "#000000",
      fontSize: 20,
      marginBottom: 21,
      marginLeft: 17,
      left: -62,
      top: 7
    },
    text3: {
      color: "#7F6F6F",
      fontSize: 15,
    },
    text4: {
      color: "#FFFFFF",
      fontSize: 32,
    },
    view: {
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 13,
      paddingHorizontal: 14,
      marginBottom: 23,
      marginHorizontal: -50,
    },
    view2: {
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 13,
      paddingHorizontal: 12,
      marginBottom: 23,
      marginHorizontal: -50,
    },
    view3: {
      alignItems: "center",
      backgroundColor: "#5DAFE9",
      borderRadius: 12,
      paddingVertical: 19,
      paddingHorizontal: 12,
      marginHorizontal: -50,
    },
  });
  export default RegisterScreen;