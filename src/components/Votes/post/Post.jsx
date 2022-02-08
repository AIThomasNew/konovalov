import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Checkbox from 'expo-checkbox';

export const Post = (props) => {
  let post = props.post;

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.text}>
        <Text>{new Date(post.date).toLocaleDateString()}</Text>
        <Text style={styles.heading}>Опрос!</Text>
        <Text style={{ fontSize: 18 }}>
          Хочу переплыть через реку Нил! Что думаете?
        </Text>
        <View style={styles.votesBlock}>
          <View style={styles.voteVersion}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.version}>Делай, хочу посмотреть на это!</Text>
          </View>
          <View style={styles.voteVersion}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.version}>Не стоит, вдруг простудишься</Text>
          </View>
          <View style={styles.voteVersion}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
            <Text style={styles.version}>Хочу посмотреть результат опроса</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginBottom: 40,
    overflow: 'hidden',
    shadowRadius: 5,
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#fff',
    height: 300,
    width: '100%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  votesBlock: {
    height: 100,
  },
  voteVersion: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkbox: {
    marginRight: 20,
    borderRadius: 30,
  },
});
