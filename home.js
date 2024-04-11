import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conteudo from './conteudo';
import Sobre from './sobre';

export default function Home({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>Guerra do Golfo</Text>
        <Text>02/08/1990 – 28/02/1991</Text>
        <Pressable onPress={navigation}>
          
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {

  },
})