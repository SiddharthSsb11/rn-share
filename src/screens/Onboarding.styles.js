import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    // borderWidth: 1,
    // borderColor: 'white'
  },
  logo: {
    width: 164,
    height: 100,
    marginBottom: -32,
  },
  cards: {
    maxWidth: 412,
    height: 424,
  },
  discoverTextContainer: {
    marginTop: -24,
    position: "relative",
  },
  discoverText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
  shareText: {
    color: "#FFA001",
  },
  pathImage: {
    width: 64,
    height: 15,
    position: "absolute",
    bottom: -6,
    right: -2,
  },
  descriptionText: {
    fontSize: 14,
    color: "#CDCDE0",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    width: "100%",
  },
});

export default styles;
