// Основные
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Interactive from './Interactive';
import PostScreen from './post/PostScreen';
import { THEME } from '../../theme';

const InteractiveStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <InteractiveStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: '#fff',
      }}
    >
      <InteractiveStack.Screen
        name="Будет интересно"
        component={Interactive}
      />
      <InteractiveStack.Screen name="Событие" component={PostScreen} />
    </InteractiveStack.Navigator>
  );
}
