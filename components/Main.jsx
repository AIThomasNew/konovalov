// Основные
import * as React from 'react';
import { StyleSheet } from 'react-native';

// Стилизация по умолчанию
import { THEME } from '../theme';

// Навигация
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Экраны
import Home from './Home/Home';
import Video from './Video/Video';
import InteractiveStack from './Interactive/InteractiveStack';
import Status from './Status/Status';

// Наши фирменные иконки
import HomeTab from './Home/icon/tab/HomeTab';
import HomeTabActive from './Home/icon/tab/HomeTabActive';
import VideoTab from './Video/icon/tab/VideoTab';
import VideoTabActive from './Video/icon/tab/VideoTabActive';
import InteractiveTab from './Interactive/icon/tab/InteractiveTab';
import InteractiveTabActive from './Interactive/icon/tab/InteractiveTabActive';
import StoriesTab from './Status/icon/tab/StoriesTab';
import StoriesTabActive from './Status/icon/tab/StoriesTabActive';

// Названия экранов
const homeName = 'Эфир';
const videoName = 'Видео';
const interactiveStackName = 'Интерактив';
const statusName = 'Stories';

// Функционал
const Tab = createBottomTabNavigator();

export default function Main() {
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
          name={interactiveStackName}
          component={InteractiveStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <InteractiveTabActive /> : <InteractiveTab />;
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
