import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import VideoItem from './VideoItem';
import MiniLike from '../icon/MiniLike';
import MiniOko from '../icon/MiniOko';

const VideoArchive = ({ video }) => {
  return (
    <View style={styles.container}>
      <VideoItem />
      <Text
        style={{ height: 54, fontSize: 17, fontWeight: 'bold', marginTop: 7, marginLeft: 14 }}
      >
        Я катаюсь на велосипеде с Дядей{' '}
      </Text>
      <View style={styles.icon}>
        <View style={{ marginRight: 5 }}>
          <MiniLike />
        </View>
        <View style={{ marginRight: 15 }}>
          <Text>320</Text>
        </View>
        <View style={{ marginRight: 5 }}>
          <MiniOko />
        </View>
        <View>
          <Text>971</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    marginLeft: 14,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    // borderWidth: 1,
  },

  container: {
    width: 310,
    height: 270,
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
});

export default VideoArchive;
