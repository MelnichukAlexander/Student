import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([
    { id: '1', title: 'Cписок покупок', text: 'не забудь про хлеб' },
    { id: '2', title: 'События', text: 'семейный ужин на выходных' },
    { id: '3', title: 'Секретно', text: 'не скажу свои секреты...' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('NoteDetails', { note: item })}>
      <View style={styles.noteItem}>
        <Text style={styles.noteTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNote', { setNotes })}>
        <Text style={styles.buttonText}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

const NoteDetailsScreen = ({ route, navigation }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text style={styles.noteText}>{note.text}</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

const AddNoteScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const { setNotes } = route.params;

  const handleSave = () => {
    const newNote = { id: Math.random().toString(), title, text };
    setNotes(prevNotes => [...prevNotes, newNote]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Заголовок"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Текст"
        style={styles.input}
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Сохранить</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NoteDetails" component={NoteDetailsScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c9c9c7',
  },
  noteItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'rgba(0, 255, 251, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 75, // Округление кнопки 
    alignSelf: 'flex-start',    
    marginTop: 20,
  },
  backButton: {
    backgroundColor: 'rgba(0, 255, 251, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25, // Округление кнопки
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: 'rgba(0, 255, 251, 1)', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25, // Округление кнопки
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
