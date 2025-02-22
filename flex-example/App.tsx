import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: '#5E0B15', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#3581B8', fontSize: 24, fontWeight: 'bold'}} >ФИЛЬМЫ</Text>
      </View>
      <View style={{flex: 2, backgroundColor: '#6D435A', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#F9DC5C'}}><Text style={{fontSize :18}}>История одного назначения (2018)</Text></Text>
      </View>
      <View style={{flex: 10, backgroundColor: '#BEA8AA', justifyContent:'flex-start' }}>
        <Text 
          numberOfLines={0} 
          margin={20} 
          color="#355070"
          padding={20}
          >
            Новый фильм Авдотьи Смирновой – автора телевизионных «Отцов и детей» и мелодрамы «2 дня» – основан на реальной истории. Развивается она в 60-е годы позапрошлого столетия, а в её центре – случай, приключившийся со Львом Толстым во время его работы над романом «Война и мир». Когда в находящийся в Тульской области пехотный полк приезжает новый поручик Григорий Колокольцев (Алексей Смирнов), всё начинает идти наперекосяк. Будучи изнеженным генеральским сыном, Колокольцев вступает в конфронтацию с местным начальством, а чрезвычайное происшествие с ротным писарем Шабуниным (Филипп Гуревич) накаляет ситуацию до предела – судьба солдата должна решиться на военно-полевом суде.
            </Text>
        
      
    </View>

    </View>

    
  
);
};

const styles = StyleSheet.create({
container:{
flex :1 ,



},
});

export default Flex;
