import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styles from './src/styles/styles';
import Form from './src/screens/form';


const App = () => {

  return (
    <SafeAreaView style={styles.containerstyle}>
      <Form/>
    </SafeAreaView>
  );
};

export default App;
