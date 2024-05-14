import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import App from "./src/App";
import GlobalProvider from "./store/GlobalProvider";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Index() {
  return (
    <NavigationContainer>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </NavigationContainer>
  );
}
