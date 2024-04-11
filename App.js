import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/*
import {
  // Import the creation function
  createStackNavigator,
  // Import the types
  StackNavigationOptions,
} from "@react-navigation/stack";

import { withLayoutContext } from "expo-router";

const { Navigator } = createStackNavigator();

// This can be used like `<CustomStack />`
export const CustomStack = withLayoutContext<
  StackNavigationOptions,
  typeof Navigator
>(Navigator);
*/
function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Desenvolvimento" component={Desenvolvimento} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
>    
    <View style={styles.container}>
      <View style={content}>

      <Text>Trabalho de 3 telas</Text>
      <Text>Tema:</Text>
      <StatusBar style="auto" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: '#262631'
  },
    content:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
