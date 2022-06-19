import React from 'react'
import { View, ActivityIndicator, StyleSheet, Button } from 'react-native'
import { Asset } from 'expo-asset'
import { Stories, Stories2 } from './components'
import { stories } from '../../data/status'

// type StoriesStatusState = {
//   ready: boolean,
// };

export default class StoriesStatus extends React.Component<{}, StoriesStatusState> {
  state = {
    ready: false,
  }

  async componentDidMount() {
    await Promise.all(stories.map((story) => Promise.all([Asset.loadAsync(story.source), Asset.loadAsync(story.avatar)])))
    this.setState({ ready: true })
  }

  render() {
    const { ready } = this.state
    if (!ready) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <Stories2 {...{ stories }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
})
