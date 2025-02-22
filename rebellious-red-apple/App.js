import React, { Component } from 'react';
import {Button, StyleSheet, View, Text, Image, ScrollView, TextInput} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('Это было просто так!')
  }


  render() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.boldText}>Какой-то текст поменьше</Text>
        
          <Text>Какой-то текст побольше, но может не очень сильно. Какой-то текст побольше, но может не очень сильно. Какой-то текст побольше, но может не очень сильно. Какой-то текст побольше, но может не очень сильно!!!!!!!!!</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/254/254638.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View >
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Напиши сюда ..."
        />
        <View >
            <Button
              onPress={this._onPressButton}
              title="Нажми"
              color="#86A59C"
            />
        </View>
      
    </View>
  );
}
}



const styles = StyleSheet.create({
  container: {
    margin:20,
   flex: 1,
   justifyContent: 'center',
  },
  boldText: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});

