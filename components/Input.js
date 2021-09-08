import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";


const Input = (props) => {
 
  return (
    <View style={styles.screen}>
        <TextInput {...props} style={{...styles.input,...props.input}} ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    height:30,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical: 10
  }
});

export default Input;
