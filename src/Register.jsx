import React, { useState } from 'react'
import { Linking, KeyboardAvoidingView, TouchableOpacity, StyleSheet, TextInput, Text, View } from 'react-native'
import LogoRed from './components/Tabs/logoRed'
import { auth } from './utils/firebase'

const RegisterScreen = ({ navigation }) => {
  // const url = 'https://docs.google.com/document/d/1Vxr88qTbBqzbF7Kk6aITpToGbgPh0luc3E1PKhzfenk'
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  const openLink = () => {
    let url = 'https://docs.google.com/document/d/1Vxr88qTbBqzbF7Kk6aITpToGbgPh0luc3E1PKhzfenk'
    Linking.openURL(url)
  }

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

  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 260,
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
        <TextInput placeholder="Имя" placeholderTextColor={'gray'} value={name} onChangeText={(text) => setName(text)} style={styles.input} />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor={'gray'}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Пароль"
          placeholderTextColor={'gray'}
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
        <View>
          <Text style={{ color: 'grey' }}>
            Регистрируясь в сервисе или используя сервис любым способом, вы соглашаетесь и принимаете условия настоящей{' '}
            <TouchableOpacity>
              <Text style={{ color: '#cd1c4e' }} onPress={openLink}>
                Политики конфиденциальности
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
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
    width: '70%',
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
