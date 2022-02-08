// Основные
import React, { useLayoutEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// Стилизация по умолчанию
import { THEME } from './components/Theme/theme';
// Навигация
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Экраны
import Home from './components/Home/Home';
import Video from './components/Video/Video';
import VotesStack from './components/Votes/VotesStack';
import Status from './components/Status/Status';
// Наши фирменные иконки
import HomeTab from './assets/images/iconHomeScreen/tab/HomeTab';
import HomeTabActive from './assets/images/iconHomeScreen/tab/HomeTabActive';
import VideoTab from './assets/images/iconVideoScreen/tab/VideoTab';
import VideoTabActive from './assets/images/iconVideoScreen/tab/VideoTabActive';
import VotesTab from './assets/images/iconVoteScreen/tab/VotesTab';
import VotesTabActive from './assets/images/iconVoteScreen/tab/VotesTabActive';
import StoriesTab from './assets/images/iconStatusScreen/tab/StoriesTab';
import StoriesTabActive from './assets/images/iconStatusScreen/tab/StoriesTabActive';
// firebase
import { auth } from './firebase';

// Названия экранов
const homeName = 'Эфир';
const videoName = 'Видео';
const VotesStackName = 'Интерактив';
const statusName = 'Stories';

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headRight: () => (
        <TouchableOpacity style={{ marginRight: 30 }} onPress={signOut}>
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);

  const signOut = () => {
    auth
      .signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigation.replace('Login');
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME.MAIN_COLOR,
          },
          headerTintColor: '#fff',
          tabBarStyle: {
            height: 55,
            paddingBottom: 5,
            paddingTop: 6,
            color: 'black',
            fontSize: 20,
          },
        }}
      >
        <Tab.Screen
          name={homeName}
          component={Home}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <HomeTabActive /> : <HomeTab />;
            },
            tabBarActiveTintColor: '#cd1c4e',
            // tabBarStyle: { display: 'none' },
          }}
        />
        <Tab.Screen
          name={videoName}
          component={Video}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <VideoTabActive /> : <VideoTab />;
            },
            tabBarActiveTintColor: '#cd1c4e',
          }}
        />
        <Tab.Screen
          name={VotesStackName}
          component={VotesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <VotesTabActive /> : <VotesTab />;
            },
            tabBarActiveTintColor: '#cd1c4e',
          }}
        />
        <Tab.Screen
          name={statusName}
          component={Status}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <StoriesTabActive /> : <StoriesTab />;
            },
            tabBarActiveTintColor: '#cd1c4e',
            // tabBarStyle: { display: 'none' },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
