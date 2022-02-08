import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Broadcast } from './broadcast/Broadcast.jsx';
import HomeButtons from './buttons/HomeButtons.jsx';
import HomeComment from './comment/HomeComment';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.broadcast}>
        <Broadcast />
      </View>

      <HomeButtons />

      <Divider width={1} orientation="vertical" />

      <HomeComment />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  broadcast: {
    height: 225,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});
