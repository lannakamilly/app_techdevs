import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import FooterTabs from '../components/FooterTabs';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require('../assets/banner.png')} style={styles.banner} />
        <Text style={styles.welcome}>bem-vindo</Text>

        <View style={styles.cardList}>
          {/* Exemplo com um card */}
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('GraceHopper')}>
            <Image source={require('../assets/grace.jpg')} style={styles.cardImg} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Grace Hopper</Text>
              <Text style={styles.cardDesc}>Pequena descrição</Text>
              <Text style={styles.cardButton}>SAIBA MAIS</Text>
            </View>
          </TouchableOpacity>

          {/* Repete os outros 5 cards aqui com navigation para cada página */}
        </View>
      </ScrollView>

      <FooterTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  scroll: { paddingBottom: 80 },
  banner: { width: '100%', height: 180, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  welcome: { position: 'absolute', top: 140, left: 20, color: 'white', fontSize: 16 },
  cardList: { padding: 16 },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 5
  },
  cardImg: { width: 100, height: 100, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  cardContent: { padding: 10, flex: 1 },
  cardTitle: { fontWeight: 'bold', fontSize: 16 },
  cardDesc: { color: '#555', fontSize: 12, marginBottom: 8 },
  cardButton: {
    color: '#ff1bb4',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#ffd9f1',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12
  }
});
