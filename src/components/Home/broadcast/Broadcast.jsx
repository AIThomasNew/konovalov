import React from 'react';
import { View, Text } from 'react-native';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';

export const Broadcast = () => {
  let linkSasha = 'RYTll76pVic';

  return (
    <View>
      <YoutubePlayer height={400} width={400} play={true} videoId={linkSasha} />
    </View>
  );
};

// export default Broadcast;
