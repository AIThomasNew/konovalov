import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export const Post = (props) => {
  let post = props.post;
  let onOpen = props.onOpen;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: post.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(post.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    shadowRadius: 5,
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: '100%',
  },
  textWrap: {
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
  },
});
