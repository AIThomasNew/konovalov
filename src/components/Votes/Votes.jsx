import * as React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { votesData } from '../../data/votesData';
import { Post } from './post/Post';

const Votes = (props) => {
  const openPostHandler = (post) => {
    props.navigation.navigate('Событие', { postId: post.id });
  };

  return (
    <FlatList
      data={votesData}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
    />
  );
};

export default Votes;
