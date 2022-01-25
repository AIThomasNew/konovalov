import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { INTERACTIVE } from '../../../data/interactive';

export default function PostScreen(props) {
  const route = props.route;
  const postId = route.params?.postId;
  const post = INTERACTIVE.find((post) => post.id === postId);
  const removeHandler = () => {
    Alert.alert('Удаление поста', 'Вы точно хотите удалить пост?', [
      {
        text: 'Отменить',
        style: 'cancel',
      },
      { text: 'Удалить', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <View style={{ backgroundColor: '#fff', height: '100%' }}>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrap}>
        <Text>{post.text}</Text>
      </View>
      <Button title="Удалить" onPress={removeHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  textWrap: {
    padding: 10,
  },
});
