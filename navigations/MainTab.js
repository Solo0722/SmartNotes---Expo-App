import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NotesStack from "./NotesStack";
import SettingsStack from "./SettingsStack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../constants/colors";

const MainTab = ({ navigation }) => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{
          backgroundColor: colors.white,
          elevation: 5,
        }}
        activeColor={colors.secondary}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size = 23 }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? 23 : 20;
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
              size = focused ? 23 : 20;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={NotesStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
