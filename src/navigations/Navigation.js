import React, { useContext } from "react";
import Main from "../views/Main";
import Login from "../views/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { MyDarkTheme, MyLightTheme } from "../utils/MyTheme.js";
import { ThemeContext } from "../utils/ThemeContext";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const context = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={context.theme === false ? MyLightTheme : MyDarkTheme}
    >
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
