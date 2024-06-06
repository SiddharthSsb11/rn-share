import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyApp from "./src/MyApp";
import GlobalProvider from "./store/GlobalProvider";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <MyApp />
      </GlobalProvider>
    </NavigationContainer>
  );
}
