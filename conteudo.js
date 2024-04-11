import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Pressable } from 'react-native'

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Conteudo from './conteudo';
import Sobre from './sobre';

export default function Conteudo({ navigation }) {
  return (
    <View>
        <Text></Text>
        <Text></Text>
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