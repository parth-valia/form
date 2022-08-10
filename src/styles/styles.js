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


const styles = StyleSheet.create({
    containerstyle:{
      flex:1,
    },
    inputstyle:{
      margin:5,
      marginHorizontal:20
    },
    titlestyle:{
      alignSelf:"center",
      fontSize:30,
      marginVertical:30,
      color:'black'
    },
    radiotitlestyle:{
      color:"black",
      fontSize:20,
      margin:10,
      marginHorizontal:20
    },
    optionview:{
      flexDirection:"row",
      marginHorizontal:20
    },
    optioncontainer:{
      flexDirection:"row",
      alignItems:"center",
      marginHorizontal:5
    },
    errorstyle:{
      color:'red',
      marginHorizontal:20
    },
    buttonview:{
      backgroundColor:"blue",
      alignItems:'center',
      alignSelf:"center",
      justifyContent:"center",
      margin:30,
      padding:10,
      height:50,
      width:"50%",      
      borderRadius:30
    },
    buttontext:{
      color:"white",
      fontSize:25
    }
  });

export default styles;