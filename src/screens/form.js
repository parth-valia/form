import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {TextInput,RadioButton, Button} from 'react-native-paper';
import database from '@react-native-firebase/database';
import styles from '../styles/styles';

const Form = () => {
    const[name,setName]=useState('')
    const[phone,setPhone]=useState('')
    const[address,setAddress]=useState('')
    const[gender,setGender]=useState('')

    const pushData=()=>{
      const newReference = database().ref('/users').push();
      console.log('Auto generated key: ', newReference.key);
      newReference
      .set({
        name,
        phone,
        address,
        gender
      })
      .then(() => console.log('Data added.'));
      
    }
  return (
    <View>
        <Text style={styles.titlestyle}>Form</Text>
        <TextInput
            label='Name'
            value={name}
            mode='outlined'
            style={styles.inputstyle}
            onChangeText={(text)=>setName(text)} 
        />
        <Text style={styles.errorstyle}>{name == null || name.length <3 ? "Name have at least 3 characters" : null}</Text>
        
        <TextInput
            label='Phone'
            value={phone}
            maxLength={10}
            mode='outlined'
            keyboardType='phone-pad'
            style={styles.inputstyle}
            onChangeText={(text)=>setPhone(text)}
        />
        <Text style={styles.errorstyle}> {phone == null ||  phone.length<10 ? 'Invaild Phone Number' : null} </Text>
        
        <TextInput
            label='Address'
            value={address}
            mode='outlined'
            style={styles.inputstyle}
            multiline={true}
            numberOfLines={3}
            onChangeText={(text)=>setAddress(text)}
        />
        <Text style={styles.errorstyle}> {address ==null || address.length<10 ? 'Address have atleast 10 characters' : null } </Text>

          <RadioButton.Group 
            value={gender} 
            onValueChange={(value)=>setGender(value)}
          >
            <Text style={styles.radiotitlestyle}>Gender : </Text>
            <View style={styles.optionview}>
              <View style={styles.optioncontainer}>
                <RadioButton value='male' color='blue'></RadioButton>
                <Text>Male</Text>
              </View>
              <View style={styles.optioncontainer}>
                <RadioButton value='female' color='blue'></RadioButton>
                <Text>Female</Text>
              </View>
              <View style={styles.optioncontainer}>
                <RadioButton value='other' color='blue'></RadioButton>
                <Text>Other</Text>
              </View>
            </View>
          </RadioButton.Group>
          <TouchableOpacity
           onPress={()=>pushData()} 
           style={styles.buttonview}
          >
            <Text style={styles.buttontext}>Save</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Form;