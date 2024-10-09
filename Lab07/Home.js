import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createContext, useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function Home({ navigation  }) {
  const [name, Setname]  = useState("");
  return (
    <SafeAreaView style={styles.container}>
    

      <View style={styles.body}>
        <View style = {{justifyContent: "center", alignItems: "center", marginTop: 60}}>  
        <Image source = {require("./assets/to-do-list_text.png")} style = {{width: 280, height: 280}}/>
        </View>
        <Text style = {{fontWeight: 700, fontSize: 30, lineHeight: 36, textAlign: "center", marginTop: 40, color: "#8353E2"}}> MANAGE YOUR TASK</Text>
        <View style={{alignItems: "center", marginTop: 60}}>
        <View style = {{flexDirection: "row", alignItems: "center", borderRadius: 10, borderWidth: 1, width: "90%",  padding: 7}}> 
        <View style = {{width: 30, height: 30, justifyContent: "center", alignItems: "center", }}>
        <Icon name="mail" size={22} color="#000" type="material" />
        </View>
        <TextInput  placeholder="Enter your name" style = {{color: "gray", width: "90%", height: 30}} value={name} onChangeText={Setname}/> 
        
        </View>
       </View>
       <View>
       <View style = {{justifyContent: "center", alignItems: "center", marginTop: 75}}>
       <TouchableOpacity style= {{flexDirection: "row", justifyContent: "center",  alignItems: "center", width: 200, height: 70, backgroundColor: "#00BDD6", borderRadius: 10}} onPress= {() => {
         navigation.navigate("List", {userName: name})
       }}> 
          <Text style = {{color: 'white', fontWeight: 700, fontSize: 24}}> GET STARTED </Text>
          <Icon name="arrow-forward" size={22} color="white" type="material" />
       </TouchableOpacity>
        </View>
       </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  body: {

  }
});
