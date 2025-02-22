import React, { useState } from 'react';
import { Image, View, Button, Text, StyleSheet, Alert } from 'react-native'; // Добавлен Alert
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const All = () => {
  const [titleText] = useState("Заголовок");
  const bodyText = 'Текст.';

  return (
    <SafeAreaProvider>

      <SafeAreaView style={{ height: 20, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'black', flex: 0.1 }} />
        <View style={{ backgroundColor: 'orange', flex: 0.1 }} />
        <Text>Здравствуйте!!</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.textContainer}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {'\n'}
            {'\n'}
            {titleText}
          </Text>
          <Text numberOfLines={2} style={styles.innerText}>{bodyText}</Text>
        </Text>
      </SafeAreaView>

      <SafeAreaView style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://rg.ru/articles/fa-olymp/images/tild3931-3063-4330-a238-356365613430__cover_2.jpg',
          }}
        />
      </SafeAreaView>

      <View style={styles.buttonContainer}>
        <Button
          title="Press me"
          onPress={() => Alert.alert('Нажал')} 
        />
      </View>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonContainer: {
    width: 200, 
    alignSelf: 'center',
    marginBottom: 50, 
  },
});

export default All;