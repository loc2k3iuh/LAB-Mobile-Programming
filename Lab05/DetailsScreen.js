import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const DetailsScreen = ({navigation}) => {
  const [selectedColor, setSelectedColor] = useState('xanh dương');
  const [imageSource, setImageSource] = useState(require('./assets/vs_blue.png')); // Hình ảnh mặc định
  const colors = [
    { name: 'bạc', image: require('./assets/vs_silver.png') },
    { name: 'đỏ' , image: require('./assets/vs_red.png') },
    { name: 'đen', image: require('./assets/vs_black.png') },
    { name: 'xanh dương', image: require('./assets/vs_blue.png') },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color.name);
    setImageSource(color.image); // Cập nhật hình ảnh
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={imageSource} style={styles.phoneImage} />
        <View style={{ gap: 6, marginTop: 10 }}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>Màu: <Text style={styles.boldText}>{selectedColor}</Text></Text>
          <Text>Cung cấp bởi <Text style={styles.boldText}>Tiki Tradding</Text></Text>
          <Text style={styles.price}>1.790.000 đ</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.colorSelectionText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorButtonsContainer}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color.name}
              style={[styles.colorButton, { backgroundColor: color.name === 'bạc' ? '#FCFCFC' : color.name === 'đỏ' ? '#F30D0D' : color.name === 'đen' ? '#000000' : '#234896' }]}
              onPress={() => handleColorChange(color)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.finalButton} onPress={() => navigation.navigate('Home', { selectedColor})}>
          <Text style={styles.finalButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    gap: 20,
    height: '32%',
    paddingTop: 20,
    paddingLeft: 10,
  },
  phoneImage: {
    width: 160, // Kích thước hình ảnh
    height: 200, // Kích thước hình ảnh
  },
  productTitle: {
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 17,
    marginTop: 10,
    width: 170,
  },
  boldText: {
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    width: '100%',
    height: '68%',
    padding: 10,
    backgroundColor: '#C4C4C4',
  },
  colorSelectionText: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 17,
  },
  colorButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: 20,
  },
  colorButton: {
    width: 85,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  finalButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1952E294',
    borderWidth: 1,
    borderColor: '#CA1536',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "10%",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  finalButtonText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
  },
});
