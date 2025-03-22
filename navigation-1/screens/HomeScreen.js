import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';

const notes = [
  { id: '1', title: 'Заметка 1', text: 'Текст заметки 1' },
  { id: '2', title: 'Заметка 2', text: 'Текст заметки 2' },
  { id: '3', title: 'Заметка 3', text: 'Текст заметки 3 Текст заметки 3 Текст заметки 3 Текст заметки 3' },
  { id: '4', title: 'Заметка 4', text: 'Текст заметки 4' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() =>
              navigation.navigate('NoteDetailsScreen', {note: item,})
            }
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Добавить заметку"
        onPress={() => navigation.navigate('AddNoteScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  noteItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#2196F3"
  },
});
