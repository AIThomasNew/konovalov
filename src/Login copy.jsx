import React, { useState, useEffect } from 'react'
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import LogoRed from './components/Tabs/logoRed'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'

// promptAsync - При вызове веб-браузер откроется и предложит пользователю пройти аутентификацию
WebBrowser.maybeCompleteAuthSession()

const LoginScreen = ({ navigation }) => {
  const [accessToken, setAccessToken] = useState()
  const [userInfo, setUserInfo] = useState()
  const [message, setMessage] = useState()
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '64014568433-jrf61r43nudjoovvahq16ucrq61pvvfk.apps.googleusercontent.com',
    iosClientId: '64014568433-n25arqbcvl2jfjijtq5reiumgkpmn1hn.apps.googleusercontent.com',
    expoClientId: '64014568433-4gqc1ndduh98lgn3b6q1ffmpkmdtd9k5.apps.googleusercontent.com',
  })

  useEffect(() => {
    setMessage(JSON.stringify(response))
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken)
    }
  }, [response])

  async function getUserData() {
    let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    userInfoResponse.json().then((data) => {
      setUserInfo(data)
    })
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      )
    }
  }

  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 300,
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

      <Text>{message}</Text>

      {showUserInfo()}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={!request}
          title={accessToken ? 'Get User Data' : 'Login'}
          onPress={
            accessToken
              ? getUserData
              : () => {
                  promptAsync({ useProxy: false, showInRecents: true })
                }
          }
          activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>ВХОД ЧЕРЕЗ GOOGLE АККАУНТ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

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
})

// import { auth } from './utils/firebase'

// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// const signIn = () => {
//   auth.signInWithEmailAndPassword(email, password).catch((error) => {
//     const errorMessage = error.message
//     alert('Введите данные', errorMessage)
//   })
// }

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     if (user) {
//       navigation.replace('Screens')
//     } else {
//       navigation.canGoBack() && navigation.popToTop()
//     }

//     return unsubscribe
//   }, [])
// })

{
  /* <View style={styles.inputContainer}>
        <TextInput placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} style={styles.input} />
        <TextInput placeholder="Пароль" value={password} onChangeText={(text) => setPassword(text)} style={styles.input} secureTextEntry />
      </View> */
}

{
  /* <TouchableOpacity onPress={signIn} activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>ВОЙТИ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity> */
}

{
  /* <TouchableOpacity onPress={() => navigation.navigate('Регистрация')} activeOpacity={0.4}>
          <NeuMorph>
            <View>
              <Text>РЕГИСТРАЦИЯ</Text>
            </View>
          </NeuMorph>
        </TouchableOpacity> */
}
