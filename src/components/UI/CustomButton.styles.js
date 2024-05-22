import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.yellow,
    borderRadius: 10,
    minHeight: 62,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  activityIndicator: {
    marginLeft: 5,
  },
});

export default styles;
