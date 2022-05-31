import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Status from './Status'

const Stack = createNativeStackNavigator()

export default function StatusStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StoriesStatus"
        component={Status}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
