import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Third({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Заголовок"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Текст"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button  color="#223843" title="Добавить" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});