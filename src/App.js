import { View, Text, StyleSheet, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Create from "./screens/Create";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Bookmark from "./screens/Bookmark";
import Search from "./screens/Search";
import Onboarding from "./screens/Onboarding";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useGlobalContext } from "../store/GlobalProvider";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
const App = () => {
  const { isLoading, isLoggedIn } = useGlobalContext();
  // console.log("---isloggedin---", isLoggedIn);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="#161622" barStyle="dark-content" />
      <>
        {isLoggedIn ? (
          <BottomTabs.Navigator
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: {
                fontSize: 12,
                fontFamily: "Poppins-Medium",
                marginTop: -4,
                marginBottom: 2,
              },
              tabBarIconStyle: {
                marginBottom: -2,
              },
              tabBarStyle: {
                backgroundColor: "#161622",
                height: 60,
                borderWidth: 1,
                borderTopColor: "#232533",
              },
              tabBarActiveTintColor: "#FFA001",
              tabBarInactiveTintColor: "#CDCDE0",
            }}
          >
            <BottomTabs.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="home" size={size} color={color} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="Profile"
              component={Profile}
              options={{
                title: "Profile",
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={size} color={color} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="Create"
              component={Create}
              options={{
                title: "Create",
                tabBarLabel: "Create",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="plus-circle" size={size} color={color} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="Bookmark"
              component={Bookmark}
              options={{
                title: "Saved",
                tabBarLabel: "Saved",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="bookmark" size={size} color={color} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="Search"
              component={Search}
              options={{
                tabBarButton: () => null, // Hide tab bar icon for Search screen
              }}
            />
          </BottomTabs.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
        )}
      </>
    </>
  );
};

export default App;
