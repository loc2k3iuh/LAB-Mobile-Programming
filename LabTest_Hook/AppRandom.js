import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Button, Card } from 'react-native-paper';
import React, { useState } from 'react';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function AppRandom() {

const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View>
    <Text style={{textAlign: 'center'}}>Count: {count}</Text>
    </View>
    <Button onPress={() => setCount(count + 1)}>Increment</Button>
    <Button onPress={() => setCount(0)}>Reset</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
