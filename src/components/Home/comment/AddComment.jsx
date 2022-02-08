import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  View,
} from 'react-native';
import Add from '../../../assets/images/iconHomeScreen/addcomment/Add';

export const AddComment = ({ onSubmit }) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 7,
    // borderWidth: 1,
  },
  likeDonate: {
    width: 50,
    height: 50,
    paddingLeft: 3,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
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
    height: 40,
  },
});
