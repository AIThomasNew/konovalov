import React, { useState } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput, Text, View } from 'react-native'
import { auth } from './utils/firebase'
import LogoRed from './components/Tabs/logoRed'

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [password, setPassword] = useState('')

  // Регистрация
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user
        user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl ? photoUrl : 'https://media.pn.am/media/issue/197/297/photo/197297.jpg',
          })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          })

        navigation.replace('Screens')
        // navigation.popToTop();
      })
      .catch((error) => {
        const errorMessage = error.message
        alert('Введите данные', errorMessage) // предупреждение если нет данных
      })
  }

  // Кнопка Neumorphism
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 200,
                height: size || 50,
                borderRadius: size / 2 || 100 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LogoRed />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Имя" value={name} onChangeText={(text) => setName(text)} style={styles.input} />
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={register} activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>РЕГИСТРАЦИЯ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
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
  },

  button: {
    backgroundColor: '#d22744',
    width: '100%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
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
})
