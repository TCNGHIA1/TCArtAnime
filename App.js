import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations/Navigation.js";
import { ThemeProvider } from "./src/utils/ThemeContext.js";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
