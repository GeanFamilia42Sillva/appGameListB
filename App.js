import { View, Text } from 'react-native' 
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

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
const Drawer = createDrawerNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1d3557'
          },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#e66946'
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Sobre" component={SobreScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}