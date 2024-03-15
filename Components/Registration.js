import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistration = () => {
    if (email && password && confirmPassword && password === confirmPassword) {
      console.log('Registration successful');
      navigation.navigate('Login');
    } else {
      console.log('Invalid registration details');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Bmi.jpeg')} style={styles.icon2} />
      <Text style={styles.title}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Register" onPress={() => navigation.navigate('Login')} />
      <Text style={styles.title2}>-- Or sign in with --</Text>
      <View style={styles.logo}>
        <Image source={require('../assets/face.png')} style={styles.icon} />
        <Image source={require('../assets/google.jpeg')} style={styles.icon} />
        <Image source={require('../assets/twitter.png')} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title2: {
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    marginTop: 20,
    width: 40,
    height: 30,
  },
  icon2: {
    marginTop: -20,
    width: 250,
    height: 250,
  }
});

export default Registration;
