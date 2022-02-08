import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoItem = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.videoItemContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoItem;

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
  video: {
    width: 290,
    height: 163,
    borderRadius: 8,
    alignSelf: 'center',
  },
});
