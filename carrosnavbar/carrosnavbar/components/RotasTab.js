import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

import CarrosEsportivos from './CarrosEsportivos'
import CarrosEletricos from './CarrosEletricos'
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ actveTintColor:"#00ff00",}}>

     <Tab.Screen name='Elétricos' component={CarrosEletricos} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="car" color={color} size={size} />
        ),
        headerShown:false,
       }}
      />

      

     <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons Entypo name="home" size={size} color={color} />
        ),
        headerShown:false,
       }}
      />

      

     <Tab.Screen name='Esportivos' component={CarrosEsportivos} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="car-sport" size={size} color={color}/> 
        ),
        headerShown:false,
       }}
      />

      
      
        </Tab.Navigator>
    )
}