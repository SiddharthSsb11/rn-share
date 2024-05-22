import {
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../components/UI/EmptyState";
import VideoCard from "../components/VideoCard";
import { MaterialIcons } from "@expo/vector-icons";
import { useGlobalContext } from "../../store/GlobalProvider";
import InfoBox from "../components/UI/InfoBox";
import styles from "./Profile.styles";

const Profile = ({ route, navigation }) => {
  const { setIsLoggedIn, user, setUser } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    // console.log("--logout--");
    await signOut();
    setUser(null);
    setIsLoggedIn(false);
    // navigation.navigate("Signin");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <TouchableOpacity onPress={logout} style={styles.logoutButton}>
              <MaterialIcons name="logout" size={28} color="red" />
            </TouchableOpacity>

            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: user?.avatar }}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles={styles.infoBoxContainer}
              titleStyles={styles.infoBoxTitle}
            />

            <View style={styles.statsContainer}>
              <InfoBox
                title={posts.length || 0}
                subtitle="Posts"
                titleStyles={styles.infoBoxTitle}
                containerStyles={styles.infoBoxStatsContainer}
              />
              <InfoBox
                title="1.2k"
                subtitle="Views"
                titleStyles={styles.infoBoxTitle}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
