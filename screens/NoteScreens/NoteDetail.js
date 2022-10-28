import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { globalStyles } from "../../styles/global";
import moment from "moment-timezone";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalContext } from "../../context/context";
import { useState } from "react";

const NoteDetail = ({ route, navigation }) => {
  const { note } = route.params;

  const { allNotes, deleteNote, getAllNotes, setAllNotes } =
    useContext(GlobalContext);

  const handleDelete = (noteId) => {
    Alert.alert(
      "Do you want to delete this note?",
      "This action is irreversible",
      [
        {
          text: "Yes",
          onPress: () => {
            deleteNote(noteId);
            navigation.goBack();
          },
        },
        { text: "No", onPress: () => console.log("Alert closed") },
      ]
    );
  };

  const [notesData, setNotesData] = useState({
    title: note.title,
    body: note.body,
    images: note.images,
    reminder: note.reminder,
    map: note.map,
  });

  const updateNote = (note) => {
    if (!notesData.title || notesData.title.length < 2) {
      ToastAndroid.showWithGravity(
        "Invalid Title!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
      );
    } else {
      let objIndex = allNotes.findIndex((nt) => nt.id == note.id);
      allNotes[objIndex].title = notesData.title;
      allNotes[objIndex].body = notesData.body;
      allNotes[objIndex].images = notesData.images;
      allNotes[objIndex].reminder = notesData.reminder;
      allNotes[objIndex].map = notesData.map;
      allNotes[objIndex].createdAt = new Date();
      console.log(allNotes);
      setAllNotes(allNotes);
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.dateWrapper}>
        <Text style={globalStyles.text}>
          {moment(note.createdAt).format("MMMM D YYYY, h:mm a")}
        </Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Pressable
            style={{ marginRight: 15 }}
            onPress={() => updateNote(note)}
          >
            <Ionicons name="checkmark-outline" color={"green"} size={20} />
          </Pressable>
          <Pressable
            onPress={() => handleDelete(note.id)}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="trash-outline" color={"red"} size={20} />
          </Pressable>
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <TextInput
          value={notesData.title}
          onChangeText={(e) => setNotesData({ ...notesData, title: e })}
          style={styles.input}
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

export default NoteDetail;

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
