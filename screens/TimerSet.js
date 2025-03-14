import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image } from 'react-native';
import { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient'; 
import { ref, onValue, db , set} from "../firebase";
import { useNavigation } from '@react-navigation/native';
import { update } from 'firebase/database';

const TimeSet = () =>{
  const navigation = useNavigation();
    const [timerOninp, settimerOn] = useState ('');
    const [timerOffinp, settimerOff] = useState ('');
      const ConvertHoursOn = () => {
      const timerOn = timerOninp*3600000
        update(ref(db),{
          timerOn: timerOn,
        });
        Alert.alert('Time Off set as '+timerOninp+' Hour/s');
       console.log(timerOn);
	  }
      const ConvertMinOn= () => {
        const timerOn = timerOninp*60000
        update(ref(db),{
          timerOn: timerOn,
        });
        Alert.alert('Time Off set as '+timerOninp+' Minute/s');
       console.log(timerOn);
    
	  }
      const ConvertSecondsOn= () => {
        const timerOn = timerOninp*1000
        update(ref(db),{
          timerOn: timerOn,
        });
        Alert.alert('Time Off set as '+timerOninp+' Second/s');
       console.log(timerOn);
       
	  }
      const ConvertHoursOff= () => {
        const timerOff = timerOffinp*3600000
        update(ref(db),{
          timerOff: timerOff,
        });
        Alert.alert('Time Off set as '+timerOffinp+' Hour/s');
       console.log(timerOff);
	  }
      const ConvertMinOff = () => {
        const timerOff = timerOffinp*60000
        update(ref(db),{
          timerOff: timerOff,
        });
        Alert.alert('Time Off set as '+timerOffinp+' Minute/s');
       console.log(timerOff);
	  }
      const ConvertSecondsOff= () => {
        const timerOff = timerOffinp*1000
        update(ref(db),{
          timerOff: timerOff,
        });
        Alert.alert('Time Off set as '+timerOffinp+' Second/s');
       console.log(timerOff);
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
                           <Pressable style={styles.link} onPress={() => navigation.navigate('Home')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image2}
		/>
    </Pressable>
                          <Text style={styles.text}>
                              {"Input On Time"}
                          </Text>
                          <Text style={styles.text2}>
                              {"Input Off Time"}
                          </Text>
                          
                          <View style={styles.view}>
                              <TextInput 
                              placeholder='Input On Time'
                                keyboardType="numeric"
                              style={styles.text3}
                            value={timerOninp}
                        onChangeText={settimerOn}
                          />
                          </View>
                          <View style={styles.view2}>
                              <TextInput style={styles.text3}
                              placeholder='Input Off Time'
                               keyboardType="numeric"
                              value={timerOffinp}
                              onChangeText={settimerOff}
                              />
                          </View>
                          
                          <View style={styles.row1}>
                          <Pressable style={styles.button1} onPress={ConvertHoursOn}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Hr"}
                              </Text>
                          </View>
                          </Pressable>
                          <Pressable style={styles.button1} onPress={ConvertMinOn}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Min"}
                              </Text>
                          </View>
                          </Pressable>
                          <Pressable style={styles.button1} onPress={ConvertSecondsOn}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Sec"}
                              </Text>
                          </View>
                          </Pressable>

                          <View style={styles.row2}>
                          <Pressable style={styles.button2} onPress={ConvertHoursOff}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Hr"}
                              </Text>
                          </View>
                          </Pressable>
                          <Pressable style={styles.button2} onPress={ConvertMinOff}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Min"}
                              </Text>
                          </View>
                          </Pressable>
                          <Pressable style={styles.button2} onPress={ConvertSecondsOff}>
                          <View style={styles.view3}>
                              <Text style={styles.text5}>
                                  {"Sec"}
                              </Text>
                          </View>
                          </Pressable>
                          </View>
                          </View>
                </View>
                </LinearGradient>
      )
    }
    const styles = StyleSheet.create({
        container: {
              flex: 0,
          },
        gradient: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        link:{
          width: 20,
          height: 35,
          left: -75,
          alignItems: "center",
          top: -270,
          paddingHorizontal: 0,
      },
          image: {
            width: 50,
            height: 50,
            left:220,
            top: -110,
            marginBottom: 116,
            marginHorizontal: 21,
          },
          text: {
            alignItems: "center",
            color: "#000000",
            fontSize: 24,
            fontWeight: 'bold',
            top: -150,
            left: 25,
          },
          text2: {
            alignItems: "center",
            color: "#000000",
            fontWeight: 'bold',
            fontSize: 24,
            left: 25,
            top: 60
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
          view: {
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
              top:-150,
          },
          view2: {
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
              top:0,
          },
          view3: {
            alignItems: "center",
            backgroundColor: "#5DAFE9",
            borderRadius: 12,
            paddingVertical: 19,
            paddingHorizontal: 12,
            marginHorizontal: -50,
            
          },
        button1: {
	  alignItems: "center",
	  backgroundColor: "#5DAFE9",
	  paddingHorizontal: 35,
	  paddingVertical: 5,
	  marginVertical: 0,
	  borderRadius: 10,
	  marginHorizontal:2.5,
	  borderWidth: 1,
	  top: 60,
    right: 13,
	},
  image2:{
    width: 39,
    height: 39,
},
      row1:{ 
        width: 204,
        alignSelf: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 18,
        paddingVertical: 14,
        top: -330,
        
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#5DAFE9",
        paddingHorizontal: 35,
        paddingVertical: 5,
        marginVertical: 0,
        borderRadius: 10,
        marginHorizontal:2.5,
        borderWidth: 1,
        top: 90,
      },
        row2:{ 
          width: 204,
          alignSelf: "flex-start",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 18,
          paddingVertical: 14,
          top: 200,
          right:243,
      },

        });



export default TimeSet;