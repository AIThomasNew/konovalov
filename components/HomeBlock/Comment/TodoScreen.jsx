import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Вернуться" onPress={goBack} />
    </View>
  );
};

export default TodoScreen;
