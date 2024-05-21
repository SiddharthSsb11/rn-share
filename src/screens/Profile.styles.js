import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 44,
    paddingHorizontal: 14,
    flex: 1,
  },
  logoutButton: {
    // width: "100%",
    alignSelf: "flex-end",
    // marginBottom: 12,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderColor: Colors.yellow,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  infoBoxContainer: {
    marginTop: 8,
  },
  infoBoxTitle: {
    fontSize: 18,
  },
  statsContainer: {
    marginTop: -4,
    flexDirection: "row",
  },
  infoBoxStatsContainer: {
    marginRight: 24,
  },
});

export default styles;
