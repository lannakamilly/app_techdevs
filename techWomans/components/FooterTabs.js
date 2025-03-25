import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function FooterTabs() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={24} color="#ff1bb4" />
        <Text style={styles.tabText}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('GraceHopper')}>
        <Icon name="book" size={24} color="#ff1bb4" />
        <Text style={styles.tabText}>História</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate('Sobre')}>
        <Icon name="info" size={24} color="#ff1bb4" />
        <Text style={styles.tabText}>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#ff1bb4',
    marginTop: 4,
  },
});
