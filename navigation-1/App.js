import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import NoteDetailsScreen from './screens/NoteDetailsScreen';
import AddNoteScreen from './screens/AddNoteScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Список заметок' }}
        />
        <Stack.Screen
          name="NoteDetailsScreen"
          component={NoteDetailsScreen}
          options={{ title: 'Детали заметки' }}
        />
        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={{ title: 'Создание заметки' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
