import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native'

export default function Sobre({ navigation }) {
    return (
        <ScrollView>
            <Text></Text>
            <Text></Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 10,
    }
  });