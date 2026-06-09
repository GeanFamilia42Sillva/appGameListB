import { View, Text } from 'react-native' 
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
//import { createTabNavigator } from '@react-navigation/Tab'
import { createBottomNavigator } from '@react-navigation/bottom-tabs'


const HomeScreen = () => {
  return(
    <View>
      <Text>Tela Home</Text>      
    </View>
  )
}

const SobreScreen = () => {
  return(
    <View>
      <Text>Tela Sobre</Text>      
    </View>
  )
}
const Tab = createTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1d3557'
          },
          headerTintColor: '#fff',
          TabActiveTintColor: '#e66946'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Sobre" component={SobreScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}