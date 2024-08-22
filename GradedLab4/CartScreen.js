import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCart } from './CartContext';

export default function CartScreen() {
  const { cart, removeFromCart } = useCart();

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1; 
      return acc;
    }, {})
  );

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1, 
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantity = Math.max((prevQuantities[id] || 1) - 1, 1); 
      return {
        ...prevQuantities,
        [id]: newQuantity,
      };
    });
  };

  const total = () => {
    return cart.reduce((total, item) => {
      return total + (item.price.replace('R', '') * (quantities[item.id] || 1));
    }, 0).toFixed(2);
  };


  const handleCheckout = () => {
  Alert.alert(
    'Confirm Checkout',
    'Are you sure you want to proceed to checkout?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          clearCart();
          Alert.alert('Success', 'Your order has been placed!');
        },
      },
    ]
  );
};

  return (
    <ScrollView style={styles.container}>
      {cart.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>R{item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.button}>
              <Text style={styles.buttonminusadd}>+</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantities[item.id]}</Text>
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.button}>
              <Text style={styles.buttonminusadd}>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeFromCart(item.id)}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R{total()}</Text>
        <TouchableOpacity style={styles.button} onPress={handleCheckout}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  buttonminusadd: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'lightcoral',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
