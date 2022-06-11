import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './Login'
import RegisterScreen from './Register'
import Screens from './Screens'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Вход" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Регистрация"
        component={RegisterScreen}
        animationEnabled={true}
        options={{
          headerStyle: { backgroundColor: '#f2f2f2' },
          headerBackTitle: 'Назад',
          headerTintColor: 'gray',
          headerTitleStyle: { color: 'transparent' },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="Screens" component={Screens} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator
