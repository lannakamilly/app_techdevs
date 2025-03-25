import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GraceHopperScreen from './screens/GraceHopperScreen';
import AdaLovelaceScreen from './screens/AdaLovelaceScreen';
import MargaretHamiltonScreen from './screens/MargaretHamiltonScreen';
import KatherineJohnsonScreen from './screens/KatherineJohnsonScreen';
import RadiaPerlmanScreen from './screens/RadiaPerlmanScreen';
import SoniaGuimaraesScreen from './screens/SoniaGuimaraesScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Início': iconName = 'home'; break;
              case 'Grace Hopper': iconName = 'code'; break;
              case 'Ada Lovelace': iconName = 'analytics'; break;
              case 'Margaret Hamilton': iconName = 'rocket'; break;
              case 'Katherine Johnson': iconName = 'planet'; break;
              case 'Radia Perlman': iconName = 'hardware-chip'; break;
              case 'Sônia Guimarães': iconName = 'woman'; break;
              default: iconName = 'ellipse';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Grace Hopper" component={GraceHopperScreen} />
        <Tab.Screen name="Ada Lovelace" component={AdaLovelaceScreen} />
        <Tab.Screen name="Margaret Hamilton" component={MargaretHamiltonScreen} />
        <Tab.Screen name="Katherine Johnson" component={KatherineJohnsonScreen} />
        <Tab.Screen name="Radia Perlman" component={RadiaPerlmanScreen} />
        <Tab.Screen name="Sônia Guimarães" component={SoniaGuimaraesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
