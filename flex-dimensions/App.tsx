import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    <View style={{ flex: 1 }}>
    
      <View 
      style={{ flex: 1, 
      backgroundColor: '#EF959D', 
      justifyContent: 'center', 
      alignItems: 'center' }}>

        <Text style={styles.topText}>Преступление и наказание</Text>
      </View>


      <View 
      style={{ flex: 2, 
      backgroundColor: '#DDEDAA', 
      justifyContent: 'center', 
      alignItems: 'center' }}>
        <Text style={styles.middleText}>
          В начале <b>июля</b>, в чрезвычайно жаркое время, под вечер, один молодой человек вышел из своей каморки, которую нанимал от жильцов в С—м переулке, на улицу и медленно, как бы в нерешимости, отправился к К—ну мосту.
        </Text>
      </View>


      <View 
      style={{ flex: 3, 
      backgroundColor: '#93B5C6', 
      justifyContent: 'center', 
      alignItems: 'center' }}>
        <Text style={styles.bottomText}>
          Он благополучно избегнул встречи с своею хозяйкой на лестнице. Каморка его приходилась под самою кровлей высокого пятиэтажного дома и походила более на шкаф, чем на квартиру. Квартирная же хозяйка его, <u>у которой он нанимал эту каморку с обедом и прислугой</u>, помещалась одною лестницей ниже, в отдельной квартире, и каждый раз, при выходе на улицу, ему непременно надо было проходить мимо хозяйкиной кухни, почти всегда настежь отворенной на лестницу. И каждый раз молодой человек, проходя мимо, чувствовал какое-то болезненное и трусливое ощущение, которого стыдился и от которого морщился. Он был должен кругом хозяйке и боялся с нею встретиться.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    color: '#DDEDAA',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  middleText: {
    color: '#93B5C6',
    fontSize: 16,
    textAlign: 'center',
    margin:20, 
  },
  bottomText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    margin:20,
    fontFamily: 'monospace', 
    fontStyle: 'italic', 
  },
});

export default FlexDimensionsBasics;