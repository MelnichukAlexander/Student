import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function NoteDetailsScreen({ route, navigation }) {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.text}>{note.text}</Text>
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
