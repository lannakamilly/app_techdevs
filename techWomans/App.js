// No App.js
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import GraceHopper from './src/screens/GraceHopper';
// ...outras mulheres

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Grace Hopper" component={GraceHopper} />
        <Drawer.Screen name="Ada Lovelace" component={AdaLovelace} />
        {/* ...outras */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
