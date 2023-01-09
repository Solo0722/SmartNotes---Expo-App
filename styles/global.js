import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 15,
  },
  text: {
    color: colors.black,
  },
});
