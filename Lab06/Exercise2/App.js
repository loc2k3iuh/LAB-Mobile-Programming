import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// You can import supported modules from npm


// or any files within the Snack
import AssetExample from './components/AssetExample';

const data = [
{
  id : '1',
  image: require('./assets/giacchuyen1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '2',
  image: require('./assets/daynguon1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '3',
  image: require('./assets/dauchuyendoipsps21.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '4',
  image: require('./assets/dauchuyendoi1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '5',
  image: require('./assets/carbusbtops21.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '6',
  image: require('./assets/daucam1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '7',
  image: require('./assets/giacchuyen1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '8',
   image: require('./assets/daynguon1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '9',
  image: require('./assets/carbusbtops21.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
{
  id : '10',
  image: require('./assets/dauchuyendoi1.png'),
  title: 'Cáp chuyển từ Cổng  USB sang PS2...'
},
]

const count = '(15)';
const price = '69.900 đ';
const discount = '-39%';


export default function App() {
  const  RenderItem = ({item}) => (
  
    <View style={styles.item}>
    <TouchableOpacity>
      <Image source= {item.image}/>
      <Text>{item.title}</Text> 
       <View style = {{flexDirection: 'row', gap: 7, alignItems: 'center', marginTop: 5}}>
        <View style = {{flexDirection: 'row'}}>
          <MaterialIcons name="star" size={22} style={{  color: '#ffb300' } } />
          <MaterialIcons name="star" size={22} style={{  color: '#ffb300' }}  />
          <MaterialIcons name="star" size={22} style={{  color: '#ffb300' }} />
          <MaterialIcons name="star" size={22} style={{  color: '#ffb300' }}/>
          <MaterialIcons name="star-border" size={22} style={styles.starUnselected} />
        </View> 
       <Text style = {{color: 'gray'}}>{count}</Text>

      </View>
      <View style = {{flexDirection: 'row', gap: 20, marginTop: 5}}>
       <Text style = {{ fontSize: 13, fontWeight: 600}}>{price}</Text>
        <Text style = {{color: 'gray'}}>{discount}</Text>
      </View></TouchableOpacity>
    </View>

  );



  return (
    <SafeAreaView style={styles.container}>
    <View style = {styles.header}>
    <TouchableOpacity>
     <Image source={require('./assets/ant-design_arrow-left-outlined.png')}/>
    </TouchableOpacity>

    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
    <View  style = {{width: 32, height: 32, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}> 
    <TouchableOpacity>
    <Image source={require('./assets/whh_magnifier.png')}/>
    </TouchableOpacity>
     </View>
         <TextInput style = {{color: 'gray', backgroundColor: 'white', height: 32, paddingLeft: 4}} placeholder="Nhập văn bản ở đây"/>
    </View>

    <TouchableOpacity style = {{}}> 
    <Image source={require('./assets/bi_cart-check.png')} /> 
    <Image style = {{position: 'absolute', top: -4, right: -5}} source={require('./assets/Ellipse4.png')} /> 
    </TouchableOpacity>

    <TouchableOpacity>
    <Image source={require('./assets/Group2.png')}/>
    </TouchableOpacity>
    </View>
 
    <ScrollView style = {styles.body}> 
    <FlatList
    data = {data}
    renderItem = {RenderItem}
    keyExtractor = {(item) => item.id}
    numColumns = {2}
    />

    </ScrollView>

     <View style = {styles.footer}> 
    <TouchableOpacity>
    <Image source={require('./assets/Group10.png')}/></TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./assets/Vector.png')}/>  </TouchableOpacity>
     <TouchableOpacity>
    <Image source={require('./assets/Vector1.png')}/>   </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },

  body:{
    height: '100%'
  },

   footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 42,
    backgroundColor: '#1BA9FF',
  },

  item:{
    flex: 1,
    marginTop: 20, 
    marginLeft: 10, 

  },
});
