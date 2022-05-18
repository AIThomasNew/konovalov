import React, { useLayoutEffect } from 'react';
import { THEME } from './components/Theme/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './components/Tabs/iconHomeScreen/tab/HomeTab';
import HomeTabActive from './components/Tabs/iconHomeScreen/tab/HomeTabActive';
import VideoTab from './components/Tabs/iconVideoScreen/tab/VideoTab';
import VideoTabActive from './components/Tabs/iconVideoScreen/tab/VideoTabActive';
import StoriesTab from './components/Tabs/iconStatusScreen/tab/StoriesTab';
import StoriesTabActive from './components/Tabs/iconStatusScreen/tab/StoriesTabActive';

import HomeStack from './components/Home/HomeStack';
import Video from './components/Video/Video';
import Status from './components/Status/Status';

const homeName = 'Эфир';
const videoName = 'Видео';
const statusName = 'Status';
const Tab = createBottomTabNavigator();

export default function Screens() {
  return (
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
      }}>
      {/* BROADCAST */}
      <Tab.Screen
        name={homeName}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeTabActive /> : <HomeTab />;
          },
          tabBarActiveTintColor: '#cd1c4e',
        }}
      />

      {/* VIDEOS */}
      <Tab.Screen
        name={videoName}
        component={Video}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <VideoTabActive /> : <VideoTab />;
          },
          tabBarActiveTintColor: '#cd1c4e',
        }}
      />

      {/* STORIES */}
      <Tab.Screen
        name={statusName}
        component={Status}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <StoriesTabActive /> : <StoriesTab />;
          },
          tabBarActiveTintColor: '#cd1c4e',
          // tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
