import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";

const Settings = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <View>
        <Text style={styles.primaryText}>APP</Text>
        <Pressable
          style={styles.button}
          android_ripple={{ color: "rgba(255,255,255,0.2)" }}
        >
          <Text style={styles.primaryText}>About App</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          android_ripple={{ color: "rgba(255,255,255,0.2)" }}
        >
          <Text style={styles.primaryText}>About me</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.button}
        android_ripple={{ color: "rgba(255,255,255,0.2)" }}
      >
        <Text style={styles.primaryText}>Version</Text>
        <Text style={styles.secondaryText}>1.0.0</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  primaryText: {
    color: "lavender",
  },
  secondaryText: {
    color: "rgba(255, 255, 255, 0.4)",
    marginVertical: 5,
  },
  button: {
    width: "100%",
    minHeight: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: "rgba(255,255,255,0.2)",
    borderBottomWidth: 1,
    borderRadius: 10,
  },
});
