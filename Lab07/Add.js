import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { createContext, useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function Add({navigation, route}) {
  const [task, Settask]  = useState("");
  const Setdata = route.params?.Setdata;


    const AddItem = () => {
    const newItem = { name: task };
    if (newItem.name.trim() === '') {
      return; // Không thêm nếu ô nhập trống
    }
    const ApiUrl = "https://670620c2031fd46a83120917.mockapi.io/api/todo/todolist";
    fetch(ApiUrl, {
      method: "POST", 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    })
    .then((res) => res.json())
    .then((addedItem) => {
      // Sau khi thêm dữ liệu thành công, cập nhật danh sách bằng Setdata
      Setdata(prevData => [...prevData, addedItem]);
      navigation.goBack();  // Quay lại màn hình trước
    })
    .catch((error) => {
      console.log("Error:" +error);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
    

      <View style={styles.body}>
  <TouchableOpacity onPress = {() => navigation.goBack()} style = {{width: 50, height: 50, padding: 10}}>
  <Icon name="arrow-back" size={22} color="#000" type="material" />
  </TouchableOpacity>
        <View style = {{justifyContent: "center", alignItems: "center", marginTop: 60}}>  
        <Image source = {require("./assets/to-do-list.png")}/>
        </View>
        <Text style = {{fontWeight: 700, fontSize: 30, lineHeight: 36, textAlign: "center", marginTop: 40, color: "#8353E2"}}> ADD YOUR TASK</Text>
        <View style={{alignItems: "center", marginTop: 60}}>
        <View style = {{flexDirection: "row", alignItems: "center", borderRadius: 10, borderWidth: 1, width: "90%",  padding: 7}}> 
        <View style = {{width: 30, height: 30, justifyContent: "center", alignItems: "center", }}>
        <Icon name="add" size={22} color="#000" type="material" />
        </View>
        <TextInput  placeholder="Enter your task" style = {{color: "gray", width: "90%", height: 30}} value={task} onChangeText={Settask}/> 
        
        </View>
       </View>
       <View>
       <View style = {{justifyContent: "center", alignItems: "center", marginTop: 75}}>
       <TouchableOpacity style= {{flexDirection: "row", justifyContent: "center",  alignItems: "center", width: 200, height: 70, backgroundColor: "#00BDD6", borderRadius: 10}} onPress = {() => AddItem()}  > 
          <Text style = {{color: 'white', fontWeight: 700, fontSize: 24}}> DONE </Text>
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
