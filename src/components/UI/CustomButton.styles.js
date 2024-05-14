import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA001",
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
    color: "#161622",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  activityIndicator: {
    marginLeft: 5,
  },
});

export default styles;
