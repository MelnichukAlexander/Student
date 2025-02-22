import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.bold}>Алгоритмы на Python</Text>
          {'\n'}
        </Text>
      </View>

      <View style={styles.block1}>
        <Text style={styles.blockText1}>Алгоритмы и структуры данных на языке Python. Погружаемся в серьезное программирование алгоритмов и решаем сложные задачи.</Text>
      </View>

      <View style={styles.block2}>
        <Text style={styles.blockText2}>Основные темы курса:</Text>
        <Text style={styles.blockText2}>- Введение в алгоритмы и их классификация.</Text>
        <Text style={styles.blockText2}>- Основы структур данных: списки, стеки, очереди.</Text>
        <Text style={styles.blockText2}>- Графы и их применение в задачах.</Text>
        <Text style={styles.blockText2}>- Динамическое программирование и его примеры.</Text>
        <Text style={styles.blockText2}>- Методы оптимизации и их реализация на Python.</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  block1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#e9ecef',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  blockText1: {
    fontSize: 16,
    marginVertical: 5,
    color: '#343a40',
  },
  block2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#d4edda',
    marginVertical: 6,
    padding: 10,
    borderWidth: 1,
    borderColor: '#c3e6cb',
  },
  blockText2: {
    fontSize: 16,
    marginVertical: 5,
    color: '#155724',
  },
});

export default App;
