// import { auth } from './utils/firebase';
import React, { useState, useEffect } from 'react';
import LogoRed from './components/Tabs/logoRed';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { auth } from './utils/firebase';

const LoginScreen = ({ navigation }) => {
  //* логин
  const [email, setEmail] = useState('');
  //* пароль
  const [password, setPassword] = useState('');

  //* вход
  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      const errorMessage = error.message;
      alert('Введите данные', errorMessage);
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Screens');
      } else {
        navigation.canGoBack() && navigation.popToTop();
      }
      return unsubscribe;
    }, []);
  });

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LogoRed />


      <View style={styles.inputContainer}>
        <TextInput placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={signIn} activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>ВОЙТИ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Регистрация')} activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>РЕГИСТРАЦИЯ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: '80%',
  },

  inner: {
    backgroundColor: '#f2f2f2',
    borderColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
    marginBottom: 15,
  },

  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#d9d9d9',
  },

  playing: {
    color: 'gray',
    fontWeight: '800',
  },

  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderRadius: 25,
    marginTop: 5,
  },

  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#d22744',
    borderWidth: 2,
  },

  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  buttonOutlineText: {
    color: '#d22744',
    fontWeight: '700',
    fontSize: 16,
  },

  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
  },
});
