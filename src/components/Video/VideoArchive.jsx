import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoArchive = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="YbnVDzriE8I"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="IlAgccW5fNc"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="dPFQ0Us4P6U"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="2hLJVjJLS8M"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="t3poQYNxVTk"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="LGSWEaXD9hk"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.videoItemContainer}>
          <YoutubePlayer
            style={styles.video}
            height={160}
            width={290}
            play={false}
            videoId="E5iH87WrB2E"
          />
        </View>
      </View>
    </View>
  );
};

export default VideoArchive;

const styles = StyleSheet.create({
  videoItemContainer: {
    width: 290,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  container: {
    width: 310,
    height: 185,
    elevation: 2,
    marginTop: 10,
    shadowRadius: 6,
    marginBottom: 20,
    borderRadius: 10,
    shadowOpacity: 1.0,
    shadowColor: '#C8C5C5',
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 3 },
  },
  video: {
    borderRadius: 30,
  },
});
