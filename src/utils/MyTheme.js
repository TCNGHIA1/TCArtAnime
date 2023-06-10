import React from "react";
import COLORS from "./colors";
import { DefaultTheme,DarkTheme } from "@react-navigation/native";

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.blue,
    text: COLORS.white,

  },
};

const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.pink,
    text: COLORS.black,


  },
};

export { MyDarkTheme, MyLightTheme };
