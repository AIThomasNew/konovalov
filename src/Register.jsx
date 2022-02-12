import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { auth } from './utils/firebase';
// import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');

  // регистрация
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl
              ? photoUrl
              : 'https://media.pn.am/media/issue/197/297/photo/197297.jpg',
          })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });
        navigation.replace('Screens');
        // navigation.popToTop();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Введите данные', errorMessage); // предупреждение если нет данных
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Имя"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Пароль"
          label="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Фото"
          label="Фото профиля"
          value={photoUrl}
          onChangeText={(text) => setPhotoUrl(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={register} style={styles.button}>
          <Text style={styles.buttonText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#d81b60',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#d81b60',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#d81b60',
    fontWeight: '700',
    fontSize: 16,
  },
});
