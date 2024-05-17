import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 12,
    paddingHorizontal: 20,
    marginBottom: 32,
    // borderWidth: 1,
    // borderColor: Colors.lightGrey,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start", //start
    justifyContent: "space-between",
    marginBottom: 2,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    // padding: 2,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
    marginVertical: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
  },
  creator: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: Colors.lightGrey,
  },
  dotsContainer: {
    paddingTop: 2,
  },
  videoContainer: {
    width: "108%",
    height: 240,
    borderRadius: 8,
    // position: "relative",
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 10,
  },
  video: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: Colors.lightGrey,
    width: "108%",
    height: 240,
    borderRadius: 8,
    marginTop: 12,
  },
  thumbnailContainer: {
    width: "108%",
    height: 240,
    borderRadius: 8,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  playIcon: {
    width: 48,
    height: 48,
    position: "absolute",
  },
});

export default styles;
