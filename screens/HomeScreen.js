
import { StyleSheet, Text, View, TextInput, Pressable, Alert,Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 
import { auth } from '../firebase-auth';
const HomeScreen = ({navigation, route}) => {
  const handleLogout = async() => {
      auth.signOut().then(() => {navigation.replace("Login");})
  }
 
    //we'll extract the user parameter from route.params
    return (
      <LinearGradient 
      colors={['#FFFFFF', '#00FF00']} // White to Green gradient
      style={styles.gradient}
    >
        <View styles = {styles.container} >
					<View style={styles.row2}>
					</View>
					<Image
						source = {require('../assets/hydroponic.png')}   
						style={styles.image2}
					/>
				</View>
				<Text style={styles.text2}>
					{"AeroCare Management"}
				</Text>
   
        <Pressable style={styles.row3} onPress={() => navigation.navigate('Water')}>
					<Image
						source = {require('../assets/water.png')}   
						style={styles.image3}
					/>
					<Text style={styles.text3}>
						{"Water Management "}
					</Text>
          </Pressable>
			
          <Pressable style={styles.row4} onPress={() => navigation.navigate('Nutrient')}>
					<Image
						source = {require('../assets/nut.png')}  
						style={styles.image5}
					/>
					<Text style={styles.text3}>
						{"Nutrient Management "}
					</Text>
				
				</Pressable>
				<Pressable style={styles.row5} onPress={() => navigation.navigate('History')}>
					<Image
						source = {require('../assets/history.png')}  
						style={styles.image6}
					/>
					<Text style={styles.text3}>
						{"Data History"}
					</Text>
				</Pressable>
        <Pressable style={styles.row7} onPress={() => navigation.navigate('Time')}>
					<Image
						source = {require('../assets/water-pump.png')}   
						style={styles.image8}
					/>
					<Text style={styles.text3}>
						{"Set Timer"}
					</Text>
          </Pressable>
				<Pressable style={styles.row6} onPress={handleLogout}>
					<Image
						source = {require('../assets/logout.png')}  
						style={styles.image7}
					/>
					<Text style={styles.text3}>
						{"Logout"}
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
      top: -100,
      left: 240
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
      marginRight: 12,
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
    image8: {
      width: 41,
      height: 40,
      marginRight: 11,
    },
    row2: {
      width: 204,
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 18,
      paddingVertical: 14,
      paddingHorizontal: 13,
      marginBottom: 70,
      top: -60,
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
      right: 1,
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
      marginBottom: 21,
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
    row7: {
      width: 380,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F6F3F3",
      borderColor: "#080808",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 9,
      paddingHorizontal: 15,
      marginBottom: 21,
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
      marginBottom: 21,
      marginLeft: 25,
      right: 15
    },
    text3: {
      color: "#7F6F6F",
      fontSize: 16,
      
    },
   
  
  });
  export default HomeScreen;