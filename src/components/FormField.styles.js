import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#CDCDE0",
    fontFamily: "Poppins-Medium",
  },
  inputContainer: {
    width: "100%",
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#3E3E3E",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainerFocused: {
    borderColor: "#FFA001",
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
