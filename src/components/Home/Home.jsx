import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Broadcast } from './broadcast/Broadcast.jsx';
import HomeButtons from './buttons/HomeButtons.jsx';
import HomeComment from './comment/HomeComment';

const HomeScreen = () => {
  const dismissKeyboard = () => Keyboard.dismiss(); // убрать клавиатуру

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.broadcast}>
        <Broadcast />
      </View>
      <TouchableOpacity activeOpacity={1} onPress={dismissKeyboard}>
        <HomeButtons />
      </TouchableOpacity>
      <Divider width={1} orientation="vertical" />
      <HomeComment />
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
    maxHeight: 211,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});
