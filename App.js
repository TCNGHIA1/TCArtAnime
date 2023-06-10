import React from "react";
import { ThemeProvider } from './src/utils/ThemeContext';
import Navigation from "./src/navigations/Navigation.js";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <ThemeProvider>
      <View style={{flex:1}}>
        <StatusBar hidden/>
        <Navigation/>
      </View>
    </ThemeProvider>
  );
}
