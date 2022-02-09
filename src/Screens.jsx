import React, { useLayoutEffect } from 'react';

// Стилизация
import { THEME } from './components/Theme/theme';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

// База данных
import { auth } from './utils/firebase';

// Навигация
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Экраны
import HomeStack from './components/Home/HomeStack';
import Video from './components/Video/Video';
import VotesStack from './components/Votes/VotesStack';
import Status from './components/Status/Status';

// Наши фирменные иконки
import HomeTab from './components/Tabs/iconHomeScreen/tab/HomeTab';
import HomeTabActive from './components/Tabs/iconHomeScreen/tab/HomeTabActive';
import VideoTab from './components/Tabs/iconVideoScreen/tab/VideoTab';
import VideoTabActive from './components/Tabs/iconVideoScreen/tab/VideoTabActive';
import VotesTab from './components/Tabs/iconVoteScreen/tab/VotesTab';
import VotesTabActive from './components/Tabs/iconVoteScreen/tab/VotesTabActive';
import StoriesTab from './components/Tabs/iconStatusScreen/tab/StoriesTab';
import StoriesTabActive from './components/Tabs/iconStatusScreen/tab/StoriesTabActive';

const homeName = 'Эфир';
const videoName = 'Видео';
const VotesStackName = 'Интерактив';
const statusName = 'Stories';
const Tab = createBottomTabNavigator();

export default function Screens({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
        </View>
      ),
      headRight: () => (
        <TouchableOpacity style={{ marginRight: 20 }} onPress={signOut}>
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
        component={HomeStack}
        options={{
          // headerShown: false,
          tabBarIcon: ({ focused }) => {
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
          tabBarIcon: ({ focused }) => {
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
          tabBarIcon: ({ focused }) => {
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
// });
