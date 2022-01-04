import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './MainScreen';
import TodoScreen from './TodoScreen';


const HomeComment = () => {
  const [todoId, setTodoId] = useState(null); // изначально ноль
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Как заказать у вас рекламу?',
    },
    {
      id: '2',
      title: 'Я знаю этого чувака, он крут!',
    },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev, // развернуть предыдущий
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId !== null) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }

  return (
    <View>
      <View style={styles.container}>{content}</View>
    </View>
  );
};

export default HomeComment;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 30,
  },
});
