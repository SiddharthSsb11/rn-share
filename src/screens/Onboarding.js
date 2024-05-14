import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import styles from "./Onboarding.styles";
import CustomButton from "../components/UI/CustomButton";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={styles.cards}
            resizeMode="contain"
          />

          <View style={styles.discoverTextContainer}>
            <Text style={styles.discoverText}>
              Discover Endless{"\n"}
              Possibilities with <Text style={styles.shareText}>Share</Text>
            </Text>

            <Image
              source={images.path}
              style={styles.pathImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.descriptionText}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Share
          </Text>

          {
            <CustomButton
              title="Continue with Email"
              handlePress={() => navigation.navigate("Signin")}
              containerStyles={styles.button}
            />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding;
