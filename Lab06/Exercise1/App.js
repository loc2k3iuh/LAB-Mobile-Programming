import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const data = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
   image: require('./assets/xa_can_cau.png'),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require('./assets/lanh_dao_gian_don.png'),
  },
   {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/hieu_long_con_tre.png'),
  },
   {
    id: '7',
    title: 'Donald Trump - Lãnh đạo thiên tài',
    shop: 'Shop Minh Long Book',
    image: require('./assets/trump1.png'),
  },
];

export default function App() {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemShop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
    <View style = {styles.header}>
    <TouchableOpacity>
      <Image source={require('./assets/ant-design_arrow-left-outlined.png')}/>
      </TouchableOpacity>
      <Text style= {{color: 'white', fontWeight: 600, fontSize: 17}}> Chat </Text>
      <TouchableOpacity>
      <Image source={require('./assets/bi_cart-check.png')}/>
      </TouchableOpacity>
    </View>

    <ScrollView style= {styles.body}> 
    <View style= {{paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
    <Text style = {{fontWeight: 500}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!</Text>
     </View>
      <View style = {{marginTop: 20}}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  
    </View>
    </ScrollView>

    <View style = {styles.footer}> 
    <TouchableOpacity>
    <Image source={require('./assets/Vector1.png')}/>   </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./assets/Vector.png')}/>  </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./assets/Vector4.png')}/></TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },
  body: {
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },
 itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 74,
    height: 74,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    color: 'gray',
  },
  chatButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

