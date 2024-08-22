import React from 'react';
import HomeScreen from './GradedLab4/HomeScreen';  
import MenuScreen from './GradedLab4/MenuScreen';
import CartScreen from './GradedLab4/CartScreen';
import ProfileScreen from './GradedLab4/ProfileScreen';
import { CartProvider } from './GradedLab4/CartContext';


import { ThemeProvider } from './GradedLab4/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Form1Screen from './GradedLab4/Form1Screen';
import Form2Screen from './GradedLab4/Form2Screen';
import Form3Screen from './GradedLab4/Form3Screen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  

  


  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home'; 
                } else if (route.name === 'Cart') {
                  iconName = 'cart';
                } else if (route.name === 'Profile') {
                  iconName = 'person';
                } else if (route.name === 'Menu') {
                  iconName = 'menu'
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
            }}
          >

          <Stack.Screen name="Form1" component={Form1Screen} />
        <Stack.Screen name="Form2" component={Form2Screen} />
        <Stack.Screen name="Form3" component={Form3Screen} />
        
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile">
              {() => <ProfileScreen userProfile={userProfile} />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </CartProvider>
    </ThemeProvider>
  );
}
