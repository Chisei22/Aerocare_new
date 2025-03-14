import {auth} from '../firebase-auth';
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, SafeAreaView, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
	const time = 0;
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
		  if (user) {
			navigation.replace("Home");
		  }
		});
		return unsubscribe;
	  }, []);
	
	  //function to handle login logic
	  const handleLogin = async() => {
		  if(email.length === 0 || password.length === 0) {
			  Alert.alert('Attention','Please enter both Email and Password');
			  return;
		  }
		signInWithEmailAndPassword(auth, email, password)
		.then(() =>{
			Alert.alert('Login Success', 'Welcome!');
			navigation.navigate('Home');
		})
		  .catch(error => {
			if(error.code == 'auth/invalid-credential'){
				Alert.alert('Wrong Credentials', 'check your Email and Password');
			  }
			else if(error.code == 'auth/configuration-not-found'){
				Alert.alert('Error', 'Email Address does not Exist, Create an account.');
			  }
			  else if(error.code == 'auth/invalid-email') {
                Alert.alert("Invalid Email","Please Enter a Valid Email.");
            }
			else if(error.code == 'auth/network-request-failed') {
                Alert.alert("Please Check your Internet Connection");
            }
			else{
				alert(error);
			}
		  });
	  }
	  return (
		<LinearGradient 
		colors={['#FFFFFF', '#00FF00']} // White to Green gradient
		style={styles.gradient}
	  >
		<View style={styles.container}>
				  <Image source={require('../assets/hydroponic.png')} style = {styles.image}
				  />
				  <Text style={styles.text}>
							  {"AEROCARE"}
						  </Text>
						  <Text style={styles.text2}>
							  {"Log in to your account"}
						  </Text>
						  <View style={styles.row}>
							  <Image
								  source = {require('../assets/user.png')} 
								  resizeMode = {"stretch"}
								  style={styles.image2}
							  />
							  <TextInput 
				  style={styles.text1}
				  placeholder='Email'
				  value={email}
				  onChangeText={setEmail}
			  />
						  </View>
						  <View style={styles.row2}>
							  <Image
								  source = {require('../assets/padlock.png')} 
								  style={styles.image3}
							  />
							  <TextInput 
				  style={styles.text3}
				  placeholder='Password'
				  secureTextEntry
				  value={password}
				  onChangeText={setPassword}
			  />
						  </View>
						  <Pressable style={styles.button} onPress={handleLogin}>
							  <Text style={styles.text4}>
								  {"Login"}
							  </Text>
						  </Pressable>
			
			<Pressable style={styles.link} onPress={() => navigation.navigate('Register')}>
				<Text style={styles.text5}>Don’t have an account? Register</Text>
				</Pressable>
			<Pressable style={styles.link1} onPress={() => navigation.navigate('Forgot')}>
				<Text style={styles.text6}>Forgot Password?</Text>
				</Pressable>
			</View>
			
			</LinearGradient>
	  );
  };
  const styles = StyleSheet.create({
	container: {
		flex: 0,
	  },
	gradient: {
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	  
		image: {
		alignContent: "stretch",
	  justifyContent: 'center',
		width: 100,
		height: 100,  
		top: 100,
		left: 122,
	  },
	  image2: {
		  width: 33,
		  height: 33,
		  marginRight: 10,
	  },
	  image3: {
		  width: 33,
		  height: 33,
		  marginRight: 11,
	  },
	  row: {
		  flexDirection: "row",
		  alignItems: "center",
		  backgroundColor: "#F6F3F3",
		  borderColor: "#080808",
		  borderRadius: 12,
		  borderWidth: 1,
		  paddingVertical: 12,
		  paddingHorizontal: 14,
		  marginBottom: 23,
		  marginHorizontal: -15,
	  	  top:100,
	  },
	  row2: {
		  flexDirection: "row",
		  alignItems: "center",
		  backgroundColor: "#F6F3F3",
		  borderColor: "#080808",
		  borderRadius: 12,
		  borderWidth: 1,
		  paddingVertical: 12,
		  paddingHorizontal: 15,
		  marginBottom: 100,
		  marginHorizontal: -15,
	  top: 100,
	  },
	  text: {
	  alignItems: "center",
		  color: "#000000",
		  fontSize: 24,
		  marginBottom: 32,
		  marginLeft: 140,
	  top: 100,
	  left: -30,
	  },
	text1: {
		  color: "#7F6F6F",
		  fontSize: 20,
		  flex: 1,
	  },
	  text2: {
		  color: "#000000",
		  fontSize: 20,
		  marginBottom: 22,
		  marginLeft: 24,
	  left: -30,
	  top: 100,
	  },
	  text3: {
		  color: "#7F6F6F",
		  fontSize: 20,
		  flex: 1,
	  },
	  text4: {
		  color: "#FFFFFF",
		  fontSize: 32,
	  },
	  text5: {
		  color: "#1812BB",
		  fontSize: 20,
	  paddingHorizontal: -40,
	  textDecorationLine: 'underline',
	  top: 0,
	  },
	button: {
	  alignItems: "center",
	  backgroundColor: "#5DAFE9",
	  paddingHorizontal: 60,
	  paddingVertical: 12,
	  marginVertical: 15,
	  width:'80%',
	  borderRadius: 10,
	  marginHorizontal:70,
	  borderWidth: 1,
	  top: 20,
	},
	link : {
	  alignItems: "center",
	  top: 40,
	  marginBottom: 30,
  
	},
	link1 : {
		alignItems: "center",
		marginTop: 270,
		top: -100,
		left: 90,
		width: 190,	
	  },
	  text6: {
		color: "#000000",
		fontSize: 20,
	},
  
  });
	export default LoginScreen;