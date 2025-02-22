import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Button, Text, Image } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton1 = () => {
    alert('You tapped 1!');
  };

  _onPressButton2 = () => {
    alert('You tapped 2!');
  };

  _onPressButton3 = () => {
    alert('You tapped 3!');
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('/assets/image.png')}
          style={styles.image}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton1} title=" B1 " color="#E5BEED" />
          <Button onPress={this._onPressButton2} title=" B2 " color="#9593D9" />
          <Button onPress={this._onPressButton3} title=" B3" color="#7C90DB" />
        </View>
        <Text style={{fontSize: 90, color:"#E5BEED"}}>TEXT</Text>
        <Text style={{fontSize: 90, color:"#9593D9"}}>TEXT</Text>
        <Text style={{fontSize: 90, color:"#7C90DB"}}>TEXT</Text>
        <Text style={{fontSize: 90, color:"#E5BEED"}}>TEXT</Text>
        <Text style={{fontSize: 90, color:"#9593D9"}}>TEXT</Text>
        <Text style={{fontSize: 90, color:"#7C90DB"}}>TEXT</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});