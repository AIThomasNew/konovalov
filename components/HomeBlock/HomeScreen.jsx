import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { Broadcast } from './Broadcast.jsx';
import HomeButtons from './HomeButtons';
import HomeComment from './Comment/HomeComment';

import { Divider } from 'react-native-elements';

// return focused ? <LikeActive /> : <Like />
// return focused ? <DonateActive /> : <Donate />

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.broadcast}>
        <Broadcast />
      </View>
      <HomeButtons />
      <Divider width={1} orientation="vertical" />
      <ScrollView vertical showsHorizontalScrollIndicator={false}>
        <HomeComment />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  },
});
