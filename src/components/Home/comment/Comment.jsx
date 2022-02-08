import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Comment = ({ comment }) => {
  return (
    <View style={styles.comment}>
      <Text>
        {comment.name}: {comment.title}
      </Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {
    marginBottom: 10,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
