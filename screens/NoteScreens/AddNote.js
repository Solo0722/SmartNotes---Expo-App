import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import { globalStyles } from "../../styles/global";
import moment from "moment-timezone";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalContext } from "../../context/context";
import React, { useContext, useState } from "react";
import uuid from "react-native-uuid";

const AddNote = ({ navigation }) => {
  const { addToNotes } = useContext(GlobalContext);

  const [notesData, setNotesData] = useState({
    title: "",
    body: "",
    images: [],
    reminder: null,
    map: null,
  });

  const submitNote = () => {
    if (!notesData.title || notesData.title.length < 2) {
      ToastAndroid.showWithGravity(
        "Invalid Title!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      const finalNoteData = {
        id: uuid.v4(),
        createdAt: new Date(),
        ...notesData,
      };
      addToNotes(finalNoteData);
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.dateWrapper}>
        <Text style={globalStyles.text}>
          {moment().format("MMMM D YYYY, h:mm a")}
        </Text>
        <Pressable onPress={submitNote}>
          <Ionicons name="checkmark-outline" color={"green"} size={26} />
        </Pressable>
      </View>
      <View style={styles.titleWrapper}>
        <TextInput
          style={styles.input}
          value={notesData.title}
          onChangeText={(e) => setNotesData({ ...notesData, title: e })}
          cursorColor="orangered"
          textAlign="left"
          placeholder="Title"
          placeholderTextColor={"lavender"}
        />
      </View>
      <TextInput
        value={notesData.body}
        onChangeText={(e) => setNotesData({ ...notesData, body: e })}
        multiline
        numberOfLines={20}
        cursorColor="orangered"
        textAlignVertical="top"
        textAlign="left"
        style={styles.textarea}
        placeholder="Notes"
        placeholderTextColor={"lavender"}
      />
      <View style={styles.toolsWrapper}>
        <Pressable
          style={styles.toolBtn}
          android_ripple={{ color: "rgba(255,255,255,0.5)" }}
        >
          <Ionicons name="camera-outline" color={"#000"} size={26} />
        </Pressable>
        <Pressable
          style={styles.toolBtn}
          android_ripple={{ color: "rgba(255,255,255,0.5)" }}
        >
          <Ionicons name="alarm-outline" color={"#000"} size={26} />
        </Pressable>
        <Pressable
          style={styles.toolBtn}
          android_ripple={{ color: "rgba(255,255,255,0.5)" }}
        >
          <Ionicons name="map-outline" color={"#000"} size={26} />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  dateWrapper: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    borderColor: "rgba(255, 255, 255,0.2)",
    borderWidth: 1,
    backgroundColor: "#21212b",
    borderRadius: 10,
    padding: 10,
    color: "lavender",
  },
  bodyWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  textarea: {
    marginVertical: 10,
    width: "100%",
    borderColor: "rgba(255, 255, 255,0.2)",
    borderWidth: 1,
    backgroundColor: "#21212b",
    borderRadius: 10,
    padding: 10,
    color: "lavender",
  },
  submitBtn: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orangered",
    marginVertical: 10,
  },
  toolsWrapper: {
    width: "100%",
    height: 45,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  toolBtn: {
    width: "30%",
    backgroundColor: "lavender",
    height: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
