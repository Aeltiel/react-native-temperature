import { StyleSheet } from "react-native";

const inputStyle = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
  },
  txt: {
    position: "absolute",
    fontSize: 25,
    alignSelf: "flex-end",
    paddingRight: 25,
  },
});
export default inputStyle;
