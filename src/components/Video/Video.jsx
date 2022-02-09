import React from 'react';
import {
  TouchableOpacity,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import StoriesArchive from './stories/StoriesArchive';
import { POSTS } from '../../data/posts';
import VideoArchive from './video/VideoArchive';
import { Divider } from 'react-native-elements';

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Video = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StoriesArchive />
        <Divider width={1} orientation="vertical" />

        {/* {POSTS.map((most, index) => (
            <Most most={most} key={index} />
          ))} */}
        {/* <VideoArchive /> */}
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.videoContainer}>
            <VideoArchive />
            <VideoArchive />
            <VideoArchive />
            <VideoArchive />
            <VideoArchive />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  videoContainer: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
  },
});
