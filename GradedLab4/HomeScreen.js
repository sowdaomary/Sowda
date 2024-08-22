import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

  const handleGetStarted = () => {
    navigation.navigate('Form1'); 
  };

  return (
    <ScrollView style={styles.continer}>
      <Text style={styles.header}>Seoul Garden</Text>
      <Text style={styles.welcome}>
        Welcome to Seoul Garden The Best Korean cuisine in South Africa!!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.button}>Get Started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
continer:{
backgroundColor: 'lightblue',
},
header:{
flex:1,
textAlign: 'center',
fontWeight: 'bold',
fontSize: 30,
},
welcome:{
flex:1,
fontFamily:'Arial',
fontSize:20,
marginTop: 100,
textAlign: 'center',
justifyContent: 'center',
},
button: {
  backgroundColor: 'lightgreen',
  padding: 1,
  borderRadius: 30,
  alignItems: 'center',
  marginTop: 20,
  },
})