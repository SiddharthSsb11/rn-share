import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
  },

  content: {
    // marginTop: 75,
    minHeight: Dimensions.get("window").height - 50,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  logo: {
    width: 164,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontFamily: "Poppins-SemiBold",
    marginVertical: 10,
  },
  field: {
    marginVertical: 16,
  },
  forgot: {
    alignSelf: "flex-end",
    fontSize: 16,
    color: "#CDCDE0",
    fontFamily: "Poppins-Regular",
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
    width: "100%",
  },
  signupContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 16,
    color: "#CDCDE0",
    fontFamily: "Poppins-Regular",
  },
  signupLink: {
    fontSize: 16,
    color: "#FFA001",
    fontFamily: "Poppins-SemiBold",
    marginLeft: 5,
  },
});

export default styles;
