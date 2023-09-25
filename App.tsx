import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from './src/Screens/OnboardingScreen';
import LoginScreen from './src/Screens/LoginScreen';

const AppStack= createStackNavigator();

const App =() =>{
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;