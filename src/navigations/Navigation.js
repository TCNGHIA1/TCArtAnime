import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from '../views/Main';
import Login from '../views/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '../utils/ThemeContext';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Login} />
      </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})