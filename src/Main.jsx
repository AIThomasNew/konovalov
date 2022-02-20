import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import Screens from './Screens';

// Навигация
const Stack = createNativeStackNavigator();

// Главный компонент
export default function Main() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {/* ЛОГИН */}
        <Stack.Screen
          name="Вход"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* РЕГИСТРАЦИЯ */}
        <Stack.Screen
          name="Регистрация"
          component={RegisterScreen}
          animationEnabled={true}
          // options={{ headerShown: false }}
          options={{
            headerBackTitle: 'Назад',
            // headerTintColor: '#cd1c4e',
            headerTintColor: 'gray',
            headerTitleStyle: { color: 'transparent' },
            headerStyle: { backgroundColor: '#f2f2f2' },
          }}
        />
        {/* ЭКРАНЫ */}
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
