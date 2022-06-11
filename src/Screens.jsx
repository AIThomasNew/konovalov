import React from 'react'
import HomeTab from './components/Tabs/iconHomeScreen/tab/HomeTab'
import HomeTabActive from './components/Tabs/iconHomeScreen/tab/HomeTabActive'
import StoriesTab from './components/Tabs/iconStatusScreen/tab/StoriesTab'
import StoriesTabActive from './components/Tabs/iconStatusScreen/tab/StoriesTabActive'
import HomeStack from './components/Home/HomeStack'
import Status from './components/Status/Status'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { THEME } from './components/Theme/theme'

const Tab = createBottomTabNavigator()
const homeName = 'Эфир'
const statusName = 'Status'
const Screens = () => {
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
      <Tab.Screen
        name={homeName}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeTabActive /> : <HomeTab />
          },
          tabBarActiveTintColor: '#cd1c4e',
        }}
      />
      <Tab.Screen
        name={statusName}
        component={Status}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <StoriesTabActive /> : <StoriesTab />
          },
          tabBarActiveTintColor: '#cd1c4e',
          // tabBarStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  )
}

export default Screens
