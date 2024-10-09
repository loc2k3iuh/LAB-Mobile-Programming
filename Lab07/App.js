import { Text, SafeAreaView, StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import List from './List';
import Add from './Add';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="List" component={List}  options={{ headerShown: false }}  />    
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}  />   
         <Stack.Screen name="Add" component={Add}  options={{ headerShown: false }}  />         
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;



  



