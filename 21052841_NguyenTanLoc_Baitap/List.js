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
   const [data, setData] = useState([]);
     const [selectedCategory, setSelectedCategory] = useState('Roadbike'); 

 const imageMap = {
    "Bike1.png": require("./assets/Bike1.png"),
    "Bike2.png": require("./assets/Bike2.png"),
    "Bike3.png": require("./assets/Bike3.png"),
    "Bike4.png": require("./assets/Bike4.png"),
    "Bike5.png": require("./assets/Bike5.png"),
    "Bike6.png": require("./assets/Bike6.png"),
  };
const filteredData = data.filter(item => {
    const matchesCategory = item.loai === selectedCategory;
    return matchesCategory;
  });

   useEffect(() => {
    GetData();
  }, []);


  const GetData= () => {
        const Api_Url = "https://670f60913e71518616579d61.mockapi.io/api/shoe";
    fetch(Api_Url, { method: "GET" })
      .then((res) => res.json())
      .then((resJson) => {
   
        setData(resJson); 
   
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  const RenderItem = ({ item }) => (
    <TouchableOpacity style={{borderWidth: 1, marginLeft: 12, marginBottom: 5}} onPress = {() => {navigation.navigate("Detail", {Data : item})}}>
      <View >
        <Image source={imageMap[item.anh]}  style = {{width: 150, height: 140}}/>
        <Text  style={{ fontSize: 13, fontWeight: 700, textAlign: "center", color: "red"}}>{item.tenXe}</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 7,
            alignItems: 'center',
            marginTop: 5,
          }}>
          
        
        </View>
        <View style={{marginTop: 4 }}>
          <Text style={{ fontSize: 13, fontWeight: 700, textAlign: "center", color: "red"  }}>{item.gia} VND</Text>
          
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            <Text style = {{color: 'red', fontWeight: 600, fontSize: 20}}>The world’s Best Bike </Text>

          <View style = {{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>

        <TouchableOpacity style = {{ borderWidth: 1, width: 80, borderRadius: 7, borderColor : "red"}} onPress={() => setSelectedCategory('')}> 
        <Text style = {{textAlign: "center", color: "gray"}} > All </Text>
        </TouchableOpacity>
        <TouchableOpacity  style = {{ borderWidth: 1, width: 80,  borderRadius: 7, borderColor : "red"}}  onPress={() => setSelectedCategory('Roadbike')}> 
        <Text style = {{textAlign: "center",  color: "gray"}} > RoadBike </Text>
        </TouchableOpacity>
         <TouchableOpacity  style = {{ borderWidth: 1, width: 80,  borderRadius: 7, borderColor : "red"}}  onPress={() => setSelectedCategory('')}> 
        <Text style = {{textAlign: "center",  color: "gray"}} > Mountain </Text>
        </TouchableOpacity>
          </View>
        </View>

      
  

      <ScrollView style={styles.body}>
        <FlatList
          data = {filteredData}
          renderItem={RenderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>

    
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





 
});
