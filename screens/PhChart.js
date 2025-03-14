import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image, ScrollView } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient'; 
import { ref, onValue, db } from "../firebase";
import { BarChart } from "react-native-gifted-charts";
import { useNavigation } from '@react-navigation/native';

  const PhChart = () => {
    const navigation = useNavigation();
      const [epochTimes, setEpochTimes] = useState([]);
      const [values, setValues] = useState([]);
      const [selectedChart, setSelectedChart] = useState('daily');
    
      useEffect(() => {
          const phRef = ref(db, 'phchart/');
          onValue(phRef, (snapshot) => {
            const phValues = [];
            snapshot.forEach(childSnapshot => {
              const phdata = childSnapshot.val();
              phValues.push(phdata);
            });
            setValues(phValues);
          });
      }, []);
      useEffect(() => { 
        const timeRef = ref(db, 'timestamp/');
        onValue(timeRef, (snapshot) => {
          const timeValues = [];
          snapshot.forEach(childSnapshot => {
            const timedata = childSnapshot.val();
            timeValues.push(timedata);
          });
          setEpochTimes(timeValues);
        });
    }, []);
  console.log(values.length);
  console.log(epochTimes.length);
    
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
      const epochToTimeUnit = (epochTime, chartType) => {
        const date = new Date(epochTime * 1000);
        switch (chartType) {
          case 'daily':
            return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          case 'weekly':
            const dayOfMonth = date.getDate();
            return `Week ${Math.ceil(dayOfMonth / 7)}`;
          case 'monthly':
            const month = monthNames[date.getMonth()];
            const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
            return `${month} ${year}`;
          case 'yearly':
            return date.getFullYear().toString().slice(-2); // Last two digits of the year
          default:
            return '';
        }
      };
    
      const calculateAverages = (epochTimes, values, chartType) => {
        const timeUnits = {};
    
        epochTimes.forEach((epochTime, index) => {
          const timeUnit = epochToTimeUnit(epochTime, chartType);
          if (!timeUnits[timeUnit]) timeUnits[timeUnit] = [];
          timeUnits[timeUnit].push(values[index]);
        });
    
        return Object.keys(timeUnits).map(timeUnit => ({
          label: timeUnit,
          value: timeUnits[timeUnit].reduce((sum, value) => sum + value, 0) / timeUnits[timeUnit].length,
        }));
      };
    
      const handlePress = (chartType) => {
        setSelectedChart(chartType);
      };
    
      const chartData = calculateAverages(epochTimes, values, selectedChart);
      const chartTitle = selectedChart === 'daily' ? 'Day' :
                         selectedChart === 'weekly' ? 'Week of Month' :
                         selectedChart === 'monthly' ? 'Month' :
                         'Year';
    
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
        <Pressable style={styles.link} onPress={() => navigation.navigate('History')}>
            <Image
			source = {require('../assets/left.png')}
			style={styles.image8}
		/>
			</Pressable>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => handlePress('daily')}>
              <Text style={styles.buttonText}>Daily</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handlePress('weekly')}>
              <Text style={styles.buttonText}>Weekly</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handlePress('monthly')}>
              <Text style={styles.buttonText}>Monthly</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handlePress('yearly')}>
              <Text style={styles.buttonText}>Yearly</Text>
            </Pressable>
          </View>
          <ChartComponent data={chartData} title={chartTitle} />
        </ScrollView>
        </LinearGradient>
      );
    };
    
    const ChartComponent = ({ data, title }) => (
      <View style={styles.chartContainer}>
        <BarChart
          data={data}
          width={370}
          height={250}
          xAxisTitle={title}
          yAxisTitle="Average Value"
          barWidth={30} 
          noOfSections={6}
        />
      </View>
    );
    
    const styles = StyleSheet.create({
      gradient: {
        flex: 1,
        alignItems: 'left',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
      },
      button: {
        backgroundColor: '#007BFF',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      chartContainer: {
        marginVertical: 20,
      },
      link:{
        width: 20,
        height: 35,
        left:20,
        alignItems: "center",
        top: 30,
        paddingHorizontal: 10,
    },
    image8:{
        width: 39,
        height: 39,
        left:0,
        top: 0,
    },
    image2: {
      width: 50,
      height: 50,
      top: 80,
      left: 340,
    },
    });
    
    export default PhChart;
    
        