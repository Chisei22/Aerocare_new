import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
    Alert,
    Pressable,
  } from "react-native";
  import {LinearGradient} from 'expo-linear-gradient'; 
  import { StatusBar } from "react-native";
  import { useState } from "react";
  import React from "react";
  import { auth } from "../firebase-auth";
  import { sendPasswordResetEmail } from "firebase/auth";
  import { useNavigation } from "@react-navigation/native";
  
  const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
  
    const navigation = useNavigation();
  
    const handlePasswordReset = async () => {
      await sendPasswordResetEmail(auth, email)
        .then(() =>{
          Alert.alert("Email Confirmation", "Password reset email sent")
        })
        .catch(error => {
            if(error.code == 'auth/missing-email'){
                Alert.alert("No Existing Account with this Email.");
            }
            else if(error.code == 'auth/invalid-email'){
                Alert.alert("Please Enter a Valid Email.");
            }
          console.log("Error", error.message);
        });
    };
  
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
        <Image
			source = {require('../assets/rotate.png')}
			style={styles.image1}
		/>
        <Text style={styles.text1}>Reset Your Password</Text>
		<View style={styles.view2}>
            <TextInput
            placeholder="Enter Your Email Address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
        />
		</View>			
			<TouchableOpacity onPress={handlePasswordReset} style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
            <Pressable style={styles.link} onPress={() => navigation.navigate('Login')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image2}
		/>
			</Pressable>
      
              </View>
              </LinearGradient>
    );
  };
  
  export default ForgotPasswordPage;
  
  const styles = StyleSheet.create({
    container: {
		flex: 1,
        alignItems: 'center',
	},
    text1:
    {
        color: "black",
        fontWeight: "700",
        fontSize: 30,
        textAlign: "center",
        top: 70,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
        image: {
          width: 50,
          height: 50,
          left:155,
          top: 40,
          marginBottom: 116,
          marginHorizontal: 21,
        },
        image1:{
            width: 150,
            height: 150,
            left:0,
            top: 40,
            marginBottom: 20,
            marginHorizontal: 21,
        },
        link:{
            width: 20,
            height: 35,
            left:-85,
            alignItems: "center",
            top: -460,
            paddingHorizontal: 0,
        },
        image2:{
            width: 39,
            height: 39,
            left:-100,
            top: -30,
            marginBottom: 20,
            marginHorizontal: 21,
        },
          buttonText: {
            color: "white",
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
          },
          button: {
            backgroundColor: "#5DAFE9",
            width: "60%",
            padding: 15,
            borderRadius: 10,
            alignItems: "center",
            marginBottom: 10,
            height: 55,
            top: 100,
            left: 0,
          },
          view2: {
            backgroundColor: "#F6F3F3",
            borderColor: "#080808",
            borderRadius: 12,
            borderWidth: 1,
            paddingVertical: 13,
            paddingHorizontal: 12,
            marginBottom: 30,
            top: 100,
            marginHorizontal: 0,
          },
    
  });