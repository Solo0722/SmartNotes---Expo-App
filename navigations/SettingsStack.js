import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Others/Settings";
import colors from "../constants/colors";

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerStyle: { backgroundColor: colors.secondary },
      }}
    >
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{ headerTitle: "Settings" }}
      />
    </Stack.Navigator>
  );
};

export default NotesStack;
