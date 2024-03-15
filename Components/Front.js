import React from 'react';
import { ImageBackground, StyleSheet, Image, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('../assets/back.jpeg');

const Front = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Image source={require('../assets/Bmi.jpeg')} style={styles.text} />
        <TouchableOpacity style={styles.text2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>To Check BMI</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};









const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    
        marginTop: 20,
        width: 250,
        marginLeft:70,
        
        borderTopLeftRadius: 55, 
        borderTopRightRadius: 25, 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 55,
        alignContent:"center",
        height: 250,
        
     
  },
  text2: {
    backgroundColor:"blue",
    marginTop: 20,
    width: 140,
    marginLeft:140,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   borderRadius:5,
   color:"white",
    alignContent:"center",
    height: 35,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Front;