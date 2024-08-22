import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function Form3Screen({ route, navigation }) {

  const { name, email, phone, address, city, state, zip } = route.params || {};

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {

    if (!cardNumber || !expiryDate || !cvv) {
      Alert.alert('Error', 'Please fill in all payment fields');
      return;
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert('Error', 'Please enter a valid credit card number (16 digits)');
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      Alert.alert('Error', 'Please enter a valid expiration date (MM/YY)');
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      Alert.alert('Error', 'Please enter a valid CVV (3 digits)');
      return;
    }

    navigation.navigate('Menu', { name, email, phone, address, city, state, zip, cardNumber, expiryDate, cvv });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Payment Details</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        placeholderTextColor="black" 
        keyboardType="numeric"
        maxLength={16}
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      
      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        placeholderTextColor="black" 
        keyboardType="numeric"
        maxLength={5}
        value={expiryDate}
        onChangeText={setExpiryDate}
      />
      
      <TextInput
        style={styles.input}
        placeholder="CVV"
        placeholderTextColor="black" 
        keyboardType="numeric"
        maxLength={3}
        value={cvv}
        onChangeText={setCvv}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
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
