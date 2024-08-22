import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function Form2Screen({ navigation, route }) {
  // Retrieve data from the previous screen
  const { name, email, phone } = route.params || {};

  // State variables for address fields
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = () => {
    // Basic validation
    if (!address || !city || !state || !zip) {
      Alert.alert('Error', 'Please fill in all address fields');
      return;
    }
    if (!/^\d{5}(-\d{4})?$/.test(zip)) {
      Alert.alert('Error', 'Please enter a valid zip code (5 digits or 5+4)');
      return;
    }

    // Navigate to Menu screen with all data
    navigation.navigate('Menu', { name, email, phone, address, city, state, zip });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Address Details</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        keyboardType="numeric"
        value={zip}
        onChangeText={setZip}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
