import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

import Splash from "./src/pages/Splash";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Developers from "./src/pages/Developers";
import Contato from './src/pages/Contato';
import Genero from './src/pages/Genero';
import Filme from './src/pages/Filme';
import Locais from './src/pages/Locais';
import Scanner from './src/pages/Scanner';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Splash" component={Splash} options={{
          headerShown: false, 
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => null,
          tabBarLabel: () => null
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) => <Feather name='home' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}
        />
        <Tab.Screen name='Contato' component={Contato} options={{
          tabBarIcon: ({color, size}) => <Feather name='user' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name='Gênero' component={Genero} options={{
          tabBarIcon: ({color, size}) => <Feather name='book' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name='Filme' component={Filme} options={{
          tabBarIcon: ({color, size}) => <Feather name='film' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name="Devs" component={Developers} options={{
          tabBarIcon: ({color, size}) => <Feather name='coffee' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name="Scanner" component={Scanner} options={{
          tabBarIcon: ({color, size}) => <Feather name='camera' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name="Locais" component={Locais} options={{
          tabBarIcon: ({color, size}) => <Feather name='map-pin' color={color} size={size}/>,
          tabBarStyle: {backgroundColor: '#121212'},
          headerStyle: {backgroundColor: '#121212'},
          headerTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
          tabBarActiveTintColor: 'white',
        }}/>
        <Tab.Screen name="Login" component={Login} options={{
          headerShown: false, 
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ color, size }) => null,
          tabBarLabel: () => null
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
