import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainTab from "./navigations/MainTab";
import GlobalProvider from "./context/context";

const App = () => {
  return (
    <GlobalProvider>
      <MainTab />
    </GlobalProvider>
  );
};

export default App;
