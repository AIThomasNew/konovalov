import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
// import '../../firebase';
import { auth } from '../../firebase';
// import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //
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
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Введите ваше имя"
        label="Name"
        leftIcon={{ type: 'material', name: 'badge' }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Input
        placeholder="Установите фото"
        label="Фото профиля"
        leftIcon={{ type: 'material', name: 'face' }}
        value={photoUrl}
        onChangeText={(text) => setPhotoUrl(text)}
        secureTextEntry
      />
      <Button title="Регистрация" style={styles.button} onPress={register} />
    </View>
  );
};

export default Register;

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
