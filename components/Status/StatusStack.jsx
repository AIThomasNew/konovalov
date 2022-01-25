import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Status from './Status';

const Status = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Status.Navigator>
      <Status.Screen
        name="StoriesStatus"
        component={Status}
        // options={{ headerShown: false }}
      />
    </Status.Navigator>
  );
}
