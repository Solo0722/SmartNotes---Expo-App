import {
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { globalStyles } from "../../styles/global";
import NotesCard from "../../components/NotesCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/context";
import colors from "../../constants/colors";


const Notes = ({ navigation }) => {
  const { allNotes, getAllNotes } = useContext(GlobalContext);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAllNotes();
  }, [allNotes]);

  const handleRefresh = () => {
    setRefreshing(true);
    getAllNotes();
    setRefreshing(false);
  };

  return (
    <View style={[globalStyles.container, styles.container]}>
      {!allNotes || !allNotes.length ? (
        <View style={styles.emptyContainer}>
          <Text>No notes available!</Text>
        </View>
      ) : (
        <FlatList
          bouncesZoom
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          data={allNotes}
          renderItem={({ item }) => (
            <NotesCard note={item} navigation={navigation} />
          )}
        />
      )}

      <Pressable
        style={styles.floatingbtn}
        onPress={() => navigation.navigate("AddNote")}
      >
        <Ionicons
          name="add-outline"
          color={colors.white}
          size={25}
          style={{ fontWeight: "bold" }}
        />
      </Pressable>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  floatingbtn: {
    backgroundColor: colors.secondary,
    position: "absolute",
    bottom: 30,
    left: "44%",
    borderRadius: 50,
    width: 55,
    height: 55,
    zIndex: 9,
    elevation: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
