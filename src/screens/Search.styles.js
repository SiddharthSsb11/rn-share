import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  textContainer: {
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  searchText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: Colors.lightGrey,
  },
  queryText: {
    fontSize: 32,
    fontFamily: "Poppins-SemiBold",
    color: "#FFFFFF",
    marginTop: -6,
  },
  search: {
    marginVertical: 20,
  },
});

export default styles;
