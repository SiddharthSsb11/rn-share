import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    marginVertical: 16,
    // marginHorizontal: 12,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: Colors.lightGrey,
  },
  nameText: {
    fontSize: 32,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    marginTop: -8,
  },
  logoContainer: {
    marginTop: 3,
  },
  logo: {
    width: 44,
    height: 52,
  },
  latestVideos: {
    flex: 1,
    marginVertical: 32,
    // paddingTop: 20,
    // paddingBottom: 32,
  },
  latestVideosText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Colors.lightGrey,
    marginBottom: 12,
  },
});

export default styles;
