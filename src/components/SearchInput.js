import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";
import styles from "./SearchInput.styles";

const SearchInput = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");
  const navigation = useNavigation();
  const route = useRoute();

  const searchHandler = () => {
    if (query === "")
      return Alert.alert(
        "Missing Query",
        "Please input something to search results across database"
      );
    const pathName = route.name;
    if (pathName.startsWith("Search")) {
      navigation.setParams({ query });
    } else {
      navigation.navigate("Search", { query });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor={Colors.lightGrey}
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={searchHandler}>
        <FontAwesome name="search" size={20} color={Colors.lightGrey} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
