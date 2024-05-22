import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  safeArea: {
    // height: "100%",
    flex: 1,
    backgroundColor: Colors.primary,
  },
  scrollView: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  uploadText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
  },
  formField: {
    marginTop: 36,
  },
  uploadSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    color: Colors.lightGrey,
    fontFamily: "Poppins-Medium",
    marginBottom: 4,
  },
  video: {
    width: "100%",
    height: 256,
    borderRadius: 8,
  },
  uploadPlaceholder: {
    width: "100%",
    height: 160,
    paddingHorizontal: 16,
    backgroundColor: "#1E1E2D",
    borderRadius: 8,
    borderColor: "#222432",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadIconContainer: {
    width: 56,
    height: 56,
    borderColor: Colors.yellow,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    width: "100%",
    height: 256,
    borderRadius: 16,
  },
  thumbnailPlaceholder: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: "#1E1E2D",
    borderRadius: 8,
    borderColor: "#222432",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    spaceX: 8,
  },
  chooseFileText: {
    fontSize: 16,
    color: Colors.lightGrey,
    fontFamily: "Poppins-Regular",
    marginLeft: 8,
    marginTop: 2,
  },
  submitButton: {
    marginTop: 28,
  },
});

export default styles;
