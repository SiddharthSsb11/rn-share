import { useEffect, useState } from "react";
import { Colors } from "../../constants/colors";
import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./VideoCard.styles";
import { icons } from "../../constants";

const VideoCard = ({ title, creator, avatar, thumbnail, video }) => {
  const [play, setPlay] = useState(false);
  // const [videoUrl, setVideoUrl] = useState("");

  // function removeModeAdmin(url) {
  //   if (!url) {
  //     return;
  //   }
  //   if (url.endsWith("&mode=admin")) {
  //     url = url.replace(/&mode=admin$/, "");
  //   }
  //   return url;
  // }

  // useEffect(() => {
  //   const cleanUrl = removeModeAdmin(video);
  //   setVideoUrl(cleanUrl);
  // }, [video, setVideoUrl]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: avatar }}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.creator} numberOfLines={1}>
              {creator}
            </Text>
          </View>
        </View>

        {/* <View style={styles.dotsContainer}>
          <Entypo
            name="dots-three-vertical"
            size={24}
            color={Colors.lightGrey}
          />
        </View> */}
      </View>

      {play ? (
        <Video
          source={{
            uri: video,
          }}
          style={styles.video}
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          style={styles.thumbnailContainer}
        >
          <Image
            source={{
              uri: thumbnail,
            }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={styles.playIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
