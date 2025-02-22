import React, { Component, useState } from 'react';
import { Text, Button, StyleSheet, View, SafeAreaView } from 'react-native';

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonVisible: true,
      isTextVisible: false,
    };
  }

  handlePress = () => {
    this.setState({
      isButtonVisible: false,
      isTextVisible: true,
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text>Ночь, улица, фонарь, аптека,{"\n"} 
                  Бессмысленный и тусклый свет.{"\n"} 
                  Живи еще хоть четверть века —{"\n"} 
                  Всё будет так. Исхода нет.</Text>
          </View>
          
          <View style={styles.buttonContainer}>
            {this.state.isButtonVisible ? (
            <Button title="Дальше" color="#BEA8AA" onPress={this.handlePress} />
          ) : null}
          {this.state.isTextVisible ? (
            <Text>Умрёшь — начнёшь опять сначала{"\n"} 
                  И повторится всё, как встарь:{"\n"} 
                  Ночь, ледяная рябь канала,{"\n"} 
                  Аптека, улица, фонарь.{"\n"} {"\n"} 
                  А.Блок (1912)</Text>
          ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
   textContainer: {
    margin: 20
  },
  buttonContainer: {
    width: 300,
    margin: 20
  }
});