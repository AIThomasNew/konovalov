// Основные
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { THEME } from '../Theme/theme';
import PostScreen from './post/PostScreen';
import Votes from './Votes';

const VotesStack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <VotesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: '#fff',
      }}
    >
      <VotesStack.Screen name="Будет интересно" component={Votes} />
      <VotesStack.Screen name="Событие" component={PostScreen} />
    </VotesStack.Navigator>
  );
}
