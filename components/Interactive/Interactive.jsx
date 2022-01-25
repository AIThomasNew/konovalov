import * as React from 'react';
import {
  View,
  RefreshControl,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { INTERACTIVE } from '../../data/interactive';
import { Post } from './post/Post'; 

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Interactive(props) {
  const openPostHandler = (post) => {
    props.navigation.navigate('Событие', { postId: post.id });
  };

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={styles.wrapper}
      vertical
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <FlatList
        data={INTERACTIVE}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
  },
});
