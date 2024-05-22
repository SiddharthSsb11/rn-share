import { useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import EmptyState from "../components/UI/EmptyState";
import SearchInput from "../components/SearchInput";
import VideoCard from "../components/VideoCard";
import styles from "./Search.styles";

const Search = ({ route }) => {
  const { query } = route.params;
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query)); //searchPosts.bind(this, query)

  useEffect(() => {
    refetch();
  }, [query]);

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
        ListHeaderComponent={() => (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.searchText}>Search Results</Text>
              <Text style={styles.queryText}>{query}</Text>

              <View style={styles.search}>
                <SearchInput initialQuery={query} refetch={refetch} />
              </View>
            </View>
          </>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
