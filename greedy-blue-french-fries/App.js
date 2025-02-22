import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const All = () => {


  // Состояния и данные для второго блока
  const [titleText] = useState("Заголовок");
  const bodyText = 'Текст.';

  return (
    <SafeAreaProvider>
      
      <SafeAreaView style={{ height: 20, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', flex: 0.1 }} />
        <View style={{ backgroundColor: 'orange', flex: 0.1 }} />
        <Text>Здравствуйте!!</Text>
      </SafeAreaView>

      
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {'\n'}
            {'\n'}          
            {titleText}
            
          </Text>
          <Text numberOfLines={2} style={styles.innerText}>{bodyText}</Text>
        </Text>
      </SafeAreaView>

      
    <SafeAreaView style={styles.container}>
     
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://rg.ru/articles/fa-olymp/images/tild3931-3063-4330-a238-356365613430__cover_2.jpg',
        }}
      />
      
    </SafeAreaView>

    </SafeAreaProvider>
  );
};

// Стили
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Calibri',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'normal',
  },
  innerText: {
    color: 'red',
  },
    tinyLogo: {
    width: 300,
    height: 300,
  },
});

export default All; // Экспорт по умолчанию