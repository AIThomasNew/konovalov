import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={(0, 5)}
      onPress={() => {
        console.log(todo.id);
      }}
      onLongPress={onRemove.bind(null, todo.id)} // удаление жестким привязыванием контекста
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    // height: 60,
    padding: 15,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 10,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
