import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { AddComment } from './AddComment';
import Comment from './Comment';

const CommentScreen = ({ addComment, comments }) => {
  return (
    <View style={styles.commentBlock}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
      />
      <AddComment onSubmit={addComment} />
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  commentBlock: {
    justifyContent: 'flex-end',
    height: 240,
    // borderWidth: 1,
  },
});
