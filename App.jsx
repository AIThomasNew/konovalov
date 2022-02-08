import * as React from 'react';
import Main from './src/Main';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Main name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
