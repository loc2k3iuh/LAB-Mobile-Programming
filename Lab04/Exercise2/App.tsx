import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const FirstScreen = () => {
  const [isCheckedLowerCase, setIsCheckedLowerCase] = useState(false);
  const [isCheckedUpCase, setIsCheckedUpCase] = useState(false);
  const [isCheckedNumber, setIsCheckedNumber] = useState(false);
  const [isCheckedSpecialSymbol, setIsCheckedSpecialSymbol] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState("");

  const toggleCheckBoxLowerCase = () => setIsCheckedLowerCase(!isCheckedLowerCase);
  const toggleCheckBoxUpCase = () => setIsCheckedUpCase(!isCheckedUpCase);
  const toggleCheckBoxNumber = () => setIsCheckedNumber(!isCheckedNumber);
  const toggleCheckBoxSpecialSymbol = () => setIsCheckedSpecialSymbol(!isCheckedSpecialSymbol);

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialSymbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characterSet = "";
    let guaranteedCharacters = "";

    if(isCheckedLowerCase) 
    {
      characterSet += lowerCaseLetters;
      guaranteedCharacters += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    }
    if(isCheckedUpCase) {
      characterSet+=upperCaseLetters;
      guaranteedCharacters += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    }
    if(isCheckedNumber) {
      characterSet+=numbers;
      guaranteedCharacters += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if(isCheckedSpecialSymbol) {
      characterSet+=specialSymbols;
      guaranteedCharacters += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    }

    if(characterSet === ""){
     alert('Please select at least one character type!'); 
    }

    const passLength = parseInt(passwordLength) || 8;
    let generatePassword = guaranteedCharacters;
    for(let i = guaranteedCharacters.length; i< passLength; i++){
      const radomIndex = Math.floor(Math.random() * characterSet.length);
      generatePassword += characterSet[radomIndex];
    }

    generatePassword = shuffleString(generatePassword);

    setPassword(generatePassword);

  };

  const shuffleString = (str) => {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
};

  return (
    <View style={styles.container}>
      <View style={[styles.form, styles.shadowProp]}>
        <View style={styles.header}>
          <Text style={styles.textHeader}> PASSWORD {'\n'} GENERATOR </Text>
          <TextInput style={styles.inputHeader} editable={false} value={password} />
        </View>

        <View style={styles.body}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Password length </Text>
            <TextInput
              style={{ width: 118, height: 33, backgroundColor: 'white'}}
              keyboardType="numeric"
              value={passwordLength}
              onChangeText={setPasswordLength}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Include lower case letters </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckBoxLowerCase}>
              <Icon
                name={isCheckedLowerCase ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={isCheckedLowerCase ? '#4CAF50' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Include upcase letters </Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckBoxUpCase}>
              <Icon
                name={isCheckedUpCase ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={isCheckedUpCase ? '#4CAF50' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Include number</Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckBoxNumber}>
              <Icon
                name={isCheckedNumber ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={isCheckedNumber ? '#4CAF50' : '#000'}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Include special symbol</Text>
            <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckBoxSpecialSymbol}>
              <Icon
                name={isCheckedSpecialSymbol ? 'check-box' : 'check-box-outline-blank'}
                size={24}
                color={isCheckedSpecialSymbol ? '#4CAF50' : '#000'}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={{ width: '100%', height: 55, backgroundColor: '#3B3B98', justifyContent: 'center', alignItems: 'center' }}
            onPress={generatePassword}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}> GENERATE PASSWORD </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  form: {
    width: '100%',
    height: '100%',
    backgroundColor: '#23235B',
    borderRadius: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 100,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 29.3,
    textAlign: 'center',
    color: 'white',
  },
  inputHeader: {
    width: '100%',
    height: 55,
    backgroundColor: '#151537',
    marginTop: 40,
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    paddingLeft: 10
  },
  body: {
    paddingTop: 30,
  },
  footer: {
    paddingTop: 50,
  },
});

export default FirstScreen;
