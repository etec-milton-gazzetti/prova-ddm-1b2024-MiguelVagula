import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function desenvolvimento({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button color="#2A367E"
        title="Voltar"
        onPress={() => navigation.navigate('home')}
      />
    </View>
  );
}