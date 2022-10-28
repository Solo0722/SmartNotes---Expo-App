import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [allNotes, setAllNotes] = useState([]);
  const [oneNote, setOneNote] = useState({});

  const getAllNotes = async () => {
    const jsonNotes = await JSON.parse(
      AsyncStorage.getItem("digi-notes-storage")
    );
    jsonNotes == null ? setAllNotes([]) : setAllNotes(jsonNotes);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleNote = async (noteId) => {
    try {
      const sng = allNotes.filter((nt) => nt.id === noteId);
      setOneNote(sng[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToNotes = async (note) => {
    try {
      setOneNote(note);
      setAllNotes([...allNotes, note]);
      const jsonNote = JSON.stringify(note);
      await AsyncStorage.setItem("digi-notes-storage", jsonNote);
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (noteId) => {
    try {
      const sng = allNotes.filter((nt) => nt.id === noteId);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const upd = allNotes.filter((nt) => nt.id !== noteId);
      setAllNotes(upd);
      await AsyncStorage.setItem("digi-notes-storage", JSON.stringify(upd));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        allNotes,
        oneNote,
        setAllNotes,
        setOneNote,
        getAllNotes,
        getSingleNote,
        addToNotes,
        updateNote,
        deleteNote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
