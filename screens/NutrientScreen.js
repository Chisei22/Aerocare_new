import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient'; 
import { ref, onValue, db } from "../firebase";

const NutrientScreen = () => {
  const navigation = useNavigation();
  const [tds, settds] = useState(60);
  const [ph, setph] = useState(60);
  useEffect(() => {
    const sensor = ref(db);

    onValue(sensor, (snapshot) => {
      settds(Math.round(snapshot.val().tds));
    });
    onValue(sensor, (snapshot) => {
      setph(snapshot.val().ph);
    });
  }, [db]);        
 
    return (
      
        <LinearGradient 
        colors={['#FFFFFF', '#00FF00']} // White to Green gradient
        style={styles.gradient}
      >   
      <View styles = {styles.container} >
					<View style={styles.row2}>
          <Image
						source = {require('../assets/hydroponic.png')}   
						style={styles.image}
					/>
          <Pressable style={styles.link} onPress={() => navigation.navigate('Home')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image2}
		/>
			</Pressable>
					</View>
				</View>
        <View style={styles.spacer}></View> 
        <View style={styles.tempWrapper}>
        <Text style={styles.text}>{tds} PPM</Text>
        <Text style={styles.text2}>Total Dissolve Salts</Text>
      </View>

      <View style={styles.spacer1}></View> 
        <View style={styles.tempWrapper1}>
        <Text style={styles.text3}>{ph} pH</Text>
        <Text style={styles.text4}>pH Value</Text>
      </View>
      <Pressable style={styles.link} onPress={() => navigation.navigate('home')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image2}
		/>
			</Pressable>
    
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
},
row2: {
  width: 204,
  alignSelf: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: 18,
  paddingVertical: 14,
  paddingHorizontal: 13,
  top: -70,
  right: 90
},
image: {
  width: 50,
  height: 50,
  top: 100,
  left: 300
},
link:{
  width: 20,
  height: 30,
  left: -50,
  alignItems: "center",
  top: 110,
  paddingHorizontal: 0,
},
image2:{
  width: 39,
  height: 39,
  left: 0,
  top: -5,
},
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
    tempWrapper: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(125, 249, 255, 0.5)",
      flexDirection: "column",
      length: "20%",
      alignItems: "center",
      width: "90%",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#6082B6",
      bottom: 180,
    },
    text: {
      fontSize: 50,
      fontWeight: "500",
      marginRight: -50,
      bottom: -30,
      right: 70,
      color: "black",
      paddingRight: 10,
    },
    text2: {
      fontSize: 30,
      fontWeight: "120",
      top: -90,
      marginRight: 70,
      color: "black",  
    },
    data: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    spacer: {
      height: "40%",
    },
    spacer1: {
      height: "10%",
    },
    text3: {
      fontSize: 50,
      fontWeight: "500",
      marginRight: -50,
      bottom: -30,
      right: 70,
      color: "black",
      paddingRight: 10,
    },
    text4: {
      fontSize: 30,
      fontWeight: "120",
      top: -90,
      marginRight: 200,
      color: "black",  
    },
    tempWrapper1: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(125, 249, 255, 0.5)",
      flexDirection: "column",
      length: "20%",
      alignItems: "center",
      width: "90%",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "#6082B6",
      bottom: 230,
    },
   
}
);

export default NutrientScreen;