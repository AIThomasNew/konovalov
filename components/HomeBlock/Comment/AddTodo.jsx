import React, { useState } from 'react';
import {
  View,
  Alert,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Add from '../HomeIcon/Add';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Комментарий не может быть пустым :(');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Оставьте комментарий..."
        autoCorrect={false} // откл корректировку слов
      />

      <TouchableOpacity style={styles.likeDonate} onPress={pressHandler}>
        <View style={{ alignItems: 'center' }}>
          <Add />
        </View>
      </TouchableOpacity>

      {/* <Button color="black" title="Добавить" onPress={pressHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  likeDonate: {
    width: 50,
    height: 50,
    paddingLeft: 3,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },

  block: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    padding: 10,
    elevation: 2,
    width: '80%',
    borderWidth: 1,
    shadowRadius: 6,
    borderRadius: 30,
    shadowOpacity: 1.0,
    borderColor: '#eee',
    shadowColor: '#C8C5C5',
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 3 },
  },
});

// --- пока не нужно ---

// shadowOpacity: 1.0,
// shadowColor: '#C8C5C5',
// backgroundColor: 'white',
// shadowOffset: { width: 2, height: 3 },
// shadowRadius: 6,
// elevation: 2,
// borderWidth: 1,

// shadowOpacity: 1.0,
// shadowColor: '#C8C5C5',
// backgroundColor: 'white',
// shadowOffset: { width: -12, height: -12 },
// shadowRadius: 6,
// elevation: 2,
