import React from 'react';
import { View, Text } from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';

export const Broadcast = () => {
  return (
    <View>
      <YoutubePlayer
        height={400}
        width={400}
        play={true}
        videoId={'Ek1-adoyE_0'}
      />
    </View>
  );
};

// export default Broadcast;
