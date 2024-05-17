import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    marginRight: 6,
  },
  video: {
    width: 168,
    height: 296,
    borderRadius: 12,
    marginTop: 6,
    backgroundColor: Colors.lightGrey,
  },
  imageContainer: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: 168,
    height: 296,
    borderRadius: 12,
    marginTop: 5,
    overflow: "hidden",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 8,
  },
  playIcon: {
    width: 48,
    height: 48,
    position: "absolute",
  },
});

export default styles;
