import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert,Image } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient'; 
import { useState } from 'react';
import WaterScreen from './WaterScreen';


const HistoryScreen = ({navigation, route}) => {

    //we'll extract the user parameter from route.params
    return (
      <LinearGradient 
      colors={['#FFFFFF', '#00FF00']} // White to Green gradient
      style={styles.gradient}
    >
        <View styles = {styles.container} >
					<Image
						source = {require('../assets/hydroponic.png')}   
						style={styles.image2}
					/>
				</View>
        <Pressable style={styles.link} onPress={() => navigation.navigate('Home')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image8}
		/>
			</Pressable>
				<Text style={styles.text2}>
					{"AeroCare Data History"}
				</Text>
   
        <Pressable style={styles.row3} onPress={() => navigation.navigate('PH')}>
					<Image
						source = {require('../assets/ph-balance.png')}   
						style={styles.image3}
					/>
					<Text style={styles.text3}>
						{"pH Chart"}
					</Text>
          </Pressable>
			
          <Pressable style={styles.row4} onPress={() => navigation.navigate('TDS')}>
					<Image
						source = {require('../assets/tax-deducted-at-source.png')}  
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"TDS Chart "}
					</Text>
				
				</Pressable>
				<Pressable style={styles.row5} onPress={() => navigation.navigate('Temp')}>
					<Image
						source = {require('../assets/humidity.png')}  
						style={styles.image6}
					/>
					<Text style={styles.text3}>
						{"Water Temperature Chart"}
					</Text>
				</Pressable>
		        </LinearGradient>
    )
}
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
      width: 33,
      height: 33,
      marginRight: 7,
    },
    image2: {
      width: 50,
      height: 50,
      top: 15,
      left: 150,
    },
    image3: {
      width: 41,
      height: 40,
      marginRight: 9,
    },
    image4: {
      height: 8,
      marginTop: 5,
    },
    image5: {
      width: 41,
      height: 40,
      marginRight: 9,
      left: 8,
    },
    image6: {
      width: 41,
      height: 40,
      marginRight: 8,
    },
    image7: {
      width: 41,
      height: 40,
      marginRight: 11,
    },
    row2: {
      width: 204,
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#70DC11",
      borderRadius: 18,
      paddingVertical: 14,
      paddingHorizontal: 13,
      top: -70,
      right: 90
    },
    row3: {
      width: 380,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 13,
      marginBottom: 21,
      marginHorizontal: 20,
      right: 1
    },
    row4: {
      width: 380,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 9,
      marginBottom: 21,
      marginHorizontal: 13,
      right: 1
    },
    row5: {
      width: 380,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 9,
      paddingHorizontal: 15,
      marginBottom: 400,
      marginHorizontal: 15,
      right: 1
    },
    row6: {
      width: 380,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 9,
      paddingHorizontal: 14,
      marginBottom: 156,
      marginHorizontal: 15,
      right: 1
    },
    text: {
      color: "#000000",
      fontSize: 15,
      flex: 1,
    },
    text2: {
      color: "#000000",
      fontSize: 20,
      marginBottom: 90,
      marginLeft: 25,
      bottom: -40,
      right: 15
    },
    text3: {
      color: "#7F6F6F",
      fontSize: 16,
      
    },
    link:{
      width: 20,
      height: 35,
      left:-170,
      alignItems: "center",
      top: -30,
      paddingHorizontal: 10,
  },
  image8:{
      width: 39,
      height: 39,
      left:0,
      top: 0,
  },
  
  });
  export default HistoryScreen;