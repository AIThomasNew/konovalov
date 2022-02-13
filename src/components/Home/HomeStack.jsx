import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../utils/firebase.js';
// import { Avatar } from 'react-native-elements';

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  // отображение левой и правой частей header
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft: () => (
      //   <View style={{ marginLeft: 20 }}>
      //     <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
      //   </View>
      // ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={signOut}>
          <Ionicons name="exit-outline" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, []);

  // выход
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigation.replace('Вход');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
