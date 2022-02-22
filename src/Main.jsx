import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Вход
import LoginScreen from './Login';

// Регистрация
import RegisterScreen from './Register';

// Экраны
import Screens from './Screens';

// Навигация
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Вход"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
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
        <Stack.Screen
          name="Screens"
          component={Screens}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
