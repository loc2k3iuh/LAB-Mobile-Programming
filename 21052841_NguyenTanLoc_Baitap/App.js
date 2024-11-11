import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import List from './List';
import Detail  from './Detail';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}  />   
         <Stack.Screen name="List" component={List}  options={{ headerShown: false }}  />   
       <Stack.Screen name="Detail" component={Detail}  options={{ headerShown: false }}  />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;



  



