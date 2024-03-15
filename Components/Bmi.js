import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));

      if (bmi < 18.5) {
        setBmiMessage('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiMessage('Normal weight');
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setBmiMessage('Overweight');
      } else {
        setBmiMessage('Obese');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Bmi.jpeg')} style={styles.icon2} />
      <Text style={styles.title}>BMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateBMI}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmiResult && (
        <View>
          <Text style={styles.result}>Your BMI: {bmiResult}</Text>
          <Text style={styles.message}>{bmiMessage}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  icon2: {
    marginTop: -20,
    width: 250,
    height: 250,
    
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 10,
   
    marginLeft:25,
    fontSize: 16,
  },
});

export default BMI;
