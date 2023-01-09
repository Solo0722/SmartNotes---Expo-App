import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import colors from "../../constants/colors";

const Settings = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <View>
        <Text style={styles.primaryText}>APP</Text>
        <View style={styles.button}>
          <Text style={styles.primaryText}>About App</Text>
          <Text style={styles.secondaryText}>
            SmartNotes is a productivity notes-taking application that helps you
            to take down quick notes on campus, at work or anywhere you find
            yourself.This app has the following features:
            <FlatList
              data={[
                { key: "Easy to use" },
                { key: "Ability to take and select pictures from phone" },
                {
                  key: "Can also set notification reminders",
                },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.secondaryText}>{"* " + item.key}</Text>
              )}
            />
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.primaryText}>About me</Text>
          <Text style={styles.secondaryText}>
            Android screen sizes vary greatly with the massive variety of
            devices on the market. One strategy to deal with this is to look at
            the most common resolutions and design around that - you can see a
            list of devices and their resolutions here. Given that we can resize
            and crop our splash image automatically, it looks like we can stick
            with our dimensions, as long as we don't depend on the splash image
            fitting the screen exactly. This is convenient because we can use
            one splash image for both iOS and Android - less for you to read in
            this guide and less work for you to do.
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.primaryText}>Version</Text>
        <Text style={styles.secondaryText}>1.0.0</Text>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  primaryText: {
    color: colors.black,
  },
  secondaryText: {
    color: "rgba(0, 0, 0, 0.4)",
    marginVertical: 5,
    width: "100%",
  },
  button: {
    width: "100%",
    minHeight: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    borderRadius: 10,
  },
});
