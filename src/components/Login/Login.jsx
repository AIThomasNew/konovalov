import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../../firebase';
// import '../../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Main');
      } else {
        // ...
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Введите ваш e-mail"
        label="Email"
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Введите ваш пароль"
        label="Пароль"
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Войти" style={styles.button} onPress={sign} />
      <Button
        title="Регистрация"
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: 200,
    marginTop: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
