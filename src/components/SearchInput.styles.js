import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#1E1E2D",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#232533",
  },
  input: {
    fontSize: 16,
    color: "#FFFFFF",
    flex: 1,
    fontFamily: "Poppins-Regular",
    marginTop: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

export default styles;
