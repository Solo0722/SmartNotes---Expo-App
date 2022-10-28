import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import moment from "moment-timezone";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalContext } from "../context/context";

const NotesCard = ({ note, navigation }) => {
  const { deleteNote } = useContext(GlobalContext);

  const handleDelete = (noteId) => {
    Alert.alert(
      "Do you want to delete this note?",
      "This action is irreversible",
      [
        { text: "Yes", onPress: () => deleteNote(noteId) },
        { text: "No", onPress: () => console.log("Alert closed") },
      ]
    );
  };

  return (
    <Pressable
      android_ripple={{ color: "#21212b" }}
      style={styles.cardWrapper}
      onPress={() => navigation.navigate("NoteDetail", { note: note })}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Text style={styles.primaryText}>{note.title}</Text>
        <Text style={styles.secondaryText}>
          {moment(note.createdAt).format("MMMM D YYYY, h:mm a")}
        </Text>
      </View>
      <View>
        <Pressable onPress={() => handleDelete(note.id)}>
          <Ionicons name="trash-outline" color={"red"} size={20} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default NotesCard;

const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    height: 90,
    minHeight: 90,
    backgroundColor: "#21212b",
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: "lavender",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    color: "lavender",
    fontWeight: "bold",
  },
  secondaryText: {
    color: "rgba(255, 255, 255, 0.4)",
  },
});
