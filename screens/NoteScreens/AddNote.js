import {
  Image,
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
import colors from "../../constants/colors";
import * as ImagePicker from "expo-image-picker";

const AddNote = ({ navigation }) => {
  const { addToNotes } = useContext(GlobalContext);

  const [notesData, setNotesData] = useState({
    title: "",
    body: "",
    image: null,
    reminder: null,
    map: null,
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setNotesData({ ...notesData, image: result });
    }
  };

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
      // console.log(notesData);
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
          cursorColor={colors.secondary}
          textAlign="left"
          placeholder="Title"
          placeholderTextColor={"rgba(0,0,0,0.5)"}
        />
      </View>
      <TextInput
        value={notesData.body}
        onChangeText={(e) => setNotesData({ ...notesData, body: e })}
        multiline
        numberOfLines={20}
        cursorColor={colors.secondary}
        textAlignVertical="top"
        textAlign="left"
        style={styles.textarea}
        placeholder="Notes"
        placeholderTextColor={"rgba(0,0,0,0.5)"}
      />
      <View style={styles.toolsWrapper}>
        <Pressable
          style={styles.toolBtn}
          android_ripple={{ color: "rgba(255,255,255,0.5)" }}
          onPress={pickImage}
        >
          <Ionicons name="camera-outline" color={colors.white} size={26} />
        </Pressable>
        <Pressable
          style={styles.toolBtn}
          android_ripple={{ color: "rgba(255,255,255,0.5)" }}
        >
          <Ionicons name="alarm-outline" color={colors.white} size={26} />
        </Pressable>
      </View>
      {notesData.image != null && (
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: notesData.image?.uri }}
            style={{ width: "100%", height: 400 }}
          />
        </View>
      )}
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
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: "100%",
    borderColor: "rgba(0, 0, 0,0.2)",
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    color: colors.black,
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
    borderColor: "rgba(0, 0, 0,0.2)",
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    color: colors.black,
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
    width: "48%",
    backgroundColor: colors.secondary,
    height: "100%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    width: "100%",
    marginVertical: 10,
    marginBottom: 30,
  },
});
