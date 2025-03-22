import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';

const notes = [
  { id: '1', title: 'Заметка 1', content: 'Тут написаны самые важные мысли' },
  { id: '2', title: 'Продукты', content: 'Молоко, Хлеб, Масло' },
  { id: '3', title: 'Фильмы', content: 'Титаник, Место под соснами, Зеленая миля' },
];

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.noteItem}
            onPress={() => navigation.navigate('Second', { note: item })}
          >
            <Text style={styles.noteTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Button
        color="#223843"
        title="Добавить заметку"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  noteItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  noteTitle: {
    fontSize: 18,
  },
});