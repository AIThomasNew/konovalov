// Основные
import * as React from 'react';
import { StyleSheet } from 'react-native';

// Стилизация по умолчанию
import { THEME } from '../theme';

// Навигация
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Экраны
import HomeScreen from './HomeBlock/HomeScreen';
import VideoScreen from './VideoBlock/VideoScreen';
import InteractiveStackScreen from './InteractiveBlock/InteractiveStackScreen';
import StoriesStatusScreen from './StoriesStatusBlock/StoriesStatusScreen';

// Наши фирменные иконки
import IconBottomHome from './HomeBlock/HomeTab/IconBottomHome';
import IconBottomHomeActive from './HomeBlock/HomeTab/IconBottomHomeActive';
import IconBottomVideo from './VideoBlock/VideoTab/IconBottomVideo';
import IconBottomVideoActive from './VideoBlock/VideoTab/IconBottomVideoActive';
import IconBottomInteractive from './InteractiveBlock/InteractiveTab/IconBottomInteractive';
import IconBottomInteractiveActive from './InteractiveBlock/InteractiveTab/IconBottomInteractiveActive';
import IconBottomStories from './StoriesStatusBlock/StoriesTab/IconBottomStories';
import IconBottomStoriesActive from './StoriesStatusBlock/StoriesTab/IconBottomStoriesActive';

// Названия экранов
const homeName = 'Эфир';
const videoName = 'Видео';
const interactiveStackName = 'Интерактив';
const storiesStatusName = 'Stories';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
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
          component={HomeScreen}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <IconBottomHomeActive /> : <IconBottomHome />;
            },
            tabBarActiveTintColor: '#cd1c4e',
          }}
        />
        <Tab.Screen
          name={videoName}
          component={VideoScreen}
          options={{
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? <IconBottomVideoActive /> : <IconBottomVideo />;
            },
            tabBarActiveTintColor: '#cd1c4e',
          }}
        />
        <Tab.Screen
          name={interactiveStackName}
          component={InteractiveStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? (
                <IconBottomInteractiveActive />
              ) : (
                <IconBottomInteractive />
              );
            },
            tabBarActiveTintColor: '#cd1c4e',
          }}
        />
        <Tab.Screen
          name={storiesStatusName}
          component={StoriesStatusScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? (
                <IconBottomStoriesActive />
              ) : (
                <IconBottomStories />
              );
            },
            tabBarActiveTintColor: '#cd1c4e',
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
