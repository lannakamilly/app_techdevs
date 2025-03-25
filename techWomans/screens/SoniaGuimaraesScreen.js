import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageCarousel from '../components/ImageCarousel';

const SoniaGuimaraesScreen = () => {
  const images = [
    '../assets/s1.jpg',
    '../assets/s2.webp',
    '../assets/s3.jpg'
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Grace Hopper</Text>
      <ImageCarousel images={images} />
      <Text style={styles.description}>
        Grace Hopper foi uma cientista da computação pioneira que ajudou a desenvolver a primeira linguagem de programação de alto nível.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SoniaGuimaraesScreen;
