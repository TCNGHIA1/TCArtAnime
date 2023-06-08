import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PortScreen from "../screens/PortScreen";
import FavoriteSreen from "../screens/FavoriteSreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from "../utils/colors";

const Tab = createBottomTabNavigator();

const MainBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown:false,
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Tìm kiếm",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Port"
        component={PortScreen}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteSreen}
        options={{
          tabBarLabel: "Yêu thích",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Cá nhân",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottom;

const styles = StyleSheet.create({});
