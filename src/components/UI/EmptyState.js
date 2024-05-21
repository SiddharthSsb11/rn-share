import { View, Text, Image } from "react-native";
import { images } from "../../../constants";
import CustomButton from "./CustomButton";
import styles from "./EmptyState.styles";
import { useNavigation } from "@react-navigation/native";

const EmptyState = ({ title, subtitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={images.empty} resizeMode="contain" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <CustomButton
        title="Back to Explore"
        handlePress={() => navigation.navigate("Home")}
        containerStyles={styles.buttonContainer}
      />
    </View>
  );
};

export default EmptyState;
