import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
      <StatusBar style="auto" />
    </View>
  );
}