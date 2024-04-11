import { StyleSheet, Text, View, Button, Image } from 'react-native';

//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'

import styles from './styles/style/home.css';

//import logo from '../../assets/logo.PNG';

export default function home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.imagem} />
        <Text style={{ fontSize: 33, padding: 18 }}>Trabalho de DDM</Text>
        <Text style={{ fontSize: 33, padding: 18 }}>"Tema Pedagógico"</Text>
      </View>
      <View>

      <Button color="#2A367E"
        title="Desenvolvimento"
        onPress={() => navigation.navigate('desenvolvimento')}
      />
      <Button color="#2A367E"
        title="Sobre"
        onPress={() => navigation.navigate('sobre')}
      />
      </View>
    </View>
  );
}
