import React from 'react';
import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, TextInput, Linking, Alert} from 'react-native';

const FirstScreen = () => {

const [totalAmount, setTotalAmount] = useState(141800);
const [count, setCount] = useState(10);
const [discountList, setdiscountList] = useState([
    { id: '1', code: 'SUMMER2024', discount: 20 },
    { id: '2', code: 'WINTER2024', discount: 50 },
    { id: '3', code: 'SPRING2024', discount: 60 }
])
const [valueInput, setvalueInput] = useState("");
const [appliedDiscount, setAppliedDiscount] = useState(0.0);

const checkDiscountCode = () => {
const found = discountList.find(discount => discount.code === valueInput)
  if(found){
    setAppliedDiscount(found.discount);
    Alert.alert('Bạn được giảm ' + found.discount + '%' );
    
  }else{
    setAppliedDiscount(0);
    Alert.alert('Mã không hợp lệ !');
  }
  setvalueInput("");
  }
const calculateFinalAmount = () => {
    const totalAmountTimesCount = totalAmount * count;
    const discountAmount = (totalAmountTimesCount * appliedDiscount) / 100;
    return totalAmountTimesCount - discountAmount;
  };


  return (
    <View style={styles.container}>
      <View style= {styles.header}>
      
      <View style = {styles.header_nav_top}> 
        <View style = {styles.imageContainer}> 
          <Image style = {{borderWidth: 2, borderColor: 'purple', width: 104, height: 127}} source = {require('./assets/book.png')} />
          <Text style = {{fontWeight: 600, fontSize: 12, marginTop: 10}}>Mã giảm giá đã lưu</Text>
        </View>
        
         <View style = {styles.priceContainer}> 
          <Text style = {{fontSize: 12, fontWeight: 'bold', }}>Hàm tích phân và ứng dụng</Text>
          <Text style = {{fontSize: 12, fontWeight: 'bold', marginTop: 10}} >Cung cấp bởi TIKI Trading</Text>
          <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'red'}}>141.800 đ</Text>
          <Text  style = {{fontSize: 12, fontWeight: 'bold', color: 'gray', marginTop: 5, textDecorationLine: 'line-through' }}>190.000 đ</Text>
          <View style = {{flexDirection: 'row', marginTop: 10,justifyContent: 'space-between' }}>  
          <View style = {{flexDirection: 'row'}}> 
          <TouchableOpacity  style = {{width: 25, height: 25,  justifyContent: 'center', alignItems: 'center'}} onPress = {() => {
            if(count > 0)
            setCount(count-1)
          }}>
          <Text style = {{textAlign : 'center', fontWeight: 'bold'}}>-</Text>
          </TouchableOpacity>
          <Text>   {count}   </Text>
          <TouchableOpacity style = {{width: 25, height: 25,  justifyContent: 'center', alignItems: 'center'}} onPress = {() => [setCount(count+1), setTotalAmount(141800)]}  >
          <Text style = {{textAlign : 'center', fontWeight: 'bold'  }}>+</Text>
          </TouchableOpacity>
           </View>
            <View> 
            <Text style = {{fontWeight: 600,  color: 'blue'}}> Mua sau </Text>
             </View>


          </View>
          <View style = {{marginTop: 12,}}>  
          <Text style = {{ fontWeight: 700, fontSize: 12, color: 'blue'}}  
          onPress = {() => Linking.openURL('https://chat.openai.com/c/33acf44c-afbd-4bd2-8338-205894d89792')}
          >Xem tại đây </Text>
          </View>
        </View>
        
        

      </View>
        <View style = {{flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', alignItems: 'center' }}> 
        <View style = {{width: '70%', borderWidth: 1, borderRadius: 3, padding: 10,flexDirection: 'row', alignItems: 'center'}}>
          <View style = {{width: 32, height: 16, backgroundColor: 'green'}}> 
          
          </View>
          <TextInput value = {valueInput} style = {{ marginLeft: 7, width: '80%'}} placeholder="Mã giảm giá" onChangeText = {(value) => setvalueInput(value)} autoCapitalize="characters"/>
        </View>
         <TouchableOpacity style = {{width: 80, height: 40, backgroundColor: '#0A5EB7', justifyContent: 'center', alignItems: 'center', borderRadius: 5}} onPress = {checkDiscountCode}>
          <Text style = {{textAlign : 'center', fontWeight: 'bold', color: 'white'}} > Áp dụng</Text>
          </TouchableOpacity>
         </View>
       </View>



        <View style = {styles.body}> 
         <View style = {{height: 51, width: '100%', backgroundColor: 'white', flexDirection: 'row', alignItems:  'center', padding: 10, justifyContent: 'space-between'}}>
              <Text style = {{fontSize: 11,  fontWeight: 'bold'}}> Bạn có phiếu quà tặng Tiki/Got it/ Urbox? </Text> 
              <Text  style = {{fontSize: 12, fontWeight: 'bold', color: '#134FEC'}} onPress = {() => Linking.openURL('https://chat.openai.com/c/33acf44c-afbd-4bd2-8338-205894d89792')}> Nhập tại đây? </Text> 
          </View>

            <View style = {{height: 51, width: '100%', backgroundColor: 'white', flexDirection: 'row', alignItems:  'center', padding: 10, justifyContent: 'space-between', marginTop: 20}}>
              <Text style = {{fontSize: 18,  fontWeight: 'bold'}}> Tạm tính</Text> 
              <Text  style = {{fontSize: 18, fontWeight: 'bold', color: 'red'}} > {totalAmount*count} đ</Text> 
          </View>

        </View>


        <View style = {styles.footer}> 
         <View style = {{width: '100%', backgroundColor: 'white', flexDirection: 'row', alignItems:  'center',  justifyContent: 'space-between'}}>
              <Text style = {{fontSize: 18,  fontWeight: 'bold', color: 'gray'}}>Thành tiền</Text> 
              <Text  style = {{fontSize: 18, fontWeight: 'bold', color: 'red'}}> {calculateFinalAmount()} đ </Text> 
          </View> 

          <View style = {{marginTop: 20}}> 
          <TouchableOpacity style = {{width: '100%',height: 45, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}> 
          <Text style = {{fontSize: 20, fontWeight: 700, color: 'white'}} onPress = {() => [Alert.alert('Đặt hàng thành công !'), setTotalAmount(0), setCount(0)] }> TIẾN HÀNH ĐẶT HÀNG </Text>
          </TouchableOpacity>
          </View>
          </View>
        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4', 
    paddingTop: 50

  },
  
  header: {
    padding: 15,
    height: 280,
 
    backgroundColor: 'white'
  },

  header_nav_top: {
    flexDirection: 'row',
  },

  imageContainer:{
  width : '42%'
  },

  priceContainer: {
  width : '58%'
  },

  body: {
    marginTop: 20,
  }, 

  footer: {
    padding: 10,
    height: 120,
    width: "100%",
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0
  }


});

export default FirstScreen;