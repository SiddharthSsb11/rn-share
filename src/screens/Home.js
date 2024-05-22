import {
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import { useGlobalContext } from "../../store/GlobalProvider";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import { images } from "../../constants";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../components/UI/EmptyState";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import VideoCard from "../components/VideoCard";
import styles from "./Home.styles";

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // console.log("---data home---", posts);
  // one flatlis // with list header // and horizontal flatlist
  // cannot do that with just scrollview
  // as there's both horizontal and vertical scroll flatlist

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            creator={item.creator.username}
            avatar={item.creator.avatar}
            video={item.video}
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.nameText}>{user?.username}</Text>
              </View>

              <View style={styles.logoContainer}>
                <Image
                  source={images.logoSmall}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View style={styles.latestVideos}>
              <Text style={styles.latestVideosText}>Trending Videos</Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
