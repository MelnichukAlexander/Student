import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './screens/Start';       // Главный экран
import Second from './screens/Second';    // Экран деталей
import Third from './screens/Third';      // Экран добавления заметки

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Список заметок' }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{ title: 'Детали заметки' }}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{ title: 'Добавить заметку' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}