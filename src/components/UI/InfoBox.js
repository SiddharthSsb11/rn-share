import { View, Text } from "react-native";
import styles from "./InfoBox.styles";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View style={[containerStyles]}>
      <Text style={[styles.title, titleStyles]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default InfoBox;
