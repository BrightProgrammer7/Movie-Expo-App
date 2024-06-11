import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import Search from './components/Search';
import FilmDetails from "./pages/FilmDetails";
import Favories from "./pages/Favories";
import MovieTrailer from "./pages/MovieTrailer";
import Home from "./pages/Home";
import Map from "./pages/Map";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from './pages/Splash';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#2196F3" },
        headerTitleStyle: { color: "#FFF" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Search" component={Home} />
      <Stack.Screen name="MovieTrailer" component={MovieTrailer} />
      <Stack.Screen name="FilmDetail" component={FilmDetails} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000",
    // color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  });


  return (
    <>
      {isShowSplash ?
        <Splash /> :
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "search" : "search-outline";
                } else if (route.name === "Favories") {
                  iconName = "heart";
                }else if (route.name === "Maps") {
                  iconName = "map";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              tabBarActiveBackgroundColor: "#2196F3",
              tabBarInactiveBackgroundColor: "#2196Ff",

            })}
          >
            {/* <Tab.Screen name="Splash" component={Home} /> */}
            {/* <Tab.Screen name="Splash" component={Splash} /> */}
            <Tab.Screen name="Home" component={HomeStack} options={{
              headerShown: false,
            }} />
            <Tab.Screen name="Favories" component={Favories} options={{
              headerStyle: { backgroundColor: "#2196F3" },
              headerTitleStyle: { color: "#FFF" },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }} />
            <Tab.Screen name="Maps" component={Map} options={{
              headerStyle: { backgroundColor: "#2196F3" },
              headerTitleStyle: { color: "#FFF" },
              headerTintColor: "#fff",
              headerTitleAlign: "center",
            }} />
          </Tab.Navigator>
        </NavigationContainer>
      }
    </>
  );
}

