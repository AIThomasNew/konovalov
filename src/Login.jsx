// import { auth } from './utils/firebase';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import LogoRed from './components/Tabs/logoRed';
import * as Google from 'expo-auth-session/providers/google'; // auth
import * as WebBrowser from 'expo-web-browser'; // web

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({ navigation }) => {


  const [accessToken, setAccessToken] = useState(); // токен доступа
  const [userInfo, setUserInfo] = useState(); // отображение инф. о пользователе
  const [message, setMessage] = useState(); // сообщение



  // promptAsync - При вызове веб-браузер откроется и предложит пользователю пройти аутентификацию

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '403461287346-j139qhj71hlvsrivbos9rqib8snqo9d5.apps.googleusercontent.com',
    iosClientId: '403461287346-kdm1iso79uelqhplgefh7mmlrkn0ah16.apps.googleusercontent.com',
    expoClientId: '403461287346-i62ft6303hgt34itdk7mnlp6gmkff0a3.apps.googleusercontent.com',
  });



  useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);



  async function getUserData() {
    let userInfoResponse = await fetch('https://www.googleapis.com/auth/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  }



  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
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
    );
  };





  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <LogoRed />

      {/* <Text>{message}</Text> */}
      {showUserInfo()}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title={accessToken ? 'Get User Data' : 'Login'}
          onPress={
            accessToken
              ? getUserData
              : () => {
                  promptAsync({ useProxy: false, showInRecents: true });
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
  );
};

export default LoginScreen;

// G #4086f4
// O #eb4132
// O #fbbd01
// G #4086f4
// L #30a952
// E #eb4132

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
});
