import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { createContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// You can import supported modules from npm

export default function Home() {
const [username, Setusername] = useState('');
const [password, Setpassword] = useState('');
const navigation = useNavigation();
const [accounts, Setaccount] = useState([]);

useEffect(() => {
GetData();
return () => {

}
},[]);

const GetData = () => {
  const url = "https://67113ad44eca2acdb5f42e5b.mockapi.io/users";
  fetch(url, {method: "GET"}).then((res) => res.json()).then((resJson) => Setaccount(resJson)).catch((error) => {
    console.log("Error: "+ error);
  })
}

const handleLogin = () => {
  const user = accounts.find(
    (u) => u.username === username && u.password === password
  );
  if(user){
    navigation.navigate("List", {Username: username});
  }else{
    Alert.alert('Login failed', 'Username or password is incorrect');
  }
}
return(
<SafeAreaView style = {styles.container}>
  <View style = {styles.header}>
    <Text style = {{textAlign: 'center', fontWeight: 500, fontSize: 20}}>A premium online store for sporter and their stylish choice </Text>
    <Image style = {{marginTop: 20}} source = {require("./assets/bifour_-removebg-preview.png")}/>

        <View>
          <Text style = {{textAlign: 'center', fontWeight: 700, fontSize: 20}}>POWER BIKE </Text>
          <Text style = {{textAlign: 'center', fontWeight: 700, fontSize: 20}}>SHOP</Text>
        </View>  
    
   </View>
  <View style = {styles.body}> 



    <View style= {{alignItems: "center", marginTop: 20}}>
    <TouchableOpacity style= {{flexDirection: "row", alignItems: "center", width: 200, height: 60, backgroundColor: "green", justifyContent: "center", borderRadius: 10}} onPress = {() => {navigation.navigate("List")}}> 
    <Text  style = {{fontSize: 20, fontWeight: 700}} > Get Started </Text>
    </TouchableOpacity>
    </View>
  </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({ 
    container: {
      flex: 1

    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    }


});