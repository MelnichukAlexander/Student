import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Second({ route, navigation }) {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Button color="#223843" title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    height:50,
    fontSize: 16,
  },
});