import React from 'react';
import { View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export const Broadcast = () => {
  let link = 'TuY44_PKlec'; // приходит динамическая ссылка из firebase/cms

  return (
    <View>
      <YoutubePlayer
        height={'100%'}
        width={'100%'}
        play={true}
        videoId={link}
      />
    </View>
  );
};

// export default Broadcast;
