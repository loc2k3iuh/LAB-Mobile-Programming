import { Text, SafeAreaView, StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

const Home = ({ navigation, route  }) =>  {

  const { selectedColor } = route.params || {};
  const [imageSource, setImageSource] = useState(require('./assets/vs_blue.png')); // Hình ảnh mặc định

 // Đặt bảng ánh xạ ra ngoài useEffect
  const colorImageMap = {
    'bạc': require('./assets/vs_silver.png'),
    'đỏ': require('./assets/vs_red.png'),
    'đen': require('./assets/vs_black.png'),
    'xanh dương': require('./assets/vs_blue.png'),
  };

  useEffect(() => {
    if (selectedColor) {
      setImageSource(colorImageMap[selectedColor]); // Cập nhật hình ảnh dựa trên màu đã chọn
    }
  }, [selectedColor]); // Chỉ phụ thuộc vào selectedColor




  return (
    <SafeAreaView  style={styles.container}>
     <View style= {styles.header}> 
     <Image style = {styles.imageheader} source = {imageSource}/>
     </View>

     <View style = {styles.body}>
      <Text style = {{ fontWeight: 600, lineHeight: 17.58, marginTop: 20}}> Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text>
      <View style = {styles.rating_container}> 
       <View style= {styles.star_container}>
        <Image style = {{width: 23, height: 25}} source = {require('./assets/star.png')}/>
         <Image style = {{width: 23, height: 25}} source = {require('./assets/star.png')}/>
          <Image style = {{width: 23, height: 25}} source = {require('./assets/star.png')}/>
           <Image style = {{width: 23, height: 25}} source = {require('./assets/star.png')}/>
            <Image style = {{width: 23, height: 25}} source = {require('./assets/star.png')}/>
      </View>
      <Text onPress = {() => Linking.openURL('')}>(Xem 282 đánh giá)</Text>
      </View>
        <View style = {styles.price_container}>
        <Text style = {{fontWeight: 700, fontSize: 18}}>1.790.000 đ </Text>
        <Text style = {{textDecorationLine: "line-through"}}>1.790.000 đ</Text>
         </View>
         <View style= {{flexDirection: 'row',alignItems: 'center', marginTop: 15}}> 
         <Text style = {{fontSize: 12, fontWeight: 600, color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
         <View style = {{width: 20, height: 20, borderBlockColor: 'black', borderWidth: 2, borderRadius: '100%', alignItems: 'center', justifyContent: 'center', marginLeft: 5}}> 
         <Text>?</Text>
         </View>
         </View>
       <TouchableOpacity style= {styles.button}  onPress={() => navigation.navigate('DetailsScreen')}> 
        <Text>4 MÀU-CHỌN MÀU </Text>
       </TouchableOpacity>

      </View>
     <View style = {{position: 'absolute', bottom: 40,  width: '100%', alignItems: 'center', justifyContent: 'center'}}> 
      <TouchableOpacity style= {{width: "90%", height: 50, backgroundColor: 'red',borderRadius: 9,  justifyContent: 'center', alignItems: 'center'}}> 
      <Text style ={{color: 'white', }}>CHỌN MUA</Text>
       </TouchableOpacity>
     
     </View>

    </SafeAreaView >
  );
}

export default Home;



const styles = StyleSheet.create({
  container: {
    flex :1
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBlockColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 450
  },


  imageheader: {
    width: 354,
    height: 441
  },

  body:{
   padding: 5,
  },

  star_container: {
    flexDirection: 'row',
    gap: 3
  },

  rating_container: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: "space-between",
     marginTop: 15
  },
  
  price_container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 15
  },
  
  button: {
    width: "100%",
    height: 40,
    borderRadius: 9,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  }
  
});


