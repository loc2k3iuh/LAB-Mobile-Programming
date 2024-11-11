import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import AssetExample from './components/AssetExample';




export default function List({navigation, route}) {
     const data = route.params?.Data;

const imageMap = {
    "Bike1.png": require("./assets/Bike1.png"),
    "Bike2.png": require("./assets/Bike2.png"),
    "Bike3.png": require("./assets/Bike3.png"),
    "Bike4.png": require("./assets/Bike4.png"),
    "Bike5.png": require("./assets/Bike5.png"),
    "Bike6.png": require("./assets/Bike6.png"),
  };

  



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

          <View style = {{width: "100%", backgroundColor: "gray", height: 300, justifyContent: "center", alignItems: "center"}}>
                       <Image source={imageMap[data.anh]}  style = {{width: 220, height: 200}}/>
                       
          </View>
        </View>

          <View style={styles.body}>

          <View style = {{width: "100%", height: 300, }}>
               <Text style = {{fontSize: 20, fontWeight: 700, color: "black" }}>{data.tenXe} </Text>
               <View style = {{flexDirection: "row", marginTop: 10}}> 
               <Text style = {{}}>15% OFF I 32189VND </Text>
              

               <Text style = {{textDecorationLine: "line-through"}}>{data.gia} VND  </Text>
               
               </View>
               <Text  style = {{fontSize: 15, fontWeight: 700, color: "black", marginTop: 10 }}>Description </Text>
                <Text style = {{marginTop: 10 }}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
          </View>

          
          <View>
          
              <TouchableOpacity style = {{width: 200, padding: 10, backgroundColor : "red", borderRadius: 5}}> 
              <Text style = {{textAlign: "center", color: "white"}}> Add to card </Text>
              </TouchableOpacity>
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

  header: {
    marginTop: 10,
  
    padding: 10
 
  },
  body: {
    padding: 10
  }





 
});
