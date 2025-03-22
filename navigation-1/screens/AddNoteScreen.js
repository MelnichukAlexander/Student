import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddNoteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Заголовок</Text>
      <TextInput style={styles.input} placeholder="Введите заголовок" />
      <Text style={styles.label}>Текст</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Введите текст заметки"
        multiline
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
