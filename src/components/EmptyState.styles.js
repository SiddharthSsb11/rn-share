import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 270,
    height: 216,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: Colors.lightGrey,
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10,
  },
});

export default styles;
