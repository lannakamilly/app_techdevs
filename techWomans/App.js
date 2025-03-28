import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
<<<<<<< HEAD
import Home from './screens/HomeScreen';
import GraceHopper from './screens/GraceHopperScreen';
// ...outras mulheres
=======
import Home from './src/screens/Home';
import GraceHopper from './src/screens/GraceHopper';
import AdaLovelace from './src/screens/AdaLovelace';
import KatherineJohnson from './src/screens/KatherineJohnson';
import MargaretHamilton from './src/screens/MargaretHamilton';
import SoniaGuimaraes from './src/screens/SoniaGuimaraes';
import RadiaPerlman from './src/screens/RadiaPerlman';

>>>>>>> 27c93a8816428b0e34c538f35b478b2d7b99629f

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Grace Hopper" component={GraceHopper} />
        <Drawer.Screen name="Ada Lovelace" component={AdaLovelace} />
        <Drawer.Screen name="Margaret Hamilton" component={MargaretHamilton} />
        <Drawer.Screen name="Margaret Hamilton" component={KatherineJohnson} />
        <Drawer.Screen name="Margaret Hamilton" component={RadiaPerlman} />
        <Drawer.Screen name="Margaret Hamilton" component={SoniaGuimaraes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
