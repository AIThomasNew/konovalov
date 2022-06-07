import * as React from 'react'
import StackNavigator from './src/StackNavigator'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StackNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
