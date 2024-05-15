import { useState } from "react";
// import { router, usePathname } from "expo-router";
// import { useNavigation, useRoute } from '@react-navigation/native';

import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "../../constants/colors";

import { icons } from "../../constants";

const SearchInput = ({ initialQuery }) => {
  // const pathname = usePathname();
  // const [query, setQuery] = useState(initialQuery || "");
  // const navigation = useNavigation();
  // const route = useRoute();
  // if (pathname.startsWith("/search")) {
  //   navigation.setParams({ query });
  // } else {
  //   navigation.navigate('Search', { query });
  // }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        // value={query}
        placeholder="Search a video topic"
        placeholderTextColor={Colors.lightGrey}
        onChangeText={(e) => /*setQuery(e)*/ console.log(e)}
      />

      <TouchableOpacity
        onPress={() => {
          // if (query === "")
          //   return Alert.alert(
          //     "Missing Query",
          //     "Please input something to search results across database"
          //   );

          // if (pathname.startsWith("/search")) router.setParams({ query });
          // else router.push(`/search/${query}`);
          console.log("--search---");
        }}
      >
        <Image
          source={icons.search}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        {/* <FontAwesome name="search" size={20} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
