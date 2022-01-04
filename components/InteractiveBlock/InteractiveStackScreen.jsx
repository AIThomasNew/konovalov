// Основные
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InteractiveScreen from './InteractiveScreen';
import PostScreen from './InteractivePost/PostScreen';
import { THEME } from '../../theme';

const InteractiveStackScreen = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <InteractiveStackScreen.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: '#fff',
      }}
    >
      <InteractiveStackScreen.Screen
        name="Будет интересно"
        component={InteractiveScreen}
      />
      <InteractiveStackScreen.Screen name="Событие" component={PostScreen} />
    </InteractiveStackScreen.Navigator>
  );
}
