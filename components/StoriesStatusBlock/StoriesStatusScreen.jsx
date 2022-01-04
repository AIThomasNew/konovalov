import React from 'react';
import { StatusBar, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Asset } from 'expo-asset';
import { Stories, Stories2 } from './StoriesComponents';
import { stories } from '../../data/status';

type StoriesStatusScreenState = {
  ready: boolean,
};

export default class StoriesStatusScreen extends React.Component<
  {},
  StoriesStatusScreenState
> {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Promise.all(
      stories.map((story) =>
        Promise.all([
          Asset.loadAsync(story.source),
          Asset.loadAsync(story.avatar),
        ])
      )
    );
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Stories2 {...{ stories }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
});
