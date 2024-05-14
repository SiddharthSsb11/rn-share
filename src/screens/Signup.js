import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import styles from "./Signin.styles";
import FormField from "../components/FormField";
import CustomButton from "../components/UI/CustomButton";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../store/GlobalProvider";

const Signup = ({ navigation }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);
      // console.log("--submit user result--", result);
      // navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.title}>Sign Up</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={styles.field}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={styles.field}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={styles.field}
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.signupLink}>Signin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
