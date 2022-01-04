import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StoriesStatusScreen from './StoriesStatusScreen';

const StoriesStatusScreen = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <StoriesStatusScreen.Navigator>
      <StoriesStatusScreen.Screen
        name="StoriesStatus"
        component={StoriesStatusScreen}
        // options={{ headerShown: false }}
      />
    </StoriesStatusScreen.Navigator>
  );
}
