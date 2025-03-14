import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { ref, onValue, db } from "../firebase";
import { BarChart } from "react-native-gifted-charts";;

const Test = () => {
  const epochTimes = [1732699435, 1732699443, 1732699448, 1732699458, 1732699494,];
  const values = [50, 80, 70, 60, 90, 40, 30, 20];

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

  const [selectedChart, setSelectedChart] = useState('daily');

  const handlePress = (chartType) => {
    setSelectedChart(chartType);
  };

  const chartData = calculateAverages(epochTimes, values, selectedChart);
  const chartTitle = selectedChart === 'daily' ? 'Day' :
                     selectedChart === 'weekly' ? 'Week of Month' :
                     selectedChart === 'monthly' ? 'Month' :
                     'Year';

  return (
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
  );
};

const ChartComponent = ({ data, title }) => (
  <View style={styles.chartContainer}>
    <BarChart
      data={data}
      width={350}
      height={200}
      xAxisTitle={title}
      yAxisTitle="Average Value"
      barWidth={30}
    />
  </View>
);

const styles = StyleSheet.create({
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
});

export default Test;
