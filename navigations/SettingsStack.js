import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../screens/Others/Settings";

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#21212b" },
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
