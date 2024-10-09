import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useEffect, useState } from "react";
import { Icon } from 'react-native-elements';

export default function List({navigation, route}) {
  const [data, Setdata] = useState([]);
  const [loading, Isloading] = useState(true);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newName, setNewName] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State cho tìm kiếm
  const userName = route.params?.userName || 'Guest';

  useEffect(() => {
    GetData();
    return () => {}
  }, []);

  const GetData = () => {
    const ApiUrl = "https://670620c2031fd46a83120917.mockapi.io/api/todo/todolist";
    fetch(ApiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((resJson) => { Setdata(resJson) })
      .catch((error) => {
        console.log('Error' + error);
      });
  };

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())); // Lọc danh sách dựa trên tìm kiếm

  const renderItem = ({ item }) => {
    return (
      <View style={{ with: "100%", height: 50, backgroundColor: "cyan", marginTop: 10, padding: 15, justifyContent: "space-between", borderRadius: 14, flexDirection: "row", alignItems: "center", gap: 5 }}>
        <TextInput value={item.name} style={{ color: "white", fontWeight: 700, width: "85%", fontSize: 15 }} editable={false} />

        <TouchableOpacity onPress={() => openEditModal(item)}>
          <Image source={require("./assets/edit.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Delete(item)}>
          <Image source={require("./assets/delete.png")} />
        </TouchableOpacity>
      </View>
    );
  };

  const Delete = (item) => {
    const ApiUrl = `https://670620c2031fd46a83120917.mockapi.io/api/todo/todolist/${item.id}`;
    fetch(ApiUrl, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          Setdata((prevData) => prevData.filter((i) => i.id !== item.id));
          console.log('Delete success!');
        } else {
          console.log('Delete failed');
        }
      })
      .catch((error) => {
        console.log('Error' + error);
      });
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setNewName(item.name);
    setEditModalVisible(true);
  };

  const saveEdit = () => {
    if (selectedItem) {
      const ApiUrl = `https://670620c2031fd46a83120917.mockapi.io/api/todo/todolist/${selectedItem.id}`;
      fetch(ApiUrl, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName })
      })
      .then((res) => res.json())
      .then((updatedItem) => {
        Setdata(prevData => prevData.map(i => i.id === selectedItem.id ? updatedItem : i));
        setEditModalVisible(false);
      })
      .catch((error) => {
        console.log("Error:" + error);
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={22} color="#000" type="material" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <Image source={require('./assets/Frame.png')} style={{ width: 60, height: 60 }} />
            <View>
              <Text style={{ fontWeight: 700, fontSize: 25 }}>Hi {userName}</Text>
              <Text style={{ fontWeight: 700, fontSize: 17, color: "gray" }}>Have a great day ahead</Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 6, borderWidth: 1, width: "95%", padding: 7 }}>
            <TouchableOpacity style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center" }}>
              <Icon name="search" size={22} color="#000" type="material" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search"
              style={{ color: "gray", width: "100%", height: 30 }}
              value={searchQuery} // Gán giá trị tìm kiếm
              onChangeText={text => setSearchQuery(text)} // Cập nhật giá trị tìm kiếm
            />
          </View>
        </View>

 
        <View style={{ flex: 1 }}> 
          <FlatList
            style={styles.flatList}
            data={filteredData} 
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false} 
          />
        </View>

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <TouchableOpacity style={{ width: 63, height: 63 }} onPress={() => { navigation.navigate("Add", { Setdata }) }}>
            <Image source={require("./assets/plus.png")} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
        </View>

        {/* Modal chỉnh sửa */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditModalVisible}
          onRequestClose={() => setEditModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit Task</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
            />
            <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
              <Text style={{ color: 'white', fontWeight: '700' }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setEditModalVisible(false)}>
              <Text style={{ color: 'white', fontWeight: '700' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
    marginTop: 10,
    padding: 10,
    flex: 1,
  },
  flatList: {
    marginTop: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  saveButton: {
    backgroundColor: '#00BDD6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: 'white',
  }
});
