import {
  View,
  Text,
  ScrollView,
  Dimensions,
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
import { signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../store/GlobalProvider";
import { getCurrentUser } from "../../lib/appwrite";

const Signin = ({ navigation }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { setUser, setIsLoggedIn } = useGlobalContext();
  // const windowHeight = Dimensions.get('window').height;

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      //console.log("---result getCurrentUser signin submit---", result);
      setUser(result);
      setIsLoggedIn(true);
      Alert.alert("Success", "User signed in successfully");
      // navigation.replace('Home');
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
          <Text style={styles.title}>Sign In</Text>
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
          <Text style={styles.forgot}>Forgot Password</Text>
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
