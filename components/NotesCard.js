import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import moment from "moment-timezone";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalContext } from "../context/context";
import colors from "../constants/colors";

const NotesCard = ({ note, navigation }) => {
  const { deleteNote } = useContext(GlobalContext);

  const handleDelete = (noteId) => {
    Alert.alert(
      "Do you want to delete this note?",
      "This action is irreversible",
      [
        { text: "Yes", onPress: () => deleteNote(noteId) },
        { text: "No" },
      ]
    );
  };

  return (
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.5)" }}
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
    width: "98%",
    height: 90,
    marginHorizontal: 4,
    minHeight: 90,
    backgroundColor: colors.white,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    fontWeight: "bold",
  },
  secondaryText: {
    color: "rgba(0,0,0,0.5)",
  },
});
