import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PortScreen from "../screens/PortScreen";
import FavoriteSreen from "../screens/FavoriteSreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from "../utils/colors";
import Contains from "../utils/Contains";
import { ThemeContext } from "../utils/ThemeContext";
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainBottom = () => {
  const context = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
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
          headerShown: false,
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
          tabBarLabel: "",
          headerShown: false,
          tabBarButton: ({ accessibilityState, children, onPress }) => (
            <TouchableOpacity style={Contains.default} onPress={onPress}>
              <View style={styles.buttonTab}>
                <Ionicons name="add" color={COLORS.pink} size={32} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteSreen}
        options={{
          headerShown: false,
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
          headerTitle: () => (
            <View style={[Contains.row, Contains.between]}>
              <Text
                style={[Contains.headerTitle, { color: theme.colors.text }]}
              >
                Cài đặt
              </Text>
              <View style={[Contains.row,Contains.end]}>
                <Entypo name="adjust" size={24} color={theme.dark?COLORS.white:COLORS.black} />
                <Switch
                  value={context.theme}
                  onValueChange={context.toggleTheme}
                />
              </View>
            </View>
          ),
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

const styles = StyleSheet.create({
  buttonTab: {
    backgroundColor: COLORS.blue,
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,

    borderRadius: 21,
    shadowColor: COLORS.pink,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
    elevation: 12,
  },
});
