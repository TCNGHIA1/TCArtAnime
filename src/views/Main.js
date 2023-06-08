import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainBottom from '../navigations/MainBottom';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainBottom" component={MainBottom}/>
    </Stack.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})