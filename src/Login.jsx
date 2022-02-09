import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from './utils/firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Screens');
      } else {
        navigation.canGoBack() && navigation.popToTop();
        // navigation.canGoBack() && navigation.popToTop();
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
      <Button title="Войти" style={styles.button} onPress={signIn} />
      <Button
        title="Регистрация"
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default LoginScreen;

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
